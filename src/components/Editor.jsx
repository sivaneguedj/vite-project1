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


  /* This function is called when a key is pressed on the virtual keyboard.
  It appends the pressed character to the content state. */
    const handleInput = (input) => {
      if(shiftPressed){
        input = input.toUpperCase();
        setShiftPressed(false);
      }
      setContent(prevText => prevText + input);
    }
    

    /* This function is called when the backspace/Delete key is pressed.
    It removes the last */
    const handleBackspace = () => {
        setContent((prevContent) => prevContent.slice(0, -1));  
    };
   

    /* This function is called when the language button is pressed.
    It switches between languagues */
    const handleLanguageChange = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'he' : 'en'));
    };


    /* This function is called when the Bold button is pressed. */
    const handleBold = () => {
      setBoldPressed((prevBoldPressed) => ! prevBoldPressed);
    };


    /* This function is called when we would like to increase the font size. */
    const handleBiggerFontSize = (size) => {
      setfontSize(size);
    };
    

    /* This function is called when Italic button us pressed. */
    const handleItalic = () => {
      setItalicPressed((prevItalicPressed) => !prevItalicPressed);
    };


    /* This function is called when underline button is pressed. */
    const handleUnderline = () => {
      setUnderlinePressed((prevUnderlinePressed) => !prevUnderlinePressed);
    };

    /* This function is called when underline button is pressed. */
    const handleFontName = (font) => {
      setfontName(font);
    };

    const handleForeColor = (color) => {
      setforeColor(color);
    };


    // Function called when a toolbar command button is pressed
  const handleCommand = (command, value) => {
    switch (command) {
      case 'clear':
        setContent('');
        break;
      case 'shift':
        setShiftPressed(true);
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
      default:
        break;
    }
  };





  return (
    <div className="editor-container" >
      <Toolbar 
        onCommand={handleCommand}
        onLanguageChange={handleLanguageChange}
        boldPressed={boldPressed}
        italicPressed={italicPressed}
        underlinePressed={underlinePressed}
        />
      <textarea 
        className={`editor ${boldPressed ? style.bold : ''} ${italicPressed ? style.italic : ''} ${underlinePressed ? style.underlined : ''}`}   
        value={content}
        style={{
          fontSize: `${fontSize}px`,
          color: foreColor || 'initial',
          fontFamily: fontName || 'initial'

        }}  
        onInput={(e) => setContent(e.currentTarget.textContent)}
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