export const mobileBreakpoint = '769px'

export const isMobile = document.body.clientWidth < 769

export const colors = {
  green1: '#BFECBF',
  green2: '#80D880',
  green3: '#40C540',
  green4: '#00B200',
  green5: '#008600',
  neutral0: '#FFFFFF',
  neutral1: '#F7F9FA',
  neutral2: '#EBEEF0',
  neutral3: '#E3E6E8',
  neutral4: '#D7DBDE',
  neutral5: '#CDD1D4',
  neutral6: '#ADB0B2',
  neutral7: '#8F9294',
  neutral8: '#6F7173',
  neutral9: '#454747',
  neutral10: '#313233',
  neutral11: '#000000',
  primary1: '#EBF2F7',
  primary2: '#70A4C9',
  primary3: '#4086B8',
  primary4: '#196BA6',
  primary5: '#0D5385',
  primary6: '#0B456E',
  primary7: '#093859',
  red1: '#F9BFBF',
  red2: '#F28080',
  red3: '#F24949',
  red4: '#E50000',
  red5: '#B20000',
} as const

export const fontFamily = "'Noto Sans', sans-serif"

export const boxShadows = {
  dropdown: '0px 6px 20px rgba(0, 0, 0, 0.05), 0px 2px 6px rgba(0, 0, 0, 0.08), 0px 8px 25px rgba(0, 0, 0, 0.05);',
  main: '0px 0px 20px rgba(50, 51, 51, 0.05)',
  picker: '0px 1px 1px rgba(0, 0, 0, 0.1), 0px 2px 5px rgba(50, 51, 51, 0.1)',
  pointOnField: '0px 0px 12px 0px rgba(0, 0, 0, 0.50)',
  tooltipClue: '0px 2px 8px rgba(0, 0, 0, 0.15)',
} as const

export const pageContainerWidth = '769px'
export const narrowColumnWidth = '380px'
export const wideColumnWidth = '780px'
