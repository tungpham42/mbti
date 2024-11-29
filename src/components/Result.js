import React from "react";

function Result({ answers }) {
  const mbtiResults = [
    {
      type: "ESTJ",
      description:
        "Bạn là người thực tế, tổ chức tốt và tập trung vào hiệu quả. Bạn thường giữ vai trò lãnh đạo và thích tạo ra cấu trúc và trật tự trong cuộc sống.",
    },
    {
      type: "ESTP",
      description:
        "Bạn năng động, yêu thích thử thách và có kỹ năng xử lý tình huống nhanh. Bạn thích trải nghiệm mới và sống trong hiện tại.",
    },
    {
      type: "ESFJ",
      description:
        "Bạn giàu lòng nhân ái, tập trung vào việc hỗ trợ người khác và tạo môi trường hài hòa. Bạn rất coi trọng mối quan hệ cá nhân.",
    },
    {
      type: "ESFP",
      description:
        "Bạn vui vẻ, hướng ngoại và yêu thích giải trí. Bạn sống hết mình trong hiện tại và truyền cảm hứng cho những người xung quanh.",
    },
    {
      type: "ISTJ",
      description:
        "Bạn logic, đáng tin cậy và làm việc dựa trên các nguyên tắc. Bạn thích duy trì các quy tắc và trật tự.",
    },
    {
      type: "ISTP",
      description:
        "Bạn thích giải quyết vấn đề bằng cách áp dụng tư duy logic và kỹ năng thực hành. Bạn thường không thể đoán trước và yêu thích tự do.",
    },
    {
      type: "ISFJ",
      description:
        "Bạn trung thành, tận tâm và luôn sẵn lòng giúp đỡ người khác. Bạn là người xây dựng sự ổn định trong các mối quan hệ.",
    },
    {
      type: "ISFP",
      description:
        "Bạn sống nội tâm, sáng tạo và nhạy cảm với cái đẹp. Bạn yêu thích sự tự do trong việc thể hiện bản thân.",
    },
    {
      type: "ENTJ",
      description:
        "Bạn mạnh mẽ, tự tin và có khả năng lãnh đạo tự nhiên. Bạn thường có tầm nhìn xa và khả năng hoạch định.",
    },
    {
      type: "ENTP",
      description:
        "Bạn sáng tạo, cởi mở và yêu thích những cuộc tranh luận ý nghĩa. Bạn thường tìm kiếm ý tưởng mới và giải pháp sáng tạo.",
    },
    {
      type: "ENFJ",
      description:
        "Bạn có khả năng lãnh đạo và kết nối với người khác. Bạn nhạy bén với nhu cầu của cộng đồng và luôn muốn mang lại giá trị tốt nhất.",
    },
    {
      type: "ENFP",
      description:
        "Bạn nhiệt huyết, tràn đầy năng lượng và có khả năng sáng tạo vô hạn. Bạn luôn tìm kiếm sự tự do và khám phá.",
    },
    {
      type: "INFJ",
      description:
        "Bạn nhạy cảm, chu đáo và có tầm nhìn sâu sắc về cuộc sống. Bạn thường muốn tạo ra ý nghĩa và sự thay đổi tích cực.",
    },
    {
      type: "INFP",
      description:
        "Bạn giàu lòng trắc ẩn, sáng tạo và lý tưởng hóa mọi điều trong cuộc sống. Bạn luôn tìm kiếm sự hài hòa và ý nghĩa sâu xa.",
    },
    {
      type: "INTJ",
      description:
        "Bạn là người phân tích, sáng tạo và có khả năng lên kế hoạch dài hạn. Bạn thường có tầm nhìn rõ ràng về tương lai.",
    },
    {
      type: "INTP",
      description:
        "Bạn là người tò mò, yêu thích nghiên cứu và khám phá các lý thuyết. Bạn phân tích mọi thứ một cách chi tiết và logic.",
    },
  ];
  const calculateMBTI = () => {
    const traits = ["E", "S", "T", "J"];
    const result = traits.map((trait, index) =>
      answers[index + 1].includes(trait)
        ? trait
        : trait === "E"
        ? "I"
        : trait === "S"
        ? "N"
        : trait === "T"
        ? "F"
        : "P"
    );
    return result.join("");
  };

  const mbti = calculateMBTI();

  const PersonalityInfo = ({ mbti }) => {
    const result = mbtiResults.find((res) => res.type === mbti);

    return (
      <h5>
        <u>Giải thích</u>:{result?.description || "Description not found."}
      </h5>
    );
  };

  return (
    <div className="text-center">
      <h2>Kiểu MBTI của bạn là:</h2>
      <h1>{mbti}</h1>
      <PersonalityInfo mbti={mbti} />
    </div>
  );
}

export default Result;
