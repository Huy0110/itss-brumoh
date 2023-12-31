import * as React from 'react'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Header from '../../components/Header'
import './style.css'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

function createData(name, unit, calories) {
  return { name, unit, calories }
}

const breakfast = [
  createData('Phở bò', 'Bát', 350),
  createData('Ngũ cốc', '500g', 350),
  createData('Sữa', 'Cốc', 200),
  createData('Bánh', 'Cái', 100)
]

const lunch = [createData('Salad gà', 'Suất', 350), createData('Sữa', 'Cốc', 200), createData('Táo', 'Quả', 50)]

const dinner = [createData('Beefsteak', 'Miếng', 350), createData('Nước hoa quả', 'Cốc', 50)]

const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&::before': {
    display: 'none'
  }
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1)
  }
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)'
}))

export default function MealGuide() {
  const [expanded, setExpanded] = React.useState('panel1')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <>
      <Header goBack={true} text={'Chế độ ăn'} />
      <div className="meal-guide">
        <Accordion className="accordions" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <text>Bữa sáng</text>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 355 }} aria-label="simple table">
                <TableHead className="table-head">
                  <TableRow>
                    <TableCell>Thực phẩm</TableCell>
                    <TableCell>Đơn vị</TableCell>
                    <TableCell>Kcal</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {breakfast.map((row) => (
                    <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell>{row.unit}</TableCell>
                      <TableCell>{row.calories}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordions" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <text>Bữa trưa</text>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 355 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Thực phẩm</TableCell>
                    <TableCell>Đơn vị</TableCell>
                    <TableCell>Kcal</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {lunch.map((row) => (
                    <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell>{row.unit}</TableCell>
                      <TableCell>{row.calories}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordions" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <text>Bữa tối</text>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 355 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Thực phẩm</TableCell>
                    <TableCell>Đơn vị</TableCell>
                    <TableCell>Kcal</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dinner.map((row) => (
                    <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell>{row.unit}</TableCell>
                      <TableCell>{row.calories}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  )
}
