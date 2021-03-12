/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for the Arduino mqtt communcations.
 *     The Arduino built in functions syntax can be found at:
 *     http://arduino.cc/en/Reference/HomePage
 *
 */
'use strict';

goog.provide('Blockly.Blocks.mqtt');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.mqtt.HUE = 25;

Blockly.Blocks['mqtt_setup'] = {
  /**
   * Block for setting the speed of the WIFI connection.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://www.shiftr.io/docs/manuals/arduino/');
    this.setColour(Blockly.Blocks.mqtt.HUE);
    this.appendDummyInput()
        .appendField("Setup MQTT Client")
    this.appendDummyInput()
        .appendField("Broker: ")
        .appendField(new Blockly.FieldTextInput("public.cloud.shiftr.io"), 'BROKER')
        .appendField("Port: ")
        .appendField(new Blockly.FieldTextInput("1883"), 'PORT')
    this.appendDummyInput()
        .appendField("Device Id: ")
        .appendField(new Blockly.FieldTextInput("arduino"), 'DEVICE')
    this.appendDummyInput()
        .appendField("Username: ")
        .appendField(new Blockly.FieldTextInput(""), 'USERNAME')
        .appendField("Password: ")
        .appendField(new Blockly.FieldTextInput(""), 'PASSWORD')
    this.setInputsInline(false);
    this.setTooltip("Begin MQTT connection with specified credentials.");
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['mqtt_publish'] = {
  /**
   * Block for MQTT publish
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://www.shiftr.io/docs/manuals/arduino/');
    this.setColour(Blockly.Blocks.mqtt.HUE);
    this.appendValueInput('TOPIC')
        .appendField("on MQTT topic ")
    this.appendValueInput('PAYLOAD')
        .appendField("publish")
        .setCheck(Blockly.Types.TEXT.checkList)
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("publish MQTT message");
  }
};

Blockly.Blocks['mqtt_subscribe'] = {
  /**
   * Block for MQTT subscribe
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "subscribe MQTT topic %2 to %1",
      "args0": [
        {
          "type": "field_variable",
          "name": "VAR",
          "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
        },
        {
          "type": "input_value",
          "name": "TOPIC",
          "check": Blockly.Types.TEXT.checkList,
          "align": "RIGHT"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Blocks.mqtt.HUE,
      "helpUrl": 'https://www.shiftr.io/docs/manuals/arduino/'
    });
  },
};