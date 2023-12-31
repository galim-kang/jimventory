import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import serviceData from "../Data/ServiceData";
import bookingData from "../Data/BookingData";

import styles from "./BookingPage.module.css";

function BookingPage() {
  const { id } = useParams();
  const [bookingInfo, setBookingInfo] = useState({
    checkIn: "",
    checkOut: "",
    clientEmail: "",
    clientName: "",
    clientPhone: "",
    clientLanguage: "",
    bags: 1,
  });
  const [section, setSection] = useState(0);
  const [isNextDisabled, setIsNextDisabled] = useState(false); // "Next" 버튼 활성화 여부 상태 변수 추가

  const selectedItem = serviceData.find((item) => item.id === id); 
  // 메인페이지에서 클릭해서 넘어온 가게의 id와 서버에 있는 데이터 비교하여
  // selectedItem에 담아준다
  useEffect(() => {
    console.log(selectedItem);
  }, [selectedItem]);

  if (!selectedItem) {
    return <div>Not found</div>;
  }

  const handleBooking = () => {
    const newBooking = {
      id: String(bookingData.length + 1),
      clientEmail: bookingInfo.clientEmail,
      clientName: bookingInfo.clientName,
      clientPhone: bookingInfo.clientPhone,
      clientLanguage: bookingInfo.clientLanguage,
      bookingStatus: "Pending",
      checkIn: bookingInfo.checkIn,
      checkOut: bookingInfo.checkOut,
      bagsCount: bookingInfo.bags,
      serviceData: selectedItem,
    };
    bookingData.push(newBooking);
    console.log(bookingData);
  };

  const handleInputChange = (event) => {
    setBookingInfo({
      ...bookingInfo,
      [event.target.name]: event.target.value,
    });
    setIsNextDisabled(false); // 빈칸 입력 시 "Next" 버튼 활성화
  };

  const handleIncrease = () => {
    setBookingInfo({ ...bookingInfo, bags: bookingInfo.bags + 1 });
  };

  const handleDecrease = () => {
    if (bookingInfo.bags > 1) {
      setBookingInfo({ ...bookingInfo, bags: bookingInfo.bags - 1 });
    }
  };

  const calculateTotal = () => {
    const bagCost = 7000;
    const days =
      (new Date(bookingInfo.checkOut) - new Date(bookingInfo.checkIn)) /
      (1000 * 60 * 60 * 24);
    return bagCost * bookingInfo.bags * (days + 1);
  };

  const { operatingTime, serviceName, storeType, address } = selectedItem; // 가게 정보에서 받아온 프로퍼티 데이터들

  const nextSection = () => {
    if (section < 4) {
      if (validateFields(section)) {
        setSection(section + 1);
        setIsNextDisabled(false); // 다음 섹션으로 이동 가능하므로 "Next" 버튼 활성화
      } else {
        setIsNextDisabled(true); // 필수 정보가 빠져 있으므로 "Next" 버튼 비활성화
      }
    }
  };

  const prevSection = () => {
    if (section > 0) {
      setSection(section - 1);
      setIsNextDisabled(false); // 이전 섹션으로 이동할 때는 "Next" 버튼 활성화
    }
  };

  const validateFields = (section) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    switch (section) {
      case 0:
        return true;
      case 1:
        const checkInDate = new Date(bookingInfo.checkIn);
        const checkOutDate = new Date(bookingInfo.checkOut);
        if (bookingInfo.checkIn === "" || bookingInfo.checkOut === "") {
          document.getElementById("errorSection2").textContent =
            "Please fill in both check-in and check-out dates.";
          return false;
        }
        if (checkInDate < today) {
          document.getElementById("errorSection2").textContent =
            "Check-in date must be today or a future date.";
          return false;
        }
        if (checkOutDate < checkInDate) {
          document.getElementById("errorSection2").textContent =
            "Check-out date must be later than check-in date.";
          return false;
        }
        return true;
      case 2:
        return true;
      case 3:
        return true;
      default:
        return true;
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.sectionIndicator}>Section {section + 1}</h3>
      {section === 0 && (
        <section>
          <p className={styles.description}>{storeType}</p>
          <h1 className={styles.title}>{serviceName}</h1>
          <b className={styles.description}>{address}</b>
          <p className={styles.time}>
            Operating Time: {operatingTime[0]} - {operatingTime[1]}
          </p>
          <p>tel: 02-123-4567</p>
          <button className={styles.moveButton} onClick={nextSection}>
            next
          </button>
        </section>
      )}
      {section === 1 && (
        <section>
          <div className={styles.illustration}></div>

          <div>check-in</div>
          <input
            type="date"
            name="checkIn"
            value={bookingInfo.checkIn}
            onChange={handleInputChange}
          />
          <div>check-out</div>
          <input
            type="date"
            name="checkOut"
            value={bookingInfo.checkOut}
            onChange={handleInputChange}
          />
          <div>
            <button className={styles.moveButton} onClick={prevSection}>
              prev
            </button>
            <button
              className={styles.moveButton}
              disabled={isNextDisabled}
              onClick={nextSection}
            >
              next
            </button>
            <p id="errorSection2"></p>
          </div>
        </section>
      )}
      {section === 2 && (
        <section>
          <div className={styles.illustration}></div>

          <div className={styles.bagsContainer}>
            <div>bags</div>
            <div>Suitcase, backpack, shopping bag</div>
            <div className={styles.bagsControl}>
              <button onClick={handleDecrease}>-</button>
              <div>{bookingInfo.bags}</div>
              <button onClick={handleIncrease}>+</button>
            </div>
          </div>
          <p>Total: ₩ {calculateTotal()}</p>
          <div>
            <button className={styles.moveButton} onClick={prevSection}>
              prev
            </button>
            <button
              className={styles.bookingButton}
              onClick={() => {
                handleBooking();
                nextSection();
              }}
            >
              Book now
            </button>
          </div>
        </section>
      )}
      {section === 3 && (
        <section>
          <h1>Enjoy your hands-free journey!</h1>
          <div className={styles.illustration}></div>
          <div>여기에 결제 수단 들어가야 해요~</div>
          <h3>payPal kakaopey naverpay ...</h3>
          <button className={styles.moveButton} onClick={prevSection}>
            prev
          </button>
        </section>
      )}
    </div>
  );
}

export default BookingPage;

// section 2
// 날짜 input 받을 때 
// 1시간 단위로 받을건데
// check-in 12월 4일 11시부터 맡기고 싶어 => 12/04 11:00
// check-out 미리 지정하지 않고, 쓴 시간만큼만 자동결제 (카드 등록해놓기)
// 자동결제 되는 결제수단 알아내서 그거 사용하기 
// 사용시간만큼 자동결제 되는거 알려주기

// section 3
// 박스 크기를 알려주고, 종류가 2개 있다고 가정해서 
// 박스 몇 개 할건지 입력받기

// section 4 
// 결제 수단 입력받기
// 자동결제 혹은 현금결제

// section 5 
// 자동결제 => 자동결제 수단 입력받기
// 현금결제 => 예약 완료! 

// 예약 성공하면 서버에 예약정보 저장(업데이트)