// pages/index.js
import axios from "axios";

const HomePage = ({ data }) => {
  return (
    <div>
      <h1>地震海嘯資料</h1>
      {data.length > 0 ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <h2>{item.事件名稱 || "無事件名稱"}</h2>
              <p>地震等級: {item.地震等級 || "無資料"}</p>
              <p>發生時間: {item.發生時間 || "無資料"}</p>
              <p>經度: {item.經度 || "無資料"}</p>
              <p>緯度: {item.緯度 || "無資料"}</p>
              <p>震源深度: {item.震源深度 || "無資料"}</p>
              {/* 根據 API 返回的數據結構，顯示其他屬性 */}
            </li>
          ))}
        </ul>
      ) : (
        <p>無資料可顯示</p>
      )}
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const response = await axios.get(
      "https://opendata.cwa.gov.tw/v1/rest/datastore/E-A0014-001"
    );
    const data = response.data.records; // 假設資料在 records 屬性中

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("獲取資料時出錯:", error);
    return {
      props: {
        data: [],
      },
    };
  }
};

export default HomePage;
