const mbtiCognitiveFunctionsDetails = [
  {
    type: "Ni",
    short: "Trực giác Nội tâm",
    description:
      "Ni là một chức năng nhận thức theo kiểu tiếp nhận thông tin qua cảm nhận nội tâm, tập trung vào các mô hình, kết nối và ý tưởng trừu tượng. Những người có Ni chủ đạo hoặc phụ thường dựa vào cảm giác và sự nhìn nhận trực giác để hiểu về thế giới. Họ thường quan tâm đến ý nghĩa sâu xa của sự kiện và có khả năng dự đoán các khả năng trong tương lai dựa trên các mô hình đã nhận diện. Ni tổng hợp thông tin từ môi trường và chuyển hóa chúng thành các khái niệm trừu tượng.",
    character:
      "Tư duy trừu tượng, nhìn nhận tổng thể, tập trung vào tương lai, khả năng phát hiện các mối liên hệ sâu xa.",
  },
  {
    type: "Te",
    short: "Lý trí Ngoại tâm",
    description:
      "Te là một chức năng đánh giá, tập trung vào hiệu quả, cấu trúc và tổ chức. Chức năng này tìm kiếm bằng chứng bên ngoài và sự sắp xếp hợp lý. Những người có Te mạnh thường rất chú trọng vào kết quả khách quan, có thể đo lường được và quan tâm đến cách thức làm việc, đảm bảo rằng mọi việc được thực hiện một cách năng suất và hiệu quả. Họ thường sử dụng các hệ thống, quy tắc và công cụ bên ngoài để đưa ra quyết định và giải quyết vấn đề.",
    character:
      "Lý luận, quyết đoán, có tổ chức, có cấu trúc, hướng đến kết quả.",
  },
  {
    type: "Ti",
    short: "Lý trí Nội tâm",
    description:
      "Ti là một chức năng đánh giá giúp phân tích và hiểu các khái niệm, hệ thống và logic bên trong. Ti không quan tâm đến ứng dụng thực tế mà tập trung vào nền tảng lý thuyết và cấu trúc của các ý tưởng. Những người có Ti mạnh thường phân tích sâu sắc các thông tin, phân chia chúng thành các phần dễ hiểu. Họ luôn tìm kiếm độ chính xác và tính hợp lý trong nhận thức của mình và thích suy nghĩ độc lập.",
    character:
      "Phân tích, chính xác, chú trọng vào lý thuyết, tập trung vào nội dung logic.",
  },
  {
    type: "Fe",
    short: "Cảm xúc Ngoại tâm",
    description:
      "Fe là một chức năng đánh giá tập trung vào cảm xúc và giá trị của người khác. Fe tìm kiếm sự hòa hợp, thấu hiểu và đồng thuận trong các mối quan hệ xã hội. Những người có Fe mạnh thường rất nhạy cảm với bầu không khí cảm xúc xung quanh và luôn ưu tiên nhu cầu và cảm giác của người khác. Họ đưa ra quyết định dựa trên tác động đến mọi người và luôn cố gắng duy trì các mối quan hệ tích cực và hỗ trợ.",
    character:
      "Đồng cảm, quan tâm, nhận thức xã hội, hợp tác, chú trọng vào mối quan hệ giữa người với người.",
  },
  {
    type: "Fi",
    short: "Cảm xúc Nội tâm",
    description:
      "Fi là một chức năng đánh giá tập trung vào các giá trị, đạo đức và nguyên tắc cá nhân bên trong. Fi giúp cá nhân nhận biết những gì đúng hay sai đối với bản thân. Những người có Fi mạnh thường rất chú trọng đến cảm xúc và giá trị nội tại của mình, ưu tiên tính chân thực và trung thực với những gì họ tin tưởng. Họ có thể rất lý tưởng hóa và thường hành động dựa trên các nguyên tắc đạo đức cá nhân.",
    character: "Chân thực, cá nhân hóa, dựa trên giá trị, suy ngẫm, lý tưởng.",
  },
  {
    type: "Se",
    short: "Cảm giác Ngoại tâm",
    description:
      "Se là một chức năng nhận thức tập trung vào những trải nghiệm cảm giác hiện tại từ thế giới bên ngoài. Chức năng này rất nhạy bén với môi trường xung quanh, giúp người sử dụng nhận ra những chi tiết nhỏ trong hoàn cảnh xung quanh và thu thập thông tin qua các giác quan. Những người có Se mạnh thường sống rất năng động, luôn tìm kiếm sự kích thích và thú vị từ những trải nghiệm hiện tại. Họ yêu thích các hoạt động thể chất và khám phá cuộc sống.",
    character:
      "Nhạy bén, sống động, tập trung vào hiện tại, thích hành động, tìm kiếm cảm giác mạnh.",
  },
  {
    type: "Si",
    short: "Cảm giác Nội tâm",
    description:
      "Si là một chức năng nhận thức lưu trữ những trải nghiệm trong quá khứ và sử dụng chúng để so sánh và đánh giá các tình huống hiện tại. Si dựa vào bộ nhớ và các giác quan để duy trì sự ổn định và liên tục trong nhận thức. Những người có Si mạnh thường rất chú trọng đến chi tiết và thích sự ổn định, cấu trúc và truyền thống. Họ có trí nhớ mạnh mẽ về những gì đã trải qua, đặc biệt là các thông tin cảm giác từ quá khứ.",
    character:
      "Chú ý đến chi tiết, yêu thích truyền thống, ổn định, lưu giữ ký ức.",
  },
  {
    type: "Ne",
    short: "Trực giác Ngoại tâm",
    description:
      "Ne là một chức năng nhận thức tìm kiếm các mô hình và khả năng trong thế giới bên ngoài. Ne hướng đến tương lai, luôn tìm kiếm ý tưởng mới, kết nối và cơ hội. Những người có Ne mạnh thường sáng tạo, tò mò và thích khám phá các lý thuyết, khái niệm hoặc các tình huống tiềm năng. Họ luôn khám phá và dự đoán những gì có thể xảy ra trong tương lai và thích thử nghiệm với các ý tưởng mới.",
    character:
      "Sáng tạo, hướng đến tương lai, tò mò, khái niệm, tìm kiếm cơ hội mới.",
  },
];
export default mbtiCognitiveFunctionsDetails;
