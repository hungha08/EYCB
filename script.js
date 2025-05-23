function showSection(sectionId) {
    document.getElementById("map-section").style.display = "none";
    document.getElementById("quiz-section").style.display = "none";
    document.getElementById("lesson-section").style.display = "none";

    document.getElementById(sectionId).style.display = "block";

    if (sectionId === "quiz-section") {
      loadQuestion();
    }
}

let infoBoxInitialized = false;

function showFloatingInfo(locationId, markerElement) {
  const infoBox = document.getElementById("floating-info");
  const infoText = document.getElementById("floating-text");
  const infoImage = document.getElementById("floating-image");

  let text = "Không có thông tin.";
  let imageSrc = "";

  switch (locationId) {
    case "ban-gioc":
       text = "🌊Thác Bản Giốc, nằm tại xã Đàm Thủy, huyện Trùng Khánh, tỉnh Cao Bằng, là một trong những thác nước đẹp nhất Việt Nam và Đông Nam Á. Với vẻ đẹp hoang sơ, nước trong vắt, và cảnh quan hùng vĩ, thác Bản Giốc là điểm đến lý tưởng cho du khách yêu thích khám phá thiên nhiên. Du lịch đến thác Bản Giốc, du khách có thể tham gia các hoạt động như chụp ảnh, đi thuyền trên sông, và thưởng thức các món ăn đặc sản địa phương. Ngoài ra, vùng đất này còn nổi bật với nền văn hóa đa dạng của các dân tộc thiểu số. ";
       imageSrc = "images/thac-ban-gioc-2.png";
       break;

    case "pac-bo":
       text = "Khu di tích Quốc gia đặc biệt Pác Bó là nơi Bác Hồ về nước năm 1941 và chọn làm căn cứ cách mạng. Du khách có thể khám phá hang Cốc Bó, suối Lê Nin và hòa mình vào thiên nhiên, kết hợp tìm hiểu lịch sử và văn hóa địa phương.";
       imageSrc = "images/pac-bo.png";
       break;

    case "cao-bang":
       text = "Trung tâm thành phố Cao Bằng là nơi hòa quyện giữa hiện đại và truyền thống, nằm bên sông Bằng thơ mộng. Khu vực này được quy hoạch gọn gàng, sạch đẹp với nhiều công trình mới xen lẫn kiến trúc mang bản sắc địa phương. Du khách có thể dạo phố, tham quan Quảng trường, thưởng thức đặc sản tại phố đi bộ Kim Đồng, nghỉ ngơi tại các khách sạn, quán cà phê, và khám phá cuộc sống yên bình của đô thị miền núi trước khi tiếp tục hành trình du lịch Cao Bằng.";
       imageSrc = "images/thanh-pho-cb.png";
       break;

    case "thuy-dien-bao-lam":
       text = "Thủy điện Bảo Lâm không chỉ là công trình năng lượng mà còn là điểm đến hấp dẫn cho du lịch sinh thái và trải nghiệm. Du khách có thể khám phá cảnh quan hùng vĩ của sông Gâm, hòa mình vào thiên nhiên hoang sơ của vùng núi Cao Bằng. Đây là nơi lý tưởng để nghỉ dưỡng, chụp ảnh và tìm hiểu về công nghệ thủy điện. Du lịch tại đây mang đến sự kết hợp giữa khám phá và học hỏi.";
       imageSrc = "images/bao-lam-1.png";
       break;

    case "nui-phja-da":
       text = "Núi Phja Dạ là đỉnh núi cao nhất tỉnh Cao Bằng, nổi bật với vẻ đẹp hoang sơ và hùng vĩ. Đây là điểm đến lý tưởng cho du lịch trekking và khám phá thiên nhiên. Du khách có thể leo núi, ngắm mây trời, tuyết rơi mùa đông và tìm hiểu văn hóa dân tộc vùng cao.";
       imageSrc = "images/phia-da-1.png" ;
       break;

    case "lang-du-lich-cong-dong-khuoi-khon":
       text = "Làng du lịch cộng đồng Khuổi Khon, xã Kim Cúc, huyện Bảo Lạc, tỉnh Cao Bằng, là nơi sinh sống của đồng bào dân tộc Lô Lô. Du khách đến đây có thể trải nghiệm cuộc sống bản địa, nghỉ tại nhà sàn truyền thống, tham gia các hoạt động như thêu dệt thổ cẩm, chế biến món ăn dân tộc và giao lưu văn hóa. Với cảnh quan thiên nhiên hoang sơ và bản sắc văn hóa độc đáo, Khuổi Khon là điểm đến lý tưởng cho du lịch cộng đồng và khám phá văn hóa vùng cao.";
       imageSrc = "images/khuoi-khon-1.png"; 
       break;

    case "soc-giang":
       text = "Cửa khẩu Sóc Giang nằm ở huyện Hà Quảng, Cao Bằng, giáp biên giới Trung Quốc. Đây là điểm đến hấp dẫn cho du lịch biên giới và khám phá văn hóa vùng cao. Du khách có thể tham quan chợ phiên, giao lưu với người dân tộc và trải nghiệm đời sống vùng biên.";
       imageSrc = "images/soc-giang.png";
       break;
        

    case "ta-lung":
       text = "Cửa khẩu quốc tế Tà Lùng, nằm tại thị trấn Tà Lùng, huyện Quảng Hòa, tỉnh Cao Bằng, là điểm cuối của Quốc lộ 3 và thông thương với cửa khẩu Thủy Khẩu (Trung Quốc) qua cầu Thủy Khẩu bắc qua sông Bắc Vọng. Với vị trí chiến lược và cảnh quan sông núi hữu tình, nơi đây là điểm đến hấp dẫn cho du lịch biên giới, nơi du khách có thể trải nghiệm văn hóa vùng biên, tham quan chợ phiên địa phương và khám phá cột mốc 943 gần đó.";
       imageSrc = "images/ta-lung.png";
       break;

    case "tran-hung-dao":
       text = "Khu rừng Trần Hưng Đạo (Cao Bằng) là điểm du lịch sinh thái - lịch sử, nơi thành lập Đội Việt Nam Tuyên truyền Giải phóng quân. Du khách có thể khám phá rừng núi hoang sơ và tìm hiểu di tích lịch sử quan trọng này.";
       imageSrc = "images/rung-tran-hung-dao-2.png";
       break;

    case "cua-khau-tra-linh":
       text = "Cửa khẩu Trà Lĩnh là cửa khẩu quốc tế giáp Trung Quốc, nơi du khách có thể trải nghiệm không khí vùng biên giới và khám phá giao lưu văn hóa, thương mại Việt Nam và Trung Quốc.";
       imageSrc = "images/tra-linh.png";
       break;

    case "nui-mat-than":
       text = "Núi Mắt Thần (Cao Bằng) nổi bật với lỗ thủng tự nhiên độc đáo giữa đỉnh núi. Đây là điểm du lịch sinh thái lý tưởng để cắm trại, chụp ảnh và khám phá cảnh quan hùng vĩ.";
       imageSrc = "images/mat-than-1.png";
       break;

    case "thang-hen":
       text = "Hồ Thang Hen (Cao Bằng) là quần thể 36 hồ nước ngọt tự nhiên, nổi bật với nước xanh ngọc bích và khung cảnh thơ mộng. Du khách có thể chèo thuyền, cắm trại và khám phá rừng nguyên sinh.";
       imageSrc = "images/thang-hen-2.png";
       break;

    case "phja-oac-phja-den":
       text = "Phia Oắc - Phia Đén là vườn quốc gia nổi bật với cảnh quan thiên nhiên hùng vĩ, đỉnh Phia Oắc cao 1.931m và khí hậu mát mẻ quanh năm. Du khách có thể săn mây, ngắm băng tuyết mùa đông, khám phá rừng nguyên sinh và tham gia các hoạt động cắm trại, nghỉ dưỡng.";
       imageSrc="images/phia-oac-1.png";
       break;


    case "phja-thap":
       text = "Làng Du lịch cộng đồng Phja Thắp nổi tiếng với nghề làm hương truyền thống của người Nùng An. Du khách có thể trải nghiệm quy trình làm hương thủ công, tham quan cảnh quan yên bình và tìm hiểu văn hóa địa phương.";
       imageSrc = "images/lang-huong-2.png";   
       break;

    case "ban-giuong":
       text = "Bản Giuồng, thuộc xã Quang Trọng, huyện Thạch An, tỉnh Cao Bằng, là một điểm đến hấp dẫn với phong cảnh núi non hùng vĩ, rừng xanh và suối trong vắt. Du khách có thể trải nghiệm không gian yên bình, tận hưởng khí hậu mát mẻ và khám phá văn hóa độc đáo của người Tày nơi đây.";
       imageSrc = "images/ban-giuong-2.png";
       break;

    case "bien-gioi-1950":
       text = "Khu di tích Quốc gia đặc biệt chiến thắng biên giới năm 1950 tại Cao Bằng là địa điểm lịch sử quan trọng, ghi dấu chiến thắng trong cuộc kháng chiến chống Pháp. Nơi đây có phong cảnh thiên nhiên hùng vĩ, các di tích lịch sử, bia tưởng niệm, là điểm đến lý tưởng cho du khách yêu thích khám phá lịch sử và thiên nhiên.";
       imageSrc = "images/1950-1.png"; 
       break;

    case "dong-nguom-ngao":
       text = "Du lịch động Ngườm Ngao chủ yếu là khám phá thiên nhiên và sinh thái , với các hoạt động như tham quan thạch nhũ kỳ vĩ, chụp ảnh cảnh quan, và tìm hiểu văn hóa các dân tộc thiểu số địa phương. Đây là lựa chọn lý tưởng cho những ai yêu thích sự yên bình và hoang sơ.";
       imageSrc = "images/nguom-ngao-1.png"; 
       break;

    case "khuoi-ky":
       text = "Làng du lịch cộng đồng Khuổi Ky, nằm ở huyện Trùng Khánh, Cao Bằng, thu hút du khách với cảnh quan thiên nhiên hoang sơ và bản sắc văn hóa dân tộc Tày. Du khách có thể lưu trú tại các homestay truyền thống, tham gia các hoạt động như cấy lúa, bắt cá suối, và giao lưu văn hóa qua hát then, đàn tính. Đây là điểm đến lý tưởng cho du lịch sinh thái và trải nghiệm văn hóa.";
       imageSrc = "images/khuoi-khon-1.png";
       break;

    case "pac-rang":
       text = "Làng du lịch cộng đồng Pác Rằng là điểm đến hấp dẫn với loại hình **du lịch văn hóa – nghề truyền thống – sinh thái**. Du khách có thể trải nghiệm nghề rèn thủ công của người Nùng An, khám phá nét văn hóa dân tộc qua ẩm thực, trang phục, dân ca, và tận hưởng không gian thiên nhiên yên bình. Đây là nơi lý tưởng để tìm hiểu đời sống bản địa và hòa mình vào cuộc sống nông thôn vùng cao.";
       imageSrc = "images/pac-rang-1.png";
       break;

    case "khau-coc-cha":
       text = "Đèo Khau Cốc Chà, nằm ở huyện Bảo Lạc, Cao Bằng, là một cung đường đèo hiểm trở dài 2,5 km với 14 khúc cua tay áo. Đây là điểm đến lý tưởng cho những ai yêu thích du lịch mạo hiểm, với cảnh quan thiên nhiên hùng vĩ, núi non trùng điệp. Du khách có thể trải nghiệm cảm giác phấn khích khi vượt qua những khúc cua nguy hiểm và chụp những bức ảnh ấn tượng từ đỉnh đèo.";
       imageSrc = "images/khau-coc-cha-2.png";
  }

  infoText.innerText = text;
   
  if (imageSrc) {
    infoImage.src = imageSrc;
    infoImage.style.display = "block";
  } else {
    infoImage.style.display = "none";
  }

  infoBox.style.display = "block";

  // ✅ Tính vị trí theo marker
  const boxWidth = infoBox.offsetWidth;
  const boxHeight = infoBox.offsetHeight;

  const markerRect = markerElement.getBoundingClientRect();
  const pageScrollTop = window.scrollY;
  const pageScrollLeft = window.scrollX;

  const markerTopY = markerRect.top + pageScrollTop;
  const markerCenterX = markerRect.left + pageScrollLeft + markerElement.offsetWidth / 2;

  let top = markerTopY - boxHeight - 20;
  let left = markerCenterX - boxWidth / 2;

  // Không tràn trái/phải khỏi màn hình
  const pageWidth = document.documentElement.clientWidth;
  if (left < 10) left = 10;
  if (left + boxWidth > pageWidth) left = pageWidth - boxWidth - 10;

  // ✅ Không cho tràn xuống dưới marker
  if (top < 0) top = 10;

  infoBox.style.top = `${top}px`;
  infoBox.style.left = `${left}px`;

  // Click ra ngoài để ẩn box
  if (!infoBoxInitialized) {
    document.addEventListener("click", function (e) {
     if (!infoBox.contains(e.target) && !e.target.classList.contains("map-marker")) {
        infoBox.style.display = "none";
      }
    });
    infoBoxInitialized = true;
  }
}

  // Đo vị trí phần trăm của click chuột trên bản đồ (map-section)
  document.querySelector(".map-section").addEventListener("click", function (e) {
   const rect = this.getBoundingClientRect();
   const x = e.clientX - rect.left;
   const y = e.clientY - rect.top;
   const xPercent = (x / rect.width * 100).toFixed(2);
   const yPercent = (y / rect.height * 100).toFixed(2);
   console.log(`top: ${yPercent}%; left: ${xPercent}%;`);
 });
  
