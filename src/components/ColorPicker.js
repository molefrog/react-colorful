import React, { useState, useEffect, useCallback, useRef } from "react";
import Hue from "./Hue";
import Saturation from "./Saturation";
import { hsvToHex, hexToHsv, formatClassName } from "../utils";
import styles from "../styles.css";

const areSame = (color1, color2, eps = 1) => {
  for (let prop in color1) {
    if (Math.abs(color1[prop] - color2[prop]) > eps) return false;
  }
  return true;
};

const ColorPicker = ({ className, hex, onChange }) => {
  // Input and output formats are HEX (#aabbcc),
  // but all internal calculations are based on HSV model
  const [hsv, updateHsv] = useState(() => hexToHsv(hex));

  // By using this ref we're able to prevent extra updates
  // and the effects recursion during the color conversion
  const sourceHexRef = useRef(hex);
  const sourceHsvRef = useRef(hsv);

  // Update local HSV if `hex` property value is changed,
  // but only if it's not the same HEX-color that we just sent to the parent
  useEffect(() => {
    if (hex !== sourceHexRef.current) updateHsv(hexToHsv(hex));
  }, [hex]);

  // Convert updated HSV to HEX-format, send it to the parent component
  // and save the new HEX-color to the ref to prevent an unnecessary update
  useEffect(() => {
    if (!areSame(sourceHsvRef.current, hsv)) {
      const newHex = hsvToHex(hsv);
      sourceHexRef.current = newHex;
      sourceHsvRef.current = hsv;
      onChange(newHex);
    }
  }, [hsv, onChange]);

  // Merge the current HSV color object with updated params.
  // For example, when a child component sends `hue` or `sat` only
  const handleChange = useCallback((params) => {
    updateHsv((current) => Object.assign({}, current, params));
  }, []);

  const nodeClassName = formatClassName(["react-colorful", styles.container, className]);

  return (
    <div className={nodeClassName}>
      <Saturation hsv={hsv} onChange={handleChange} />
      <Hue hue={hsv.h} onChange={handleChange} />
    </div>
  );
};

ColorPicker.defaultProps = {
  hex: "#000000",
  onChange: () => {},
};

export default React.memo(ColorPicker);
