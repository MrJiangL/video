import Button from '@mui/material/Button'

type ButtonsType = {
  className: string
}

function Buttons({ className }: ButtonsType): JSX.Element {
  return (
    <main className={`flex justify-center gap-4 ${className}`}>
      <Button variant="contained" color="success" size="small">
        开始转码
      </Button>
      <Button variant="contained" color="error" size="small">
        停止转码
      </Button>
    </main>
  )
}

export default Buttons