const questions = [
  {
    question: "Thác Bản Giốc thuộc huyện nào?",
    correct: "A",
    options: {
      A: "Trùng Khánh",
      B: "Bảo Lâm",
      C: "Nguyên Bình",
      D: "Hà Quảng"
    }
  },
  {
    question: "Khu di tích Pác Bó gắn với ai?",
    correct: "C",
    options: {
      A: "Võ Nguyên Giáp",
      B: "Trần Phú",
      C: "Hồ Chí Minh",
      D: "Phạm Văn Đồng"
    }
  },
  {
    question: "Cao Bằng có bao nhiêu huyện?",
    correct: "B",
    options: {
      A: "10",
      B: "13",
      C: "15",
      D: "12"
    },
  },
  {
    question: "Cao Bằng thuộc vùng nào của nước ta?",
    options: {
      A: "Tây Nam Bộ",
      B: "Tây Nguyên",
      C: "Miền núi phía Bắc",
      D: "Đồng bằng Bắc Bộ"
    },
    correct: "C"
  },
  {
    question: "Thác Bản Giốc nổi tiếng ở Cao Bằng đẹp vì?",
    options: {
      A: "Có nhiều cá",
      B: "Có nước trong và đổ từ trên cao",
      C: "Có nhiều thuyền",
      D: "Nằm gần biển"
    },
    correct: "B"
  },
  {
    question: "Ai đã từng sống và làm việc ở hang Pác Bó (Cao Bằng)?",
    options: {
      A: "Hồ Chí Minh",
      B: "Nguyễn Du",
      C: "Trần Quốc Tuấn",
      D: "Lê Lợi"
    },
    correct: "A"
  },
  {
    question: "Tên con sông chảy qua thành phố Cao Bằng là gì?",
    options: {
      A: "Sông Đà",
      B: "Sông Hồng",
      C: "Sông Bằng",
      D: "Sông Lam"
    },
    correct: "C"
  },
  {
    question: "Cao Bằng nổi tiếng với món bánh nào sau đây?",
    options: {
      A: "Bánh tét",
      B: "Bánh khảo",
      C: "Bánh chưng",
      D: "Bánh tráng"
    },
    correct: "B"
  },
  {
    question: "Trang phục truyền thống của dân tộc Tày ở Cao Bằng có màu gì?",
    options: {
      A: "Xanh lá cây",
      B: "Đỏ tươi",
      C: "Chàm (xanh đen)",
      D: "Vàng óng"
    },
    correct: "C"
  },
  {
    question: "Dân tộc nào sinh sống đông nhất ở Cao Bằng?",
    options: {
      A: "Tày",
      B: "Kinh",
      C: "Hoa",
      D: "Chăm"
    },
    correct: "A"
  },
  {
    question: "Cao Bằng giáp với quốc gia nào?",
    options: {
      A: "Lào",
      B: "Trung Quốc",
      C: "Campuchia",
      D: "Thái Lan"
    },
    correct: "B"
  },
  {
    question: "Di tích Pác Bó thuộc huyện nào của Cao Bằng?",
    options: {
      A: "Trùng Khánh",
      B: "Hòa An",
      C: "Nguyên Bình",
      D: "Hà Quảng"
    },
    correct: "D"
  },
  {
    question: "Cao Bằng có mấy mùa trong năm?",
    options: {
      A: "2 mùa: mưa và khô",
      B: "4 mùa: xuân, hạ, thu, đông",
      C: "1 mùa",
      D: "5 mùa"
    },
    correct: "B"
  },
];

let currentQuestion = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerHTML = `
    ${q.question}<br>
    A: ${q.options.A} | 
    B: ${q.options.B} | 
    C: ${q.options.C} | 
    D: ${q.options.D}
  `;
  document.getElementById("result").innerText = "";
}

function answer(choice) {
  const q = questions[currentQuestion];
  const result = document.getElementById("result");

  if (choice === q.correct) {
    result.innerText = "Chính xác!";
  } else {
    result.innerText = `Sai rồi. Đáp án đúng là ${q.correct}: ${q.options[q.correct]}`;
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    setTimeout(loadQuestion, 2000);
  } else {
    setTimeout(() => {
      document.getElementById("question").innerText = "Hết câu hỏi!";
    }, 2000);
  }
};

const lessons = {
    1: `
      <h3>1. Địa lý Cao Bằng</h3>
      <ul>
        <p><strong>
          Đây là một tỉnh miền núi giàu tiềm năng và giá trị tại vùng Đông Bắc Việt Nam. Cao Bằng có địa hình chủ yếu là núi đá vôi xen lẫn các thung lũng, sông suối, tạo nên cảnh quan thiên nhiên hùng vĩ và độc đáo. Tỉnh này nằm trong Công viên địa chất toàn cầu UNESCO Non Nước Cao Bằng – một kho tàng địa chất với lịch sử hình thành hàng trăm triệu năm. Khí hậu nơi đây mát mẻ quanh năm, hệ thống sông ngòi phong phú với những danh thắng nổi tiếng mang lại giá trị lớn về du lịch và môi trường. Thông qua bài học, người dùng không chỉ được trang bị kiến thức về tự nhiên, khí hậu và địa chất mà còn hiểu sâu sắc hơn về mối liên hệ giữa thiên nhiên, con người và sự phát triển bền vững của vùng đất Cao Bằng. Đây chính là cơ hội để khơi dậy tinh thần khám phá và lòng tự hào về quê hương trong mỗi học sinh.
        <strong></p>
      </ul>
    `, 
    2: `
      <h3>2. Lịch sử Pác Bó</h3>
      <ul>
        <p><strong>
          Di tích Quốc gia đặc biệt Pác Bó, thuộc xã Trường Hà, huyện Hà Quảng, tỉnh Cao Bằng, là một “địa chỉ đỏ” mang giá trị lịch sử và giáo dục sâu sắc. Đây là nơi Chủ tịch Hồ Chí Minh chọn làm căn cứ địa cách mạng khi trở về nước năm 1941, mở đầu cho thời kỳ hoạt động trực tiếp trong nước để lãnh đạo phong trào giải phóng dân tộc. Với những dấu tích còn nguyên vẹn như hang Cốc Bó, suối Lê-nin, núi Các Mác, lán Khuổi Nậm…, di tích không chỉ tái hiện chân thực cuộc sống giản dị, kham khổ mà đầy trí tuệ và ý chí của Bác Hồ, mà còn là bài học sống động về lòng yêu nước, tinh thần tự học, sự kiên trì và lý tưởng cách mạng cao đẹp.
        </strong></p>
      </ul>
    `,
    3: `
      <h3>3. Văn hóa dân tộc Tày</h3>
      <ul>
        <p><strong>
          Khi đến với Cao Bằng, du khách không chỉ được chiêm ngưỡng vẻ đẹp thiên nhiên kỳ vĩ mà còn có cơ hội tìm hiểu sâu sắc về nền văn hóa đặc sắc của dân tộc Tày – cộng đồng dân cư đông nhất tại tỉnh này. Văn hóa Tày thể hiện rõ nét qua ngôn ngữ, trang phục, kiến trúc nhà sàn, phong tục tập quán và đặc biệt là kho tàng văn học dân gian phong phú. Đến các bản làng nghề , bạn còn có thể trải nghiệm nghề rèn thủ công, dệt vải chàm và thưởng thức ẩm thực Tày đặc trưng như khẩu sli, xôi ngũ sắc hay lạp xưởng hun khói. Mỗi trải nghiệm là một bài học sống động về sự gắn bó giữa con người và thiên nhiên, thể hiện nét đẹp dung dị, bền bỉ của một nền văn hóa lâu đời giữa lòng núi rừng Đông Bắc.
        </strong></p>
      </ul>
    `
  };

  function showLesson(lessonNumber) {
    const contentDiv = document.getElementById('lesson-content');
    const content = lessons[lessonNumber] || '<p>Không tìm thấy bài học.</p>';
    contentDiv.innerHTML = content;
  }