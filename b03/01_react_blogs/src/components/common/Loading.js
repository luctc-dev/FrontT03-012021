

export default function Loading({
  width = 20,
  height = 20,
  color = '#fe718d',
  background = 'transparent'
}) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink" 
      style={{margin: 'auto', background: background, display: 'inline-block'}} 
      width={width} height={height} 
      viewBox="0 0 100 100" 
      preserveAspectRatio="xMidYMid"
    >
      <circle cx={50} cy={50} r={22} strokeWidth={8} stroke={color} strokeDasharray="34.55751918948772 34.55751918948772" fill="none" strokeLinecap="round">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50" />
      </circle>
    </svg>
  )
}