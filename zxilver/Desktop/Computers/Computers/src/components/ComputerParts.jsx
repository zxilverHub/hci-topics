import cpu from "../img/computer/cpu.jpg"
import ram from "../img/computer/ram.webp"
import hdd from "../img/computer/hdd.jpg"
import ssd from "../img/computer/ssd.webp"
import opticaldrive from "../img/computer/opticaldrive.webp"
import usb from "../img/computer/usbdrive.png"
import motherboard from "../img/computer/motherboard.webp"
import keyboard from "../img/computer/computerkeyboard.jpg"
import mouse from "../img/computer/computermouse.webp"
import touchpad from "../img/computer/laptoptouchpad.jpg"
import mic from "../img/computer/computermic.jpg"
import webcam from "../img/computer/computerwebcam.webp"
import gpu from "../img/computer/gpu.webp"
import power from "../img/computer/computerpowersupply.webp"
import cooling from "../img/computer/computercoolingsystem.png"
import monitor from "../img/computer/computermonitor.jpg"
import speaker from "../img/computer/computerspeaker.png"
import printer from "../img/computer/computerprinter.jpg"

function ComputerParts() {

  const parts = [
    { name: "Central Processing Unit (CPU)",
      def: "The CPU is the core processing unit of the computer. It executes instructions from programs and performs calculations. Modern computers often have multi-core processors for improved performance.",
      img: cpu
    },

    { name: "Memory (RAM - Random Access Memory)",
      def: "RAM provides temporary storage for data and program instructions that are actively in use. It allows for fast data access and manipulation by the CPU. The size of RAM varies but typically ranges from 4GB to 64GB or more in modern computers.",
      img: ram
    },

    { name: "Hard Disk Drives (HDDs",
      def: "These provide high-capacity storage for long-term data and program storage.",
      img: hdd
    },

    { name: "Solid-State Drives (SSDs)",
      def: "SSDs are faster and more reliable than HDDs and are commonly used for operating system installation and frequently accessed data.",
      img: ssd
    },

    { name: "Optical Drives",
      def: "Optical drives like DVD and Blu-ray drives are used for reading and writing optical discs.",
      img: opticaldrive
    },

    { name: "USB Drives",
      def: "USB flash drives are portable storage devices that can be used for data transfer and backup",
      img: usb
    },

    { name: "Motherboard",
      def: "The motherboard is the main circuit board that connects all the hardware components of the computer. It includes the CPU socket, memory slots, expansion slots, and various connectors for peripherals.",
      img: motherboard
    },

    { name: "Keyboard",
      def: "Used for typing text and issuing commands.",
      img: keyboard
    },

    { name: "Mouse",
      def: "Used for pointing, clicking, and navigating on-screen.",
      img: mouse
    },

    { name: "Touchpad",
      def: " Common on laptops, it provides mouse-like functionality.",
      img: touchpad
    },

    { name: "Microphone",
      def: "Used for voice input and recording.",
      img: mic
    },

    { name: "Webcam",
      def: "Used for video conferencing and capturing images and videos.",
      img: webcam
    },

    { name: "Monitor",
      def: "Displays text, images, and video.",
      img: monitor
    },

    { name: "Speaker",
      def: "Produce audio output.",
      img: speaker
    },

    { name: "Printer",
      def: "Creates hard copies of documents and images.",
      img: printer
    },

    { name: "Graphics Processing Unit (GPU)",
      def: "The GPU is responsible for rendering images, videos, and 3D graphics. It is essential for gaming, graphic design, and video editing tasks. Some CPUs have integrated graphics, while others use discrete GPUs.",
      img: gpu
    },

    { name: "Power Supply Unit (PSU)",
      def: "The PSU converts electricity from an outlet into the power needed by the computer's components. It provides different voltage levels to various parts of the computer.",
      img: power
    },

    { name: "Cooling System",
      def: "Computers generate heat during operation, and a cooling system (typically fans or liquid cooling) helps dissipate this heat to prevent overheating and ensure stable operation.",
      img: cooling
    },
  ]

  return (
    <div id="computer-parts">

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

export default ComputerParts