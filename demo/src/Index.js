import React from "react";
import Page from "./Page";
import theme from "./theme";
import Heading from "./Heading";
import Box from "./Box";
import { Knob } from "react-rotary-knob";
import * as skins from "../../index";
import DemoContainer from "./DemoContainer";
import styled from "styled-components";

const largeSize = {
  unlockDistance:0,
  preciseMode:false,
  style: {
    width: "200px",
    height: "200px",
    display:'inline-block',
    margin:'10px'
    
  }
};

const smallSize = {
  unlockDistance:0,  
  style: {
    width: "70px",
    height: "70px",
    display:'inline-block',
    margin:'10px'
    
  }
};

const Index = props => (
  <Page>
    <Heading>react-rotary-knob Skin package.</Heading>
    <DemoContainer>
      <Knob {...largeSize} skin={skins.s1} />
      <Knob {...largeSize} skin={skins.s2} />
      <Knob {...largeSize} skin={skins.s3} />
      <Knob {...largeSize} skin={skins.s4} />
      <Knob {...largeSize} skin={skins.s5} />
      <Knob {...largeSize} skin={skins.s6} />
      <Knob {...largeSize} skin={skins.s7} />
      <Knob {...largeSize} skin={skins.s8} />
      <Knob {...largeSize} skin={skins.s9} />
      <Knob {...largeSize} skin={skins.s10} />
      <Knob {...largeSize} skin={skins.s11} />
      <Knob {...largeSize} skin={skins.s12} />
      <Knob {...largeSize} skin={skins.s13} />
      <Knob {...largeSize} skin={skins.s14} />
      <Knob {...largeSize} skin={skins.s15} />
      <Knob {...largeSize} skin={skins.s16} />
      <Knob {...largeSize} skin={skins.s17} />
      <Knob {...largeSize} skin={skins.s18} />
    </DemoContainer>

    <DemoContainer>
      <Knob {...smallSize} skin={skins.s1} />
      <Knob {...smallSize} skin={skins.s2} />
      <Knob {...smallSize} skin={skins.s3} />
      <Knob {...smallSize} skin={skins.s4} />
      <Knob {...smallSize} skin={skins.s5} />
      <Knob {...smallSize} skin={skins.s6} />
      <Knob {...smallSize} skin={skins.s7} />
      <Knob {...smallSize} skin={skins.s8} />
      <Knob {...smallSize} skin={skins.s9} />
      <Knob {...smallSize} skin={skins.s10} />
      <Knob {...smallSize} skin={skins.s11} />
      <Knob {...smallSize} skin={skins.s12} />
      <Knob {...smallSize} skin={skins.s13} />
      <Knob {...smallSize} skin={skins.s14} />
      <Knob {...smallSize} skin={skins.s15} />
      <Knob {...smallSize} skin={skins.s16} />
      <Knob {...smallSize} skin={skins.s17} />
      <Knob {...smallSize} skin={skins.s18} />
    </DemoContainer>
  </Page>
);

export default Index;
