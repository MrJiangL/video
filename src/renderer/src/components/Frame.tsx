import { FormControl, InputLabel, MenuItem } from '@mui/material'
import { useState } from 'react'
import Select, { SelectChangeEvent, SelectProps } from '@mui/material/Select'

function Frame(): JSX.Element {
  // 处理弹出层 和 input 的框不对齐
  const MenuProps: SelectProps['MenuProps'] = {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    },
    marginThreshold: 0
  }

  const [size, setSize] = useState('')

  const sizes = ['60', '30']

  const [frame, setFrame] = useState('')

  const frames = ['1920x1080', '1024x720']

  const handleChangeFrame = (event: SelectChangeEvent) => {
    setFrame(event.target.value)
  }
  const handleChangeSize = (event: SelectChangeEvent) => {
    setSize(event.target.value)
  }

  return (
    <main className="bg-white p-3 mt-5 flex justify-center gap-2">
      <FormControl variant="outlined" className="w-full" size="small">
        <InputLabel id="demo-simple-select-required-label">分辨率</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={frame}
          label="分辨率"
          onChange={handleChangeFrame}
          MenuProps={MenuProps}
        >
          {frames.map((item) => (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="outlined" className="w-full" size="small">
        <InputLabel id="demo-simple-select-required-label">帧率</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={size}
          label="帧率"
          onChange={handleChangeSize}
          MenuProps={MenuProps}
        >
          {sizes.map((item) => (
            <MenuItem value={item} key={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </main>
  )
}

export default Frame
