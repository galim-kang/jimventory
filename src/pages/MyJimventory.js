import React, { useState, useEffect } from "react";
import styles from "./MyJimventory.module.css";

import bookingData from "../Data/BookingData";
import userData from "../Data/UserData";

const MyJimventory = () => {
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);

  // 페이지 로드 시 사용자 데이터를 로드
  useEffect(() => {
    // 이 부분에서 백엔드 API를 호출하여 사용자 데이터를 가져옵니다.
    // 일단은 임시로 첫 번째 사용자를 사용자로 설정합니다.
    setUser(userData[0]);

    // 사용자 이메일에 해당하는 예약 정보를 필터링합니다.
    const userBookings = bookingData.filter(
      (booking) => booking.clientEmail === userData[0].email
    );

    setBookings(userBookings);
  }, []);

  return (
    <div className={styles.container}>
      <h3>My Jimventory</h3>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Bookings: {bookings.length}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div>
        <h3>Bookings</h3>
        {bookings.map((booking) => (
          <div className={styles.ticket} key={booking.id}>
            <h4>Booking Ticket</h4>
            <p>Booking Date: {booking.bookingDate}</p>
            <p>Service Name: {booking.serviceData.serviceName}</p>
            <p>Address: {booking.serviceData.address}</p>
            <p>Booking Status: {booking.bookingStatus}</p>
            <p>bagCount: {booking.bagCount}</p>
            <p>
              Operating Time: {booking.serviceData.operatingTime.join(" - ")}
            </p>
          </div>
        ))}
      </div>
      <h1>help</h1>
      <div>
        Do you need assistance? Contact our customer support team via the live
        chat available 24/7, or contact us at support@jimventory.com
      </div>
    </div>
  );
};

export default MyJimventory;

// 승인 대기 => 예약 취소버튼 
// 승인 확정 => 아직 예약한 시간이 안됨 => 예약취소 버튼
// 사용중 => 상세페이지로 들어갔을 때 현재 누적 시간 표시
// 사용완료 -> 기록에서 찾을 수 있게 따로 버튼 등으로 빼기
// 승인 취소 (거절당한 거) => 이유를 알 수 있게 표시해주기
// 하나의 예약 정보 클릭하면 예약 상세페이지로 넘어갈 수 있도록 하기

// 예약 상세페이지 만들어야 함.