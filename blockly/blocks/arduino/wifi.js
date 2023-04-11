/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for the Arduino wifi communcations.
 *     The Arduino built in functions syntax can be found at:
 *     http://arduino.cc/en/Reference/HomePage
 *
 */
'use strict';

goog.provide('Blockly.Blocks.wifi');
goog.provide('Blockly.Blocks.OSC');
goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.wifi.HUE = 10;
Blockly.Blocks.OSC.HUE = 90;

Blockly.Blocks['wifi_setup'] = {
  /**
   * Block for setting the speed of the WIFI connection.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://www.arduino.cc/en/Reference/WiFiNINABegin');
    this.setColour(Blockly.Blocks.wifi.HUE);
    this.appendDummyInput()
        .appendField("Setup WiFi with ssid: ")
        .appendField(new Blockly.FieldTextInput(""), 'SSID')
        .appendField(" and password: ")
        .appendField(new Blockly.FieldTextInput(""), 'PASSWORD')
    this.setInputsInline(true);
    this.setTooltip("Begin wifi connection with specified credentials.");
  }
};


Blockly.Blocks['Nina_led'] = {
  /**
   * Block for controlling LEDS
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://store.arduino.cc/arduino-mkr-wifi-1010');
    this.setColour(Blockly.Blocks.wifi.HUE);
    this.appendDummyInput()
        .appendField("MKR1010 LED:")
    this.appendValueInput('RED')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("red: ");
    this.appendValueInput('GREEN')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("green: ");
    this.appendValueInput('BLUE')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("blue:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("set MKR1010 RGB LED color");
  },

  onchange: function(event) {
    if (!this.workspace || event.type == Blockly.Events.MOVE ||
        event.type == Blockly.Events.UI) {
      return;  // Block deleted or irrelevant event
    }
    var r = Blockly.Arduino.valueToCode(
        this, "RED", Blockly.Arduino.ORDER_ATOMIC)
    var g = Blockly.Arduino.valueToCode(
        this, "GREEN", Blockly.Arduino.ORDER_ATOMIC)
    var b = Blockly.Arduino.valueToCode(
        this, "BLUE", Blockly.Arduino.ORDER_ATOMIC)
    if (r > 255 ||g > 255||b > 255 ) {
      this.setWarningText("LEDs chanels can only have a value of 0 to 255", 'Nina_led');
    }  else {
      this.setWarningText(null, 'Nina_led');
    }
  },
};

Blockly.Blocks['Nina_led_hsb'] = {
  /**
   * Block for controlling LEDS
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://store.arduino.cc/arduino-mkr-wifi-1010');
    this.setColour(Blockly.Blocks.wifi.HUE);
    this.appendDummyInput()
        .appendField("MKR1010 LED:")
    this.appendValueInput('HUE')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("hue: ");
    this.appendValueInput('SATURATION')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("saturation: ");
    this.appendValueInput('BRIGHTNESS')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("brightness:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("set MKR1010 HSB LED color");
  }
};


Blockly.Blocks['OSC_setup'] = {
  /**
   * Block for setting the speed of the WIFI connection.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/CNMAT/OSC');
    this.setColour(Blockly.Blocks.OSC.HUE);
    this.appendDummyInput()
        .appendField("Setup OSC")
    this.appendDummyInput()
        .appendField("Port: ")
        .appendField(new Blockly.FieldTextInput("8000"), 'PORT')
    this.setInputsInline(false);
    this.setTooltip("Begin OSC with specified credentials.");
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['OSC_publish'] = {
  /**
   * Block for MQTT publish
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/CNMAT/OSC');
    this.setColour(Blockly.Blocks.OSC.HUE);
    this.appendValueInput('REMOTEADRESS')
    .appendField("Send OSC message to IP")
    this.appendValueInput('TOPIC')
        .appendField("on topic ")
    this.appendValueInput('PAYLOAD')
        .appendField("data")
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("publish OSC message");
  }
};

Blockly.Blocks['OSC_subscribe'] = {
  /**
   * Block for MQTT subscribe
   * @this Blockly.Block
   *
   */

  init: function() {
    this.setHelpUrl('https://github.com/CNMAT/OSC');
    this.setColour(Blockly.Blocks.OSC.HUE );
    this.appendValueInput('TOPIC')
        .appendField("Subscribe OSC topic ")
    this.appendDummyInput()
        .appendField(" to ")
        .appendField(new Blockly.FieldVariable(
            Blockly.Msg.TEXT_APPEND_VARIABLE), 'VAR');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      return Blockly.Msg.TEXT_APPEND_TOOLTIP.replace('%1',
          thisBlock.getFieldValue('VAR'));
    });
  },

  getVarType: function(varName) {
    return Blockly.Types.TEXT;
  }
};