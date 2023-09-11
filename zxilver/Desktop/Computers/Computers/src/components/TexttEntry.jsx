import keyboard from "../img/Text Entry/computerkeyboard.jpg"
import mouse from "../img/Text Entry/computermouse.webp"
import touchscreen from "../img/Text Entry/touchscreen.jpg"
import stylus from "../img/Text Entry/stylus.webp"
import voice from "../img/Text Entry/voicerecognition.png"
import gesture from "../img/Text Entry/gesturebase.png"
import braille from "../img/Text Entry/braillekeyboard.webp"
import smartphone from "../img/Text Entry/smartphonekeyboard.jpg"
import gaming from "../img/Text Entry/gamingkeyboard.jpg"
import td from "../img/Text Entry/3dkeyboard.webp"
import chorded from "../img/Text Entry/chordedkeyboard.jpg"


function TexttEntry() {
    const parts = [
          { 
            name: "Keyboard",
            def: "The keyboard is one of the most common text entry devices. It consists of a set of keys, each representing a specific character, number, or function. Keyboards can be physical (attached to a computer) or virtual (software-based, on-screen keyboards).",
            img: keyboard 
          },

          { 
            name: "Computer Mouse",
            def: "While a computer mouse is primarily used for pointing and clicking, it can also be used for text entry through a virtual keyboard or character recognition software.",
            img: mouse 
          },

          { 
            name: "Touchscreen",
            def: "Touchscreens are often used in smartphones, tablets, and interactive kiosks. Users can input text by tapping on an on-screen virtual keyboard or using handwriting recognition.",
            img: touchscreen 
          },

          { 
            name: "Stylus or Digital Pen",
            def: "Styluses or digital pens are used with touchscreen devices to input text or draw with precision. They are commonly used in graphic design and note-taking applications.",
            img: stylus 
          },

          { 
            name: "Voice Recognition and Speech-to-Text Software",
            def: "Voice recognition technology allows users to speak into a microphone, and the spoken words are converted into text. This is especially useful for hands-free text entry in smartphones and voice assistants like Siri and Google Assistant.",
            img: voice 
          },

          { 
            name: "Gesture-Based Input Devices",
            def: "Some devices, like motion-sensing controllers and cameras, allow users to input text through gestures. For example, users can spell out words in the air to input text.",
            img: gesture 
          },

          { 
            name: "Braille Keyboards and Displays",
            def: "These devices are designed for individuals with visual impairments. Braille keyboards allow users to input Braille characters, which are then converted into text. Braille displays provide tactile feedback for reading text.",
            img: braille 
          },

          { 
            name: "Smartphone Keyboards",
            def: "On smartphones, virtual keyboards are commonly used for text entry. These keyboards can adapt to different languages and input methods and often incorporate predictive text and autocorrect features.",
            img: smartphone 
          },

          { 
            name: "Gaming Keyboards",
            def: "Specialized gaming keyboards are designed for gamers and often include customizable keys and features for gaming-specific functions. Some also have programmable macros for text entry and in-game communication.",
            img: gaming
          },

          { 
            name: "3D Keyboards",
            def: "3D keyboards are a type of input device that allows users to input text and commands using three-dimensional hand gestures. They are used in virtual reality (VR) and augmented reality (AR) applications.",
            img: td 
          },

          { 
            name: "Chorded Keyboards",
            def: "Chorded keyboards use combinations of key presses (chords) to represent characters or commands. They are compact and can be used in situations where traditional keyboards may not be practical.",
            img: chorded 
          }
    ]
  return (
    <div id='text-entry'>

        { parts.map(( part, i ) => (
          <div className="part" key={i}>
            <div className="img">
              <img src={ part.img } alt={part.name} />
            </div>
            <div className="info">
              <p className="name">{part.name}</p>
              <p className="def">{part.def}</p>
            </div>
          </div>
        )) }

    </div>
  )
}

export default TexttEntry