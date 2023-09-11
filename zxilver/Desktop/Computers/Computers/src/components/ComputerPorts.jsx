import hdmi from "../img/ports/hdmi.webp"
import usba from "../img/ports/usba.jpg"
import usbb from "../img/ports/usbb.jpg"
import usbc from "../img/ports/usbc.webp"
import modem from "../img/ports/modem.avif"
import dvi from "../img/ports/dvi.jpg"
import serial from "../img/ports/serial.jpg"
import parallel from "../img/ports/parallel.jpg"
import display from "../img/ports/display.jpg"
import ps2 from "../img/ports/ps2.jpg"
import firewire from "../img/ports/firewire.jpg"
import minidisplay from "../img/ports/minidisplay.jpg"
import vga from "../img/ports/vga.jpg"
import audio from "../img/ports/audio.jpg"
import esata from "../img/ports/esata.jpg"
import svideo from "../img/ports/svideo.webp"
import ethernet from "../img/ports/ethernet.webp"
import powerline from "../img/ports/powerline.jpg"
import game from "../img/ports/game.jpg"
import thunderbolt from "../img/ports/thunderbolt.jpg"


function ComputerPorts() {

    const parts = [
        { name: "HDMI",
          def: "",
          img: hdmi
        },

        { name: "USB-A",
          def: "",
          img: usba
        },

        { name: "USB-B",
          def: "",
          img: usbb
        },

        { name: "USB-C",
          def: "",
          img: usbc
        },

        { name: "Modem",
          def: "",
          img: modem
        },

        { name: "DVI",
          def: "",
          img: dvi
        },

        { name: "Serial",
          def: "",
          img: serial
        },

        { name: "Parallel",
          def: "",
          img: parallel
        },

        { name: "Display",
          def: "",
          img: display
        },

        { name: "PS/2",
          def: "",
          img: ps2
        },

        { name: "Firewire",
          def: "",
          img: firewire
        },

        { name: "Mini Display",
          def: "",
          img: minidisplay
        },

        { name: "VGA",
          def: "",
          img: vga
        },

        { name: "Audio",
          def: "",
          img: audio
        },

        { name: "eSATA",
          def: "",
          img: esata
        },

        { name: "S Video",
          def: "",
          img: svideo
        },

        { name: "Ethernet",
          def: "",
          img: ethernet
        },

        { name: "Power Line",
          def: "",
          img: powerline
        },

        { name: "Game",
          def: "",
          img: game        },

        { name: "Thunderbolt",
          def: "",
          img: thunderbolt
        }

    ]
  return (
    <div  id="computer-ports">

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

export default ComputerPorts