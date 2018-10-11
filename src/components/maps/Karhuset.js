import React from 'react'
import {
  Defs, ClipPath, Path, G, Circle
} from 'react-native-svg'
import { Dimensions } from 'react-native'
import SvgPanZoom from 'react-native-svg-pan-zoom'

const { width } = Dimensions.get('window')

const zoom = width / 800

const Karhuset = () => (
  <SvgPanZoom canvasHeight={600} canvasWidth={800} minScale={0.5} initialZoom={zoom}>
    <Defs>
      <ClipPath id="a">
        <Path
          d="M358.5 553.5h-59v-73h59zm913-670l-109 19-11-58-594 104V52h-400v250.5h152V203h49v50H660v-65.5h89.5v-115l539-95z"
          fill="#002b64"
          opacity={0.3}
        />
      </ClipPath>
    </Defs>
    <Path fill="#acd6ea" d="M-112-212H912V812H-112z" />
    <Path
      fill="none"
      stroke="#002b64"
      strokeMiterlimit={10}
      strokeWidth={2.835}
      d="M309.5 302.5h48"
    />
    <Path fill="#e3e3e3" opacity={0.3} d="M310 204h48v98.5h-48z" />
    <Path
      fill="none"
      stroke="#002b64"
      strokeMiterlimit={10}
      strokeWidth={2.835}
      d="M358.5 254v227"
    />
    <Path
      d="M358.5 553.5h-59v-73h59zm913-670l-109 19-11-58-594 104V52h-400v250.5h152V203h49v50H660v-65.5h89.5v-115l539-95z"
      fill="#002b64"
      opacity={0.3}
    />
    <G fill="#002b64" stroke="#fff" strokeMiterlimit={10} strokeWidth={1.051} clipPath="url(#a)">
      <Path d="M-200.03 339.83l1456.51-1456.52M-200.03 354.66l1456.51-1456.51M-200.03 369.5l1456.51-1456.52M-200.03 384.33l1456.51-1456.51M-200.03 399.16l1456.51-1456.51M-200.03 414l1456.51-1456.52M-200.03 428.83l1456.51-1456.51M-200.03 443.67l1456.51-1456.52M-200.03 458.5L1256.48-998.01M-200.03 473.33L1256.48-983.18M-200.03 488.17L1256.48-968.35M-200.03 503L1256.48-953.51M-200.03 517.84L1256.48-938.68M-200.03 532.67L1256.48-923.84M-200.03 547.5L1256.48-909.01M-200.03 562.34L1256.48-894.18M-200.03 577.17L1256.48-879.34M-200.03 592.01L1256.48-864.51M-200.03 606.84L1256.48-849.67M-200.03 621.67L1256.48-834.84M-200.03 636.51L1256.48-820.01M-200.03 651.34L1256.48-805.17M-200.03 666.18L1256.48-790.34M-200.03 681.01L1256.48-775.5M-200.03 695.84L1256.48-760.67M-200.03 710.68L1256.48-745.84M-200.03 725.51L1256.48-731M-200.03 740.35L1256.48-716.17M-200.03 755.18L1256.48-701.33M-200.03 770.01L1256.48-686.5M-200.03 784.85L1256.48-671.67M-200.03 799.68L1256.48-656.83M-200.03 814.52L1256.48-642M-200.03 829.35L1256.48-627.16M-200.03 844.18L1256.48-612.33M-200.03 859.02L1256.48-597.5M-200.03 873.85L1256.48-582.66M-200.03 888.69L1256.48-567.83M-200.03 903.52L1256.48-552.99M-200.03 918.35L1256.48-538.16M-200.03 933.19L1256.48-523.33M-200.03 948.02L1256.48-508.49M-200.03 962.86L1256.48-493.66M-200.03 977.69L1256.48-478.82M-200.03 992.52L1256.48-463.99M-200.03 1007.36L1256.48-449.16M-200.03 1022.19L1256.48-434.32M-200.03 1037.03L1256.48-419.49M-200.03 1051.86L1256.48-404.65M-200.03 1066.69L1256.48-389.82M-200.03 1081.53L1256.48-374.99M-200.03 1096.36L1256.48-360.15M-200.03 1111.2L1256.48-345.32M-200.03 1126.03L1256.48-330.48M-200.03 1140.86L1256.48-315.65M-200.03 1155.7L1256.48-300.82M-200.03 1170.53L1256.48-285.98M-200.03 1185.37L1256.48-271.15M-200.03 1200.2L1256.48-256.31M-200.03 1215.03L1256.48-241.48M-200.03 1229.87L1256.48-226.65M-200.03 1244.7L1256.48-211.81M-200.03 1259.54L1256.48-196.98M-200.03 1274.37L1256.48-182.14M-200.03 1289.2L1256.48-167.31M-200.03 1304.04L1256.48-152.48M-200.03 1318.87L1256.48-137.64M-200.03 1333.71L1256.48-122.81M-200.03 1348.54L1256.48-107.97M-200.03 1363.37L1256.48-93.14M-200.03 1378.21L1256.48-78.31M-200.03 1393.04L1256.48-63.47M-200.03 1407.88L1256.48-48.64M-200.03 1422.71L1256.48-33.8M-200.03 1437.54L1256.48-18.97M-200.03 1452.38L1256.48-4.14M-200.03 1467.21L1256.48 10.7M-200.03 1482.05L1256.48 25.53M-200.03 1496.88L1256.48 40.37M-200.03 1511.71L1256.48 55.2M-200.03 1526.55L1256.48 70.03M-200.03 1541.38L1256.48 84.87M-200.03 1556.22L1256.48 99.7M-200.03 1571.05L1256.48 114.54M-200.03 1585.88L1256.48 129.37M-200.03 1600.72L1256.48 144.2M-200.03 1615.55L1256.48 159.04M-200.03 1630.39L1256.48 173.87M-200.03 1645.22L1256.48 188.71M-200.03 1660.05L1256.48 203.54M-200.03 1674.89L1256.48 218.37" />
    </G>
    <Path
      d="M358.5 553.5h-59v-73h59zm913-670l-109 19-11-58-594 104V52h-400v250.5h152V203h49v50H660v-50h0v-15.5h89.5v-115l539-95z"
      fill="none"
      stroke="#002b64"
      strokeMiterlimit={10}
      strokeWidth={2.835}
    />
    <Path
      fill="none"
      stroke="#002b64"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.835}
      opacity={0.5}
      d="M263.36 306.26v82.1H292v-82.1h-28.64z"
    />
    <Path fill="#e3e3e3" opacity={0.3} d="M263.36 306.26H292v82.1h-28.64z" />
    <Path
      d="M277.71 358.76h-9a3.6 3.6 0 0 1-.73-.06 1.94 1.94 0 0 1-1.72-1.84v-18.52a4.44 4.44 0 0 1 0-.63 2.09 2.09 0 0 1 2.13-1.88h18.13a4.49 4.49 0 0 1 .73.06 2 2 0 0 1 1.83 1.95v18.49a3.91 3.91 0 0 1-.13 1 1.91 1.91 0 0 1-1.85 1.38h-9.43z"
      fill="#e3e3e3"
    />
    <Path
      d="M281.88 343h-2.93c-.21 0-.28.05-.28.27v2.95h-3.23v3.27h-3.16v3.25h-3.19v1.64h4.78v-3.26h3.23v-3.23h3.2v-3.24h3.2v-3.22h3.14v-1.61h-4.75z"
      fill="#002b64"
    />
    <G>
      <Path
        fill="none"
        stroke="#002b64"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={5.669}
        d="M1271.5-116.5l-109 19-11-58-594 104v103h-400v502h502v-366h90v-115l539-95-17-94z"
      />
    </G>
    <G>
      <G fill="#e3e3e3">
        <Path
          opacity={0.3}
          d="M432.68 347.6v-27.87h41.77v27.87h-41.77M365.63 329.78h27.87v41.77h-27.87v-41.77M365.63 287.78h27.87v41.77h-27.87v-41.77M469.45 259.73v27.87H400v-27.87h69.45M525 259.73v27.87h-55.32v-27.87H525M474.68 347.6v-27.87h41.77v27.87h-41.77M516.67 347.6v-27.87h41.78v27.87h-41.78M558.67 347.6v-27.87h41.78v27.87h-41.78M552.68 287.6v-27.87H636v27.87h-83.32M432.68 384.6v-27.87h41.77v27.87h-41.77M474.68 384.6v-27.87h41.77v27.87h-41.77M516.67 384.6v-27.87h41.78v27.87h-41.78M558.67 384.6v-27.87h41.78v27.87h-41.78M425.68 485.6v-27.87h41.77v27.87h-41.77M383.68 485.6v-27.87h41.77v27.87h-41.77M267.68 475.6v-27.87h41.77v27.87h-41.77M467.68 485.6v-27.87h41.77v27.87h-41.77M509.68 485.6v-27.87h41.77v27.87h-41.77M551.67 485.6v-27.87h41.78v27.87h-41.78M410.68 546.6v-27.87h41.77v27.87h-41.77M452.68 546.6v-27.87h41.77v27.87h-41.77M549.67 546.6v-27.87h41.78v27.87h-41.78M591.68 546.6v-27.87H647v27.87h-55.32"
        />
        <Path
          opacity={0.3}
          d="M494.68 546.6v-27.87H550v27.87h-55.32M425.68 448.6v-27.87h41.77v27.87h-41.77M383.68 448.6v-27.87h41.77v27.87h-41.77M467.68 448.6v-27.87H551v27.87h-83.32M551.67 448.6v-27.87h41.78v27.87h-41.78"
        />
      </G>
      <G
        fill="none"
        stroke="#002b64"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.417}
      >
        <Path d="M432.68 347.6v-27.87h41.77v27.87h-41.77M365.63 329.78h27.87v41.77h-27.87v-41.77M365.63 287.78h27.87v41.77h-27.87v-41.77M469.45 259.73v27.87H400v-27.87h69.45M525 259.73v27.87h-55.32v-27.87H525M474.68 347.6v-27.87h41.77v27.87h-41.77M516.67 347.6v-27.87h41.78v27.87h-41.78M558.67 347.6v-27.87h41.78v27.87h-41.78M552.68 287.6v-27.87H636v27.87h-83.32M432.68 384.6v-27.87h41.77v27.87h-41.77M474.68 384.6v-27.87h41.77v27.87h-41.77M516.67 384.6v-27.87h41.78v27.87h-41.78M558.67 384.6v-27.87h41.78v27.87h-41.78M425.68 485.6v-27.87h41.77v27.87h-41.77M383.68 485.6v-27.87h41.77v27.87h-41.77M267.68 475.6v-27.87h41.77v27.87h-41.77M467.68 485.6v-27.87h41.77v27.87h-41.77M509.68 485.6v-27.87h41.77v27.87h-41.77M551.67 485.6v-27.87h41.78v27.87h-41.78M410.68 546.6v-27.87h41.77v27.87h-41.77M452.68 546.6v-27.87h41.77v27.87h-41.77M549.67 546.6v-27.87h41.78v27.87h-41.78M591.68 546.6v-27.87H647v27.87h-55.32" />
        <Path d="M494.68 546.6v-27.87H550v27.87h-55.32M425.68 448.6v-27.87h41.77v27.87h-41.77M383.68 448.6v-27.87h41.77v27.87h-41.77M467.68 448.6v-27.87H551v27.87h-83.32M551.67 448.6v-27.87h41.78v27.87h-41.78" />
      </G>
      <Path
        d="M288.71 473.45h-9a4.4 4.4 0 0 1-.73-.05 1.93 1.93 0 0 1-1.72-1.85 4.41 4.41 0 0 1 0-.52v-17.96a3.39 3.39 0 0 1 .05-.64 2.07 2.07 0 0 1 2.12-1.88h18.13a4.4 4.4 0 0 1 .73 0 2 2 0 0 1 1.83 2 7.58 7.58 0 0 1 0 .83v17.66a3.91 3.91 0 0 1-.13 1 1.91 1.91 0 0 1-1.85 1.38h-9.43z"
        fill="#e3e3e3"
      />
      <Path
        d="M286.43 467.56v-.58l1-.13a.54.54 0 0 0 .31-.18 1.17 1.17 0 0 0 .08-.53V466v-.38-.49-2.94a2.74 2.74 0 0 0-.06-.56.76.76 0 0 0-.35-.23 3.82 3.82 0 0 0-.9-.14v-.49a4.33 4.33 0 0 0 1.6-.38 3.58 3.58 0 0 0 1-.75h.59v2.84l-.06 3.59v.67a5.32 5.32 0 0 0 .89.2 2 2 0 0 1 .38.08v.49H286.92zm1.23-10.56a1 1 0 0 1 .31-.77 1 1 0 0 1 .79-.31 1.2 1.2 0 0 1 .86.32 1 1 0 0 1 .35.73 1.46 1.46 0 0 1-.14.6 1 1 0 0 1-.43.48 1.16 1.16 0 0 1-.6.18 1.06 1.06 0 0 1-.78-.36 1.19 1.19 0 0 1-.36-.87z"
        fill="#002b64"
      />
      <Circle
        cx={288.68}
        cy={461.99}
        r={9.02}
        fill="none"
        stroke="#002b64"
        strokeMiterlimit={10}
        strokeWidth={1.421}
      />
    </G>
    <G>
      <Path
        fill="none"
        stroke="#002b64"
        strokeMiterlimit={10}
        strokeWidth={2.835}
        d="M160 480.5h139"
      />
      <Path fill="#e3e3e3" opacity={0.3} d="M160 480.5h138v70H160z" />
      <Path
        d="M229 527h-9a4.48 4.48 0 0 1-.73-.05 1.94 1.94 0 0 1-1.72-1.85v-.52-17.95a4.49 4.49 0 0 1 0-.64 2.09 2.09 0 0 1 2.13-1.88H237.81a4.48 4.48 0 0 1 .73.05 2 2 0 0 1 1.83 1.95v18.49a3.91 3.91 0 0 1-.13 1 1.91 1.91 0 0 1-1.85 1.38H229z"
        fill="#e3e3e3"
      />
      <G fill="#002b64">
        <Path d="M228.19 510.05h2.87l-1.8 10.9H226l-.91-7.33-.87 7.33h-3.33l-1.78-10.9h3l.71 7.72 1-7.72h2.68l1.08 7.72zM235.91 513.2v-.42a2 2 0 0 0-.07-.43.91.91 0 0 0-.19-.35.46.46 0 0 0-.36-.15.71.71 0 0 0-.47.14.9.9 0 0 0-.24.53 5.72 5.72 0 0 0-.1 1.1v3.8a6.56 6.56 0 0 0 .1 1.1.9.9 0 0 0 .25.51.77.77 0 0 0 .45.12.54.54 0 0 0 .52-.41 4.41 4.41 0 0 0 .16-1.44v-.84h3v.69a6.69 6.69 0 0 1-.19 1.7 3.28 3.28 0 0 1-.65 1.26 2.67 2.67 0 0 1-1.14.78 4.79 4.79 0 0 1-1.71.27 5.08 5.08 0 0 1-2.26-.4 2.45 2.45 0 0 1-1.17-1.12 4.48 4.48 0 0 1-.43-1.78c0-.7-.06-1.48-.06-2.36s0-1.61.06-2.31a4.53 4.53 0 0 1 .43-1.79 2.56 2.56 0 0 1 1.17-1.15 5.07 5.07 0 0 1 2.26-.41 5.12 5.12 0 0 1 1.94.3 2.63 2.63 0 0 1 1.1.78 2.53 2.53 0 0 1 .49 1.11 7.48 7.48 0 0 1 .1 1.26v.79h-3z" />
      </G>
      <G>
        <Path
          d="M334 264.71h-9a4.48 4.48 0 0 1-.73-.05 1.94 1.94 0 0 1-1.72-1.85v-.52-17.95a4.49 4.49 0 0 1 0-.64 2.09 2.09 0 0 1 2.13-1.88H342.81a4.48 4.48 0 0 1 .73 0 2 2 0 0 1 1.83 2v18.49a3.91 3.91 0 0 1-.13 1 1.91 1.91 0 0 1-1.85 1.38H334z"
          fill="#e3e3e3"
        />
        <Path
          d="M343.86 256.08c-.43-.15-.87-.27-1.3-.41l-7.83-2.47a.34.34 0 0 1-.29-.37.34.34 0 0 1 .28-.38 2.31 2.31 0 0 0 .33-4.22 2.3 2.3 0 0 0-3.37 2 .44.44 0 0 0 .45.49.46.46 0 0 0 .46-.45c0-.14.05-.29.09-.43a1.36 1.36 0 0 1 1.62-.92 1.38 1.38 0 0 1-.21 2.71c-.45 0-.56.15-.57.62v.59a.27.27 0 0 1-.23.32l-1.3.42-7.88 2.49a1.21 1.21 0 0 0-.85 1.37 1.25 1.25 0 0 0 1.35 1.1h18.89a1.25 1.25 0 0 0 1.23-1.05 1.22 1.22 0 0 0-.87-1.41zm-.53 1.38h-18.6a.32.32 0 0 1-.14 0 .18.18 0 0 1 0-.33l7.56-2.4 1.68-.53a.54.54 0 0 1 .31 0l9.2 2.92a.2.2 0 0 1-.01.34z"
          fill="#002b64"
        />
      </G>
    </G>
  </SvgPanZoom>
)

export default Karhuset