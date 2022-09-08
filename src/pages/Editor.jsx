import React from "react";
import {
  HtmlEditor,
  Toolbar,
  Inject,
  Image,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
} from "@syncfusion/ej2-react-richtexteditor";

import { EditorData } from "../data/dummy";
import { Header } from "../components";

const Editor = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Editor" category="App" />
      <RichTextEditorComponent id="editor" value={EditorData}>
        <EditorData />
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
