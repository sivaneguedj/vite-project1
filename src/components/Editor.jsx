import React, { useState  } from 'react'
import Keyboard from './Keyboard/Keyboard'
import Toolbar from './Toolbar/Toolbar'
import style from './Editor.module.css'



// Editor component
const Editor = () => {
  const [content, setContent] = useState('');   //  stores the text content of the editor.   (content state)
  const [shiftPressed, setShiftPressed] = useState(false);
  const [language, setLanguage] = useState('en');
  const [boldPressed, setBoldPressed] = useState(false);
  const [italicPressed, setItalicPressed] = useState(false);
  const [underlinePressed, setUnderlinePressed] = useState(false);
  const [fontName, setfontName] = useState('');
  const [fontSize, setfontSize] = useState('');
  const [foreColor, setforeColor] = useState('');
  const [history, setHistory] = useState([]);

  // Add the current state to the history stack
  const updateHistory = () => {
    setHistory((prevHistory) => [
      ...prevHistory,
      {
        content,
        shiftPressed,
        language,
        boldPressed,
        italicPressed,
        underlinePressed,
        fontName,
        fontSize,
        foreColor,
      },
    ]);
  };

  // Handle undo action
  const handleUndo = () => {
    if (history.length > 0) {
      const lastState = history[history.length - 1];
      setContent(lastState.content);
      setShiftPressed(lastState.shiftPressed);
      setLanguage(lastState.language);
      setBoldPressed(lastState.boldPressed);
      setItalicPressed(lastState.italicPressed);
      setUnderlinePressed(lastState.underlinePressed);
      setfontName(lastState.fontName);
      setfontSize(lastState.fontSize);
      setforeColor(lastState.foreColor);
      setHistory((prevHistory) => prevHistory.slice(0, -1));
    }
  };


  // // Wrap the set state functions to include history update
  // const setAndUpdateHistory = (setter) => (value) => {
  //   updateHistory();
  //   setter(value);
  // };



  /* This function is called when a key is pressed on the virtual keyboard.
  It appends the pressed character to the content state. */
    const handleInput = (input) => {
      updateHistory();
      setContent(prevText => prevText + input);
      setShiftPressed(false);
    }

    const handleShift = () => {
      updateHistory();
      setShiftPressed(true);
  
    }
    

    /* This function is called when the backspace/Delete key is pressed.
    It removes the last */
    const handleBackspace = () => {
      updateHistory();
      setContent((prevContent) => prevContent.slice(0, -1));  
    };
   

    /* This function is called when the language button is pressed.
    It switches between languagues */
    const handleLanguageChange = () => {
      updateHistory();
      setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'he' : 'en'));
    };

    const handleClear = ()=> {
      updateHistory();
        setContent("");
    }


    /* This function is called when the Bold button is pressed. */
    const handleBold = () => {
      updateHistory();
      setBoldPressed((prevBoldPressed) => ! prevBoldPressed);
    };


    /* This function is called when we would like to increase the font size. */
    const handleBiggerFontSize = (size) => {
      updateHistory();
      setfontSize(size);
    };
    

    /* This function is called when Italic button us pressed. */
    const handleItalic = () => {
      updateHistory();
      setItalicPressed((prevItalicPressed) => !prevItalicPressed);
    };


    /* This function is called when underline button is pressed. */
    const handleUnderline = () => {
      updateHistory();
      setUnderlinePressed((prevUnderlinePressed) => !prevUnderlinePressed);
    };

    /* This function is called when underline button is pressed. */
    const handleFontName = (font) => {
      updateHistory();
      setfontName(font);
    };

    const handleForeColor = (color) => {
      updateHistory();
      setforeColor(color);
    };


    // Function called when a toolbar command button is pressed
  const handleCommand = (command, value) => {
    switch (command) {
      case 'clear':
        handleClear();
        break;
      case 'shift':
        handleShift();
        break;
      case 'bold':
        handleBold();
        break;
      case 'italic':
        handleItalic();
        break;
      case 'underline':
        handleUnderline();
        break;
      case 'fontName':
        handleFontName(value);
        break;
      case 'size':
        handleBiggerFontSize(value);
        break;
      case 'foreColor':
        handleForeColor(value);
        break;
      case 'undo':
        handleUndo();
      default:
        break;
    }
  };





  return (
    <div className="editor-container" >
      <h1>My Text Editor</h1>
      <Toolbar 
        onCommand={handleCommand}
        onLanguageChange={handleLanguageChange}
        boldPressed={boldPressed}
        italicPressed={italicPressed}
        underlinePressed={underlinePressed}
        onClear={handleClear}
        onShift={handleShift}
        onUndo={handleUndo}
        >
      </Toolbar>
      <textarea 
        className='editor'
        value={content}
        style={{
          fontSize: `${fontSize}px`,
          color: foreColor || 'initial',
          fontFamily: fontName || 'initial',
          fontWeight: boldPressed ? 'bold' : 'normal',
          fontStyle: italicPressed ? 'italic' : 'normal',
          textDecoration: underlinePressed ? 'underline' : 'none',

        }}  
        onChange={(e) => setContent(e.target.value)}
        />
      <Keyboard 
        onInput={handleInput} 
        onBackspace={handleBackspace} 
        shiftPressed={shiftPressed} 
        language={language}
         />
    </div>
  );
};

export default Editor;