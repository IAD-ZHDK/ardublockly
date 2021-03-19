#!/bin/bash
pyinstaller start.py \
    --onefile \
    --name IADArduinoBlockly \
    --add-data ardublockly:ardublockly \
    --add-data blockly:blockly \
    --add-data blocks:blocks \
    --add-data ArdublocklySketch:ArdublocklySketch \
    --add-data ServerCompilerSettingsMac.ini:ServerCompilerSettings.ini \