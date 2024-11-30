const results = [
  {
    type: "ESTJ",
    shortTerm: "The Executive - Quản lý thực tế",
    description:
      "Bạn là người thực tế, tổ chức tốt và tập trung vào hiệu quả. Bạn thường giữ vai trò lãnh đạo và thích tạo ra cấu trúc và trật tự trong cuộc sống.",
    trait: "Quản lý, quyết đoán, thực tế",
    pros: "Lãnh đạo tốt, làm việc có tổ chức, hiệu quả cao",
    cons: "Có thể quá cứng nhắc và khó chịu với sự thay đổi",
  },
  {
    type: "ESTP",
    shortTerm: "The Entrepreneur - Mạo hiểm và năng động",
    description:
      "Bạn năng động, yêu thích thử thách và có kỹ năng xử lý tình huống nhanh. Bạn thích trải nghiệm mới và sống trong hiện tại.",
    trait: "Mạo hiểm, năng động, lạc quan",
    pros: "Nhanh nhạy, thích ứng tốt, sáng tạo",
    cons: "Đôi khi thiếu kiên nhẫn và chú ý đến chi tiết",
  },
  {
    type: "ESFJ",
    shortTerm: "The Consul - Người chăm sóc và hợp tác",
    description:
      "Bạn giàu lòng nhân ái, tập trung vào việc hỗ trợ người khác và tạo môi trường hài hòa. Bạn rất coi trọng mối quan hệ cá nhân.",
    trait: "Nhân hậu, thân thiện, hợp tác",
    pros: "Chăm sóc người khác, dễ gần, hỗ trợ tốt",
    cons: "Có thể quá quan tâm đến sự chấp nhận của người khác",
  },
  {
    type: "ESFP",
    shortTerm: "The Entertainer - Người sống hết mình",
    description:
      "Bạn vui vẻ, hướng ngoại và yêu thích giải trí. Bạn sống hết mình trong hiện tại và truyền cảm hứng cho những người xung quanh.",
    trait: "Hướng ngoại, vui vẻ, sáng tạo",
    pros: "Năng động, dễ tiếp cận, yêu đời",
    cons: "Có thể thiếu kiên nhẫn và dễ bị phân tâm",
  },
  {
    type: "ISTJ",
    shortTerm: "The Logistician - Người có tổ chức",
    description:
      "Bạn logic, đáng tin cậy và làm việc dựa trên các nguyên tắc. Bạn thích duy trì các quy tắc và trật tự.",
    trait: "Trách nhiệm, có tổ chức, tỉ mỉ",
    pros: "Cẩn thận, đáng tin cậy, làm việc có kỷ luật",
    cons: "Khó chịu với sự thay đổi, thiếu linh hoạt",
  },
  {
    type: "ISTP",
    shortTerm: "The Virtuoso - Nhà phân tích độc lập",
    description:
      "Bạn thích giải quyết vấn đề bằng cách áp dụng tư duy logic và kỹ năng thực hành. Bạn thường không thể đoán trước và yêu thích tự do.",
    trait: "Logic, độc lập, thực tế",
    pros: "Giải quyết vấn đề nhanh, sáng tạo, tự chủ",
    cons: "Có thể thiếu cảm xúc và dễ tách biệt với người khác",
  },
  {
    type: "ISFJ",
    shortTerm: "The Defender - Người trung thành và chăm sóc",
    description:
      "Bạn trung thành, tận tâm và luôn sẵn lòng giúp đỡ người khác. Bạn là người xây dựng sự ổn định trong các mối quan hệ.",
    trait: "Trung thành, chăm sóc, đáng tin cậy",
    pros: "Tận tâm, yêu thương, hỗ trợ tốt",
    cons: "Dễ bị lợi dụng và thiếu tự tin trong quyết định",
  },
  {
    type: "ISFP",
    shortTerm: "The Adventurer - Người sáng tạo và nội tâm",
    description:
      "Bạn sống nội tâm, sáng tạo và nhạy cảm với cái đẹp. Bạn yêu thích sự tự do trong việc thể hiện bản thân.",
    trait: "Sáng tạo, dịu dàng, nội tâm",
    pros: "Nhạy cảm, nghệ thuật, hòa hợp với thiên nhiên",
    cons: "Dễ cảm thấy bị tổn thương và rụt rè trong giao tiếp",
  },
  {
    type: "ENTJ",
    shortTerm: "The Commander - Lãnh đạo quyết đoán",
    description:
      "Bạn mạnh mẽ, tự tin và có khả năng lãnh đạo tự nhiên. Bạn thường có tầm nhìn xa và khả năng hoạch định.",
    trait: "Lãnh đạo, quyết đoán, chiến lược",
    pros: "Tự tin, quyết đoán, có tầm nhìn",
    cons: "Có thể quá nghiêm khắc và thiếu kiên nhẫn",
  },
  {
    type: "ENTP",
    shortTerm: "The Debater - Nhà sáng tạo và tranh luận",
    description:
      "Bạn sáng tạo, cởi mở và yêu thích những cuộc tranh luận ý nghĩa. Bạn thường tìm kiếm ý tưởng mới và giải pháp sáng tạo.",
    trait: "Sáng tạo, năng động, thích tranh luận",
    pros: "Sáng tạo, linh hoạt, yêu thích thử thách",
    cons: "Đôi khi thiếu sự kiên định và quá cứng đầu",
  },
  {
    type: "ENFJ",
    shortTerm: "The Protagonist - Lãnh đạo và đồng cảm",
    description:
      "Bạn có khả năng lãnh đạo và kết nối với người khác. Bạn nhạy bén với nhu cầu của cộng đồng và luôn muốn mang lại giá trị tốt nhất.",
    trait: "Lãnh đạo, đồng cảm, có tầm nhìn",
    pros: "Hỗ trợ người khác, tạo động lực, dễ đồng cảm",
    cons: "Có thể quá quan tâm đến cảm xúc của người khác",
  },
  {
    type: "ENFP",
    shortTerm: "The Campaigner - Người nhiệt huyết và sáng tạo",
    description:
      "Bạn nhiệt huyết, tràn đầy năng lượng và có khả năng sáng tạo vô hạn. Bạn luôn tìm kiếm sự tự do và khám phá.",
    trait: "Hướng ngoại, sáng tạo, nhiệt huyết",
    pros: "Lạc quan, dễ gần, đầy cảm hứng",
    cons: "Có thể thiếu sự kiên nhẫn và dễ phân tâm",
  },
  {
    type: "INFJ",
    shortTerm: "The Advocate - Nhà tư tưởng lý tưởng",
    description:
      "Bạn nhạy cảm, chu đáo và có tầm nhìn sâu sắc về cuộc sống. Bạn thường muốn tạo ra ý nghĩa và sự thay đổi tích cực.",
    trait: "Nhạy cảm, lý tưởng, tư duy sâu sắc",
    pros: "Sâu sắc, có tầm nhìn, tận tâm",
    cons: "Có thể cảm thấy cô đơn và dễ bị tổn thương",
  },
  {
    type: "INFP",
    shortTerm: "The Mediator - Người lý tưởng và trắc ẩn",
    description:
      "Bạn giàu lòng trắc ẩn, sáng tạo và lý tưởng hóa mọi điều trong cuộc sống. Bạn luôn tìm kiếm sự hài hòa và ý nghĩa sâu xa.",
    trait: "Lý tưởng, nhạy cảm, trắc ẩn",
    pros: "Sáng tạo, giàu lòng trắc ẩn, tinh tế",
    cons: "Có thể quá lý tưởng và thiếu thực tế",
  },
  {
    type: "INTJ",
    shortTerm: "The Architect - Nhà chiến lược độc lập",
    description:
      "Bạn là người phân tích, sáng tạo và có khả năng lên kế hoạch dài hạn. Bạn thường có tầm nhìn rõ ràng về tương lai.",
    trait: "Chiến lược, sáng tạo, độc lập",
    pros: "Lý trí, sáng tạo, độc lập trong suy nghĩ",
    cons: "Khó gần, thiếu kiên nhẫn với những người không đồng quan điểm",
  },
  {
    type: "INTP",
    shortTerm: "The Thinker - Nhà phân tích lý thuyết",
    description:
      "Bạn là người tò mò, yêu thích nghiên cứu và khám phá các lý thuyết. Bạn phân tích mọi thứ một cách chi tiết và logic.",
    trait: "Tò mò, phân tích, lý thuyết",
    pros: "Thông minh, phân tích sắc bén, lý luận chặt chẽ",
    cons: "Có thể thiếu sự giao tiếp cảm xúc và đôi khi quá lý trí",
  },
];
export default results;
