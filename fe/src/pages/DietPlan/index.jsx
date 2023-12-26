import Header from '../../components/Header'
import './style.css'
import { useNavigate } from 'react-router-dom'

export default function DietPlan() {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/meal-guide')
  }
  return (
    <>
      <Header goBack={true} text={'Chế độ ăn'} />
      <div className="diet-plan">
        <label>Tổng lượng Calo cần tiêu thụ trong ngày</label>
        <allday>2000 kcal</allday>
        <label>Đề xuất</label>
        <text>Bữa sáng: 1000 kcal</text>
        <text>Bữa trưa: 600 kcal</text>
        <text>Bữa tối: 400 kcal</text>
      </div>
      <button className="calo-table" onClick={handleClick}>
        Bảng Calo
      </button>
    </>
  )
}
