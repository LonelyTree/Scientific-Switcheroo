import React, { Component } from 'react'
// import Water from './Water'
// import Buttons from '../Buttons'
// import Numbers from '../Numbers'

import '../../css/beakers.css'




class Beaker extends Component{
  render() {
    return (
      <div className="beakers">
        <div className='beaker1'>
          <svg  viewBox="-100, -100, 600,684.2105263157895">
                <path d="M43.789 53.845 C 42.865 55.339,48.199 70.817,55.641 88.240 L 69.173 119.919 69.173 263.364 C 69.173 455.456,53.960 436.699,208.741 435.448 C 328.131 434.483,325.814 434.908,337.589 411.816 C 342.900 401.401,346.114 69.129,341.032 55.885 C 338.943 50.442,47.129 48.439,43.789 53.845 M330.827 231.728 C 330.827 415.886,331.047 413.487,313.528 420.743 C 307.373 423.293,275.723 424.046,200.843 423.423 L 96.718 422.556 88.960 415.265 L 81.203 407.974 81.203 263.883 L 81.203 119.792 69.371 91.475 L 57.539 63.158 194.183 63.158 L 330.827 63.158 330.827 231.728 M103.688 87.832 C 102.867 89.975,102.547 161.429,102.977 246.617 L 103.759 401.504 124.771 401.504 C 142.391 401.504,145.946 400.654,146.796 396.241 C 147.663 391.736,145.392 390.977,131.048 390.977 L 114.286 390.977 114.286 371.586 L 114.286 352.194 130.047 351.285 C 154.073 349.899,154.952 339.850,131.048 339.850 L 114.286 339.850 114.286 320.458 L 114.286 301.066 130.047 300.157 C 154.073 298.771,154.952 288.722,131.048 288.722 L 114.286 288.722 114.286 269.330 L 114.286 249.938 130.075 249.029 C 141.701 248.360,145.865 246.931,145.865 243.609 C 145.865 240.287,141.701 238.858,130.075 238.189 L 114.286 237.280 114.286 217.888 L 114.286 198.496 131.048 198.496 C 154.952 198.496,154.073 188.447,130.047 187.061 L 114.286 186.152 114.286 166.760 L 114.286 147.368 131.048 147.368 C 154.952 147.368,154.073 137.319,130.047 135.933 L 114.286 135.024 114.286 115.632 L 114.286 96.241 131.048 96.241 C 145.389 96.241,147.665 95.480,146.806 90.977 C 145.517 84.215,106.172 81.345,103.688 87.832 " stroke="black"></path>
          </svg>
            </div>
        <div className='beaker2'>
          <svg  viewBox="-200, -165, 800,884.2105263157895">
                <path d="M58.968 55.885 C 53.886 69.129,57.100 401.401,62.411 411.816 C 74.186 434.908,71.869 434.483,191.259 435.448 C 346.040 436.699,330.827 455.456,330.827 263.364 L 330.827 119.919 344.359 88.240 C 351.801 70.817,357.135 55.339,356.211 53.845 C 352.871 48.439,61.057 50.442,58.968 55.885 M330.629 91.475 L 318.797 119.792 318.797 263.883 L 318.797 407.974 311.040 415.265 L 303.282 422.556 199.157 423.423 C 124.277 424.046,92.627 423.293,86.472 420.743 C 68.953 413.487,69.173 415.886,69.173 231.728 L 69.173 63.158 205.817 63.158 L 342.461 63.158 330.629 91.475 M254.760 86.092 C 248.229 92.623,253.367 96.241,269.173 96.241 L 285.714 96.241 285.714 115.632 L 285.714 135.024 269.953 135.933 C 245.927 137.319,245.048 147.368,268.952 147.368 L 285.714 147.368 285.714 166.760 L 285.714 186.152 269.953 187.061 C 245.927 188.447,245.048 198.496,268.952 198.496 L 285.714 198.496 285.714 217.888 L 285.714 237.280 269.925 238.189 C 258.299 238.858,254.135 240.287,254.135 243.609 C 254.135 246.931,258.299 248.360,269.925 249.029 L 285.714 249.938 285.714 269.330 L 285.714 288.722 268.952 288.722 C 245.048 288.722,245.927 298.771,269.953 300.157 L 285.714 301.066 285.714 320.458 L 285.714 339.850 268.952 339.850 C 245.048 339.850,245.927 349.899,269.953 351.285 L 285.714 352.194 285.714 371.586 L 285.714 390.977 268.952 390.977 C 254.608 390.977,252.337 391.736,253.204 396.241 C 254.054 400.654,257.609 401.504,275.229 401.504 L 296.241 401.504 296.241 243.609 L 296.241 85.714 276.564 84.839 C 265.742 84.358,255.930 84.922,254.760 86.092 " stroke="black"></path>
          </svg>
            </div>
        {/* <Water />
        <Buttons />
        <Numbers/> */}
      </div>
    )
  }
}

export default Beaker