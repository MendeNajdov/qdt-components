/**
 * @name QdtSelect
 * @param {object} layout - Qlik object layout
 * @param {string} model - Qlik object model
 * @param {options} object - Options
 * @param {options.clearSelections} text - Adds a custom row with given text, to clear selections
*/

import React, {
  useCallback, useMemo, useRef, // useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  FormControl, InputLabel, Select, MenuItem, Input, LinearProgress, ListItemText, ListItemIcon,
} from '@material-ui/core';
import uuidv4 from 'uuid/v4';
import merge from 'utils/merge';
import SearchIcon from '@material-ui/icons/Search';
import CheckIcon from '@material-ui/icons/Check';

const QdtSelect = ({ layout, model, options: optionsProp }) => {
  const defaultOptions = {
    multiple: false,
    showLabel: true,
    showSearch: true,
    placeholder: null,
    clearSelectionsRow: null,
  };
  const options = merge(defaultOptions, optionsProp);

  const { current: id } = useRef(uuidv4());

  const selectValue = useMemo(() => {
    let sv = layout.qListObject?.qDataPages[0]?.qMatrix.filter((row) => row[0].qState === 'S') || [];
    if (!options.multiple) {
      sv = (sv.length && sv[0].length) ? sv[0][0] : sv[0];
    }
    return sv;
    // return (options.multiple) ? sv : sv[0];
  }, [layout.qListObject, options.multiple]);
  const selectRenderValue = useMemo((selected) => {
    if (!selected) return;
    if (selected.length === 1) {
      return selected[0][0].qText;
    }
    return `${selected.length} of ${layout.qListObject?.qSize?.qcy} selected`;
  }, [layout]);

  const handleOpen = useCallback(() => {
    model.beginSelections(['/qListObjectDef']);
  }, [model]);
  const handleClose = useCallback(() => {
    model.endSelections(true);
  }, [model]);
  const handleChange = useCallback((event) => {
    if (event.target.value === 'clearSelections') {
      model.clearSelections('/qListObjectDef');
    } else {
      const qValues = (options.multiple) ? event.target.value.map((v) => v[0].qElemNumber) : [event.target.value];
      model.selectListObjectValues('/qListObjectDef', qValues, false);
    }
  }, [model, options.multiple]);
  const handleSearch = useCallback((event) => {
    model.searchListObjectFor('/qListObjectDef', event.target.value);
  }, [model]);

  return (
    <>
      <FormControl variant="outlined" style={{ width: '100%' }} className="QdtSelect">
        { options.showLabel && <InputLabel id={`${id}-label`}>{layout.qListObject?.qDimensionInfo?.qFallbackTitle}</InputLabel>}
        <Select
          labelId={`${id}-label`}
          id={id}
          multiple={options.multiple}
          value={selectValue}
          renderValue={selectRenderValue}
          onOpen={handleOpen}
          onClose={handleClose}
          onChange={handleChange}
          input={<Input />}
        >
          {options.showSearch && (
            <MenuItem>
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <Input type="search" onChange={handleSearch} disableUnderline />
            </MenuItem>
          )}
          {options.clearSelectionsRow && (
            <MenuItem value="clearSelections">
              <ListItemText primary={options.clearSelectionsRow} />
            </MenuItem>
          )}
          {layout.qListObject?.qDataPages[0]?.qMatrix.map((row) => (
            <MenuItem
              key={row[0].qElemNumber}
              value={row[0].qElemNumber}
              className={classnames({
                selected: row[0].qState === 'S',
                excluded: row[0].qState === 'X',
              })}
            >
              <ListItemText primary={row[0].qText} />
              {row[0].qState === 'S'
                && (
                <ListItemIcon>
                  <CheckIcon />
                </ListItemIcon>
                )}
            </MenuItem>
          ))}
        </Select>
        <LinearProgress variant="determinate" value={80} />
      </FormControl>

      {/* <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          // value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <LinearProgress variant="determinate" value={80} />
      </FormControl> */}
    </>
  );
};

QdtSelect.propTypes = {
  layout: PropTypes.object,
  model: PropTypes.object,
  options: PropTypes.object,
};
QdtSelect.defaultProps = {
  layout: null,
  model: null,
  options: {},
};

export default QdtSelect;
