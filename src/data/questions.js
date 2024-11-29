const questions = [
  {
    id: 1,
    question: "Bạn lấy năng lượng từ đâu?",
    options: [
      { text: "Hướng ngoại", trait: "E" },
      { text: "Hướng nội", trait: "I" },
    ],
  },
  {
    id: 2,
    question: "Bạn thích giao tiếp như thế nào?",
    options: [
      { text: "Trò chuyện trực tiếp", trait: "E" },
      { text: "Viết hoặc suy nghĩ trước", trait: "I" },
    ],
  },
  {
    id: 3,
    question: "Môi trường nào phù hợp với bạn hơn?",
    options: [
      { text: "Sôi động và náo nhiệt", trait: "E" },
      { text: "Yên tĩnh và bình lặng", trait: "I" },
    ],
  },
  {
    id: 4,
    question: "Khi lập kế hoạch, bạn thường làm gì?",
    options: [
      { text: "Chia sẻ ngay với người khác", trait: "E" },
      { text: "Suy nghĩ cẩn thận trước khi chia sẻ", trait: "I" },
    ],
  },
  {
    id: 5,
    question: "Bạn thường thích làm gì hơn?",
    options: [
      { text: "Tham gia các sự kiện xã hội", trait: "E" },
      { text: "Hoạt động cá nhân như đọc sách", trait: "I" },
    ],
  },
  {
    id: 6,
    question: "Bạn xử lý thông tin như thế nào?",
    options: [
      { text: "Tập trung vào chi tiết và sự thật hiện tại", trait: "S" },
      {
        text: "Hình dung những khả năng và kết quả trong tương lai",
        trait: "N",
      },
    ],
  },
  {
    id: 7,
    question: "Bạn tin vào điều gì hơn?",
    options: [
      { text: "Những gì bạn thấy, nghe và cảm nhận", trait: "S" },
      { text: "Trực giác và cảm giác bên trong", trait: "N" },
    ],
  },
  {
    id: 8,
    question: "Cách bạn tiếp cận giải quyết vấn đề?",
    options: [
      { text: "Từng bước và có phương pháp", trait: "S" },
      { text: "Nhảy đến các giải pháp sáng tạo", trait: "N" },
    ],
  },
  {
    id: 9,
    question: "Bạn thích học những điều mới như thế nào?",
    options: [
      { text: "Áp dụng thực tế", trait: "S" },
      { text: "Khám phá các khái niệm lý thuyết", trait: "N" },
    ],
  },
  {
    id: 10,
    question: "Bạn thích điều nào hơn?",
    options: [
      { text: "Ví dụ cụ thể", trait: "S" },
      { text: "Ý tưởng trừu tượng", trait: "N" },
    ],
  },
  {
    id: 11,
    question: "Bạn ưu tiên điều gì khi đưa ra quyết định?",
    options: [
      { text: "Lý trí và sự công bằng", trait: "T" },
      { text: "Sự hài hòa và đồng cảm", trait: "F" },
    ],
  },
  {
    id: 12,
    question: "Điều gì thúc đẩy bạn nhiều hơn?",
    options: [
      { text: "Đạt được mục tiêu", trait: "T" },
      { text: "Xây dựng mối quan hệ", trait: "F" },
    ],
  },
  {
    id: 13,
    question: "Bạn xử lý xung đột như thế nào?",
    options: [
      { text: "Giải quyết trực tiếp và khách quan", trait: "T" },
      { text: "Tránh hoặc hòa giải để giữ hòa bình", trait: "F" },
    ],
  },
  {
    id: 14,
    question: "Bạn quan tâm đến điều gì hơn?",
    options: [
      { text: "Những gì công bằng và đúng đắn", trait: "T" },
      { text: "Cảm xúc của mọi người", trait: "F" },
    ],
  },
  {
    id: 15,
    question: "Quy trình ra quyết định của bạn thế nào?",
    options: [
      { text: "Tập trung vào kết quả", trait: "T" },
      { text: "Tập trung vào con người", trait: "F" },
    ],
  },
  {
    id: 16,
    question: "Bạn tiếp cận công việc như thế nào?",
    options: [
      { text: "Lập kế hoạch trước và hoàn thành sớm", trait: "J" },
      { text: "Điều chỉnh linh hoạt khi cần", trait: "P" },
    ],
  },
  {
    id: 17,
    question: "Bạn cảm thấy thế nào về lịch trình?",
    options: [
      { text: "Tuân thủ một kế hoạch cụ thể", trait: "J" },
      { text: "Thích sự linh hoạt và tự do", trait: "P" },
    ],
  },
  {
    id: 18,
    question: "Bạn đặt mục tiêu như thế nào?",
    options: [
      { text: "Cam kết thực hiện kế hoạch", trait: "J" },
      { text: "Để mọi thứ mở và thay đổi khi cần", trait: "P" },
    ],
  },
  {
    id: 19,
    question: "Lối sống của bạn được mô tả thế nào?",
    options: [
      { text: "Có tổ chức và hệ thống", trait: "J" },
      { text: "Thoải mái và linh hoạt", trait: "P" },
    ],
  },
  {
    id: 20,
    question: "Bạn xử lý các nhiệm vụ ra sao?",
    options: [
      { text: "Hoàn thành từng việc một", trait: "J" },
      { text: "Bắt đầu nhiều việc cùng lúc", trait: "P" },
    ],
  },
  {
    id: 21,
    question: "Bạn thường quyết định dựa trên điều gì?",
    options: [
      { text: "Lý trí và logic", trait: "T" },
      { text: "Cảm xúc và trực giác", trait: "F" },
    ],
  },
  {
    id: 22,
    question: "Bạn có xu hướng giải quyết vấn đề như thế nào?",
    options: [
      { text: "Tìm hiểu kỹ càng trước khi ra quyết định", trait: "S" },
      { text: "Hành động ngay và sửa chữa khi cần", trait: "N" },
    ],
  },
  {
    id: 23,
    question: "Bạn cảm thấy thế nào về công việc nhóm?",
    options: [
      { text: "Cảm thấy thoải mái khi làm việc nhóm", trait: "E" },
      { text: "Ưa thích làm việc một mình", trait: "I" },
    ],
  },
  {
    id: 24,
    question: "Khi có một sự kiện lớn, bạn thường làm gì?",
    options: [
      { text: "Tham gia và tìm kiếm cơ hội giao tiếp", trait: "E" },
      { text: "Ở lại nhà và dành thời gian cho bản thân", trait: "I" },
    ],
  },
  {
    id: 25,
    question: "Bạn cảm thấy thế nào khi thay đổi kế hoạch?",
    options: [
      { text: "Không vấn đề gì, thay đổi là một cơ hội", trait: "P" },
      { text: "Cảm thấy khó chịu nếu kế hoạch bị thay đổi", trait: "J" },
    ],
  },
  {
    id: 26,
    question: "Bạn có thích thử thách mới không?",
    options: [
      { text: "Có, tôi thích sự thay đổi", trait: "E" },
      { text: "Không, tôi thích sự ổn định", trait: "I" },
    ],
  },
  {
    id: 27,
    question: "Khi làm việc, bạn thích điều gì nhất?",
    options: [
      { text: "Mọi thứ rõ ràng và có kế hoạch", trait: "J" },
      { text: "Cảm giác tự do và linh hoạt", trait: "P" },
    ],
  },
  {
    id: 28,
    question: "Bạn cảm thấy thế nào khi phải thuyết trình trước đám đông?",
    options: [
      { text: "Thích thú và hào hứng", trait: "E" },
      { text: "Lo lắng và căng thẳng", trait: "I" },
    ],
  },
  {
    id: 29,
    question: "Bạn cảm thấy thế nào về việc sử dụng công nghệ?",
    options: [
      { text: "Cập nhật và sử dụng thường xuyên", trait: "N" },
      { text: "Cẩn trọng và sử dụng vừa phải", trait: "S" },
    ],
  },
  {
    id: 30,
    question: "Bạn sẽ làm gì khi gặp một vấn đề khó khăn?",
    options: [
      { text: "Lên kế hoạch và giải quyết từ từ", trait: "J" },
      { text: "Tìm kiếm giải pháp nhanh chóng và thử nghiệm", trait: "P" },
    ],
  },
];

export default questions;
