/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for Arduino Digital and Analogue input and output
 *     functions. The Arduino function syntax can be found at
 *     http://arduino.cc/en/Reference/HomePage
 *
 * TODO: maybe change this to a "PIN" BlocklyType
 */
'use strict';

goog.provide('Blockly.Blocks.io');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.io.HUE = 250;

Blockly.Blocks['io_digitalwrite'] = {
  /**
   * Block for creating a 'set pin' to a state.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/DigitalWrite');
    this.setColour(Blockly.Blocks.io.HUE);
    this.appendValueInput('STATE')
        .appendField(Blockly.Msg.ARD_DIGITALWRITE)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'PIN')
        .appendField(Blockly.Msg.ARD_WRITE_TO)
        .setCheck(Blockly.Types.BOOLEAN.checkList);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARD_DIGITALWRITE_TIP);
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'PIN', 'digitalPins');
  }
};

Blockly.Blocks['io_digitalread'] = {
  /**
   * Block for creating a 'read pin'.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/DigitalRead');
    this.setColour(Blockly.Blocks.io.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_DIGITALREAD)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'PIN');
    this.setOutput(true, Blockly.Types.BOOLEAN.output);
    this.setTooltip(Blockly.Msg.ARD_DIGITALREAD_TIP);
  },
  /** @return {!string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.BOOLEAN;
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'PIN', 'digitalPins');
  }
};

Blockly.Blocks['io_builtin_led'] = {
  /**
   * Block for setting built-in LED to a state.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/DigitalWrite');
    this.setColour(Blockly.Blocks.io.HUE);
    this.appendValueInput('STATE')
        .appendField(Blockly.Msg.ARD_BUILTIN_LED)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.builtinLed), 'BUILT_IN_LED')
        .appendField(Blockly.Msg.ARD_WRITE_TO)
        .setCheck(Blockly.Types.BOOLEAN.checkList);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARD_BUILTIN_LED_TIP);
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'BUILT_IN_LED', 'builtinLed');
  },
  /** @return {!string} The type of input value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.BOOLEAN;
  },
};

Blockly.Blocks['io_analogwrite'] = {
  /**
   * Block for creating a 'set pin' to an analogue value.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/AnalogWrite');
    this.setColour(Blockly.Blocks.io.HUE);
    this.appendValueInput('NUM')
        .appendField(Blockly.Msg.ARD_ANALOGWRITE)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.pwmPins), 'PIN')
        .appendField(Blockly.Msg.ARD_WRITE_TO)
        .setCheck(Blockly.Types.NUMBER.output);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ARD_ANALOGWRITE_TIP);
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(this, 'PIN', 'pwmPins');
  },
  /** @return {!string} The type of input value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  },
};

Blockly.Blocks['io_analogread'] = {
  /**
   * Block for reading an analogue input.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/AnalogRead');
    this.setColour(Blockly.Blocks.io.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_ANALOGREAD)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.analogPins), 'PIN');
    this.setOutput(true, Blockly.Types.NUMBER.output);
    this.setTooltip(Blockly.Msg.ARD_ANALOGREAD_TIP);
  },
  /** @return {!string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(this, 'PIN', 'analogPins');
  }
};

Blockly.Blocks['io_highlow'] = {
  /**
   * Block for creating a pin state.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/Constants');
    this.setColour(Blockly.Blocks.io.HUE);
    this.appendDummyInput()
        .appendField(
            new Blockly.FieldDropdown([[Blockly.Msg.ARD_HIGH, 'HIGH'], [Blockly.Msg.ARD_LOW, 'LOW']]),
           'STATE');
    this.setOutput(true, Blockly.Types.BOOLEAN.output);
    this.setTooltip(Blockly.Msg.ARD_HIGHLOW_TIP);
  },
  /** @return {!string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.BOOLEAN;
  }
};

Blockly.Blocks['io_pulsein'] = {
  /**
   * Block for measuring the duration of a pulse in an input pin.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "type": "math_foo",
      "message0": Blockly.Msg.ARD_PULSE_READ,
      "args0": [{
          "type": "input_value",
          "name": "PULSETYPE",
          "check": Blockly.Types.BOOLEAN.check
        }, {
          "type": "field_dropdown",
          "name": "PULSEPIN",
          "options": Blockly.Arduino.Boards.selected.digitalPins
        }
      ],
      "output": Blockly.Types.NUMBER.output,
      "inputsInline": true,
      "colour": Blockly.Blocks.io.HUE,
      "tooltip": Blockly.Msg.ARD_PULSE_TIP,
      "helpUrl": 'https://www.arduino.cc/en/Reference/PulseIn'
    });
  },
  /** @return {!string} The type of input value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};

Blockly.Blocks['io_pulsetimeout'] = {
  /**
   * Block for measuring (with a time-out) the duration of a pulse in an input
   * pin.
   * @this Blockly.Block
   */
  init: function () {
    this.jsonInit({
      "type": "math_foo",
      "message0": Blockly.Msg.ARD_PULSE_READ_TIMEOUT,
      "args0": [{
          "type": "input_value",
          "name": "PULSETYPE",
          "check": Blockly.Types.BOOLEAN.check
        }, {
          "type": "field_dropdown",
          "name": "PULSEPIN",
          "options": Blockly.Arduino.Boards.selected.digitalPins
        }, {
          "type": "input_value",
          "name": "TIMEOUT",
          "check": Blockly.Types.NUMBER.check
        }
      ],
      "output": Blockly.Types.NUMBER.output,
      "inputsInline": true,
      "colour": Blockly.Blocks.io.HUE,
      "tooltip": Blockly.Msg.ARD_PULSETIMEOUT_TIP,
      "helpUrl": 'https://www.arduino.cc/en/Reference/PulseIn'
    });
  },
  /** @return {!string} The type of input value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  }
};


Blockly.Blocks['io_neoPixel'] = {
  /**
   * Block for controlling neoPixel
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://www.adafruit.com/category/168');
    this.setColour(Blockly.Blocks.mkrIoTCarrier.HUE);
    this.appendDummyInput()
        .appendField("NeoPixel")
    this.appendValueInput('PIN_NO')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("NeoPixel Pin:");
    this.appendValueInput('LEDNUMBER')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("ID:");
    this.appendValueInput('RED')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("R:");
    this.appendValueInput('GREEN')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("G:");
    this.appendValueInput('BLUE')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .appendField("B:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Set one LED on the IOT Carrier");
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
      this.setWarningText("LEDs chanels can only have a value of 0 to 255", 'neoPixel');
    }  else {
      this.setWarningText(null, 'neoPixel');
    }
  },
};

Blockly.Blocks['VCNL4040_Proximity'] = {
  /**
   * Block for reading the sparkfun VCNL4040 proximity sensor
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://www.sparkfun.com/products/15177');
    this.setColour(Blockly.Blocks.mkrIoTCarrier.HUE);

    this.appendDummyInput()
        .appendField("Proximity Sensor Distance")
    this.setOutput(true, Blockly.Types.NUMBER.output);
    this.setTooltip("The value ranges from 0 to 65535");
  },
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  },
};