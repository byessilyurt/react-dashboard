import React from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

import { Header } from "../components";

const ColorPicker = () => {
  const [value, setValue] = React.useState({
    hex: "#FF0000",
  });
  const copyToClipboard = () => {
    navigator.clipboard.writeText(value.hex);
  };
  const change = (args) => {
    setValue({ hex: args.currentValue.hex });
    document.getElementById("preview").style.backgroundColor =
      args.currentValue.hex;
  };

  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Color Picker" category="App" />
      <div className="text-center">
        <div
          id="preview" //pen
        />
        <div
          onClick={copyToClipboard}
          className={`cursor-pointer text-xl font-semibold tracking-tight w-40 rounded-lg shadow-xl m-auto bg-white`}
          style={{ color: `${value.hex}` }}
        >
          {value.hex}
        </div>

        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl mt-2 mb-4 font-semibold">Inline Palette</p>
            <ColorPickerComponent
              id="inline-palette"
              mode="Palette"
              modeSwitcher={false}
              inline={true}
              showButtons={false}
              change={change}
            />
          </div>
          <div>
            <p className="text-2xl mt-2 mb-4 font-semibold">Inline Palette</p>
            <ColorPickerComponent
              id="inline-picker"
              mode="Picker"
              inline={true}
              modeSwitcher={false}
              showButtons={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
