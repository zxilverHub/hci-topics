import lcd from "../img/display/lcd.webp"
import led from "../img/display/led.webp"
import oled from "../img/display/oled.jpg"
import plasma from "../img/display/plasma.jpg"
import cathod from "../img/display/cathod.webp"
import projection from "../img/display/projection.png"
import elink from "../img/display/elink.webp"
import curved from "../img/display/curved.webp"
import touchscreen from "../img/display/touchscreen.jpg"
import td from "../img/display/3d.jpg"
import vr from "../img/display/vr.png"



function DisplayDevices() {
    const parts = [
        {name: "Liquid Crystal Display (LCD) Monitors",
        def: "LCD monitors are among the most common display devices used for computers, laptops, and televisions. They use liquid crystal cells that can be manipulated to control the passage of light, producing images with high resolution and color accuracy.",
        img: lcd},

        {name: "LED Monitors",
        def: "LED (Light Emitting Diode) monitors are a type of LCD monitor that uses LED backlighting to illuminate the screen. LED technology is energy-efficient and provides brighter and more vibrant displays compared to traditional CCFL (Cold Cathode Fluorescent Lamp) backlighting.",
        img: led},

        {name: "OLED Displays",
        def: "OLED (Organic Light Emitting Diode) displays are known for their excellent contrast, fast response times, and flexibility. Each pixel in an OLED display emits its own light, eliminating the need for a separate backlight. This technology is commonly used in smartphones and high-end TVs.",
        img: oled},

        {name: "Plasma Displays",
        def: "Plasma displays use tiny gas cells sandwiched between two glass panels to produce images. While less common today, they were once popular for large-screen televisions due to their deep blacks and wide viewing angles.",
        img: plasma},

        {name: "Cathode Ray Tube (CRT) Monitors",
        def: "CRT monitors were common before the advent of LCD and LED displays. They use electron beams to create images on a phosphorescent screen. CRT monitors are bulkier and consume more power than modern flat-panel displays but were known for their color accuracy and refresh rates.",
        img: cathod},

        {name: "Projection Displays:",
        def: "Projection displays use projectors to display images on a screen or wall. They are often used for presentations, home theaters, and large venues. Different technologies, such as DLP (Digital Light Processing) and LCD, are used in projectors.",
        img: projection},

        {name: "E-Ink Displays",
        def: "E-Ink (Electronic Ink) displays are used in e-readers like the Amazon Kindle. They mimic the appearance of printed text and are highly readable even in bright sunlight. E-Ink technology is known for its low power consumption.",
        img: elink},

        {name: "Curved Display",
        def: "Curved displays are designed with a curved shape to provide a more immersive viewing experience, especially in gaming and home theater setups.",
        img: curved},

        {name: "Touchscreen Displays",
        def: "Touchscreen displays have a layer that allows users to interact with the screen directly, often using gestures, taps, or stylus input. They are common in smartphones, tablets, and interactive kiosks.",
        img: touchscreen},

        {name: "3D Displays",
        def: "3D displays are designed to provide a three-dimensional viewing experience. They require special glasses or other technologies to achieve the 3D effect.",
        img: td},

        {name: "VR (Virtual Reality) Headsets",
        def: "VR headsets are wearable display devices that immerse users in virtual environments. They often include built-in sensors and motion tracking for a fully interactive experience.",
        img: vr},
    ]
  return (
    <div id='display-device'>
        
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

export default DisplayDevices