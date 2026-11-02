const subjectsData = [
    {
        id: "mon_b",
        name: "Môn B: An Toàn Mạng",
        quizzes: [
            {
                id: "bai_01",
                title: "Bài 01: Chương 1 - Tổng quan về an toàn mạng",
                data: `
Câu 1. Theo mô hình bảo mật theo chiều sâu (Defense in Depth), hệ thống được bảo vệ bởi:
A. Chỉ một lớp phòng thủ rất mạnh.
*B. Nhiều lớp phòng thủ khác nhau.
C. Chủ yếu dựa vào tường lửa (Firewall).
D. Chỉ dựa vào phần mềm diệt virus.

Câu 2. Sự khác biệt cơ bản giữa "lỗ hổng" (vulnerability) và "rủi ro" (risk) là gì?
A. Chúng là hai thuật ngữ đồng nghĩa.
B. Lỗ hổng là cuộc tấn công, còn rủi ro là điểm yếu.
*C. Lỗ hổng là một điểm yếu, còn rủi ro là khả năng lỗ hổng đó bị khai thác và gây ra thiệt hại.
D. Lỗ hổng chỉ tồn tại trên phần mềm, còn rủi ro tồn tại trên phần cứng.

Câu 3. Kỹ thuật tấn công "Phishing" (lừa đảo) khai thác chủ yếu loại lỗ hổng nào?
A. Lỗ hổng phần mềm.
*B. Yếu tố con người.
C. Lỗ hổng phần cứng.
D. Lỗ hổng trong hệ điều hành.

Câu 4. Chính sách bảo mật (Security Policy) trong một tổ chức đóng vai trò gì?
A. Là một phần mềm diệt virus.
*B. Là một tài liệu cấp cao định hướng các quy tắc, trách nhiệm và thực tiễn về an toàn thông tin.
C. Là một thiết bị tường lửa.
D. Là một quy trình sao lưu dữ liệu hàng ngày.

Câu 5. Kỹ thuật xã hội (Social Engineering) là phương pháp tấn công dựa vào việc khai thác yếu tố nào?
A. Lỗ hổng phần mềm.
B. Lỗi cấu hình hệ thống.
*C. Tâm lý và sự tin tưởng của con người.
D. Giao thức mạng không an toàn.

Câu 6. Lỗ hổng "SQL Injection" là một ví dụ về loại lỗ hổng nào?
A. Lỗ hổng phần cứng.
B. Lỗ hổng trong thiết kế giao thức mạng.
*C. Lỗ hổng phần mềm ứng dụng web.
D. Lỗ hổng do cấu hình sai.

Câu 7. Lỗi "Buffer Overflow" (tràn bộ đệm) xảy ra khi nào?
A. Người dùng nhập sai mật khẩu quá nhiều lần.
*B. Một chương trình ghi dữ liệu vượt quá giới hạn của bộ đệm được cấp phát, làm ghi đè lên vùng nhớ liền kề.
C. Hệ thống hết dung lượng lưu trữ trên đĩa cứng.
D. Kết nối mạng bị quá tải.

Câu 8. Tiêu chuẩn nào sau đây là một hệ thống quản lý an toàn thông tin (ISMS) được công nhận rộng rãi trên toàn thế giới?
A. HTTP
B. TCP/IP
*C. ISO/IEC 27001
D. IEEE 802.11

Câu 9. Biện pháp nào sau đây thuộc về an ninh vật lý (Physical Security)?
A. Cài đặt tường lửa.
B. Mã hóa ổ cứng.
*C. Lắp đặt camera giám sát và khóa cửa phòng máy chủ.
D. Sử dụng xác thực hai yếu tố.

Câu 10. Việc không cập nhật các bản vá bảo mật cho hệ điều hành và phần mềm sẽ tạo ra loại lỗ hổng nào?
A. Lỗ hổng zero-day.
*B. Lỗ hổng đã biết nhưng chưa được vá (Unpatched known vulnerability).
C. Lỗ hổng cấu hình.
D. Lỗ hổng vật lý.

Câu 11. Mức bảo mật nào được xem là cơ bản nhất, thường chỉ bao gồm các biện pháp như đặt mật khẩu cho người dùng và cập nhật phần mềm?
A. Mức cao (High)
B. Mức trung bình (Medium)
*C. Mức thấp (Low)
D. Mức chuyên dụng (Dedicated)

Câu 12. Lỗ hổng "Cross-Site Scripting" (XSS) cho phép kẻ tấn công làm gì?
A. Thực thi các lệnh SQL tùy ý trên cơ sở dữ liệu.
*B. Chèn mã độc (thường là JavaScript) vào các trang web mà người dùng khác sẽ xem.
C. Gây tràn bộ đệm của ứng dụng.
D. Truy cập trái phép vào các tệp tin trên máy chủ.

Câu 13. Mục đích chính của giai đoạn "Covering Tracks" (Xóa dấu vết) là gì?
A. Lấy cắp dữ liệu từ hệ thống.
B. Cài đặt backdoor để truy cập lại sau này.
*C. Xóa các file log và che giấu sự hiện diện của kẻ tấn công.
D. Khai thác một lỗ hổng cụ thể.

Câu 14. Hành động xác minh danh tính của một người dùng, hệ thống hoặc thực thể được gọi là gì?
A. Ủy quyền (Authorization)
*B. Xác thực (Authentication)
C. Kiểm toán (Auditing)
D. Mã hóa (Encryption)

Câu 15. Một lỗ hổng bảo mật chưa được nhà cung cấp biết đến hoặc chưa có bản vá được gọi là gì?
A. Lỗ hổng đã biết (Known Vulnerability)
*B. Lỗ hổng zero-day
C. Lỗ hổng con người (Human Vulnerability)
D. Lỗ hổng vật lý (Physical Vulnerability)

Câu 16. Hệ thống phát hiện và ngăn chặn xâm nhập (IDPS - Intrusion Detection and Prevention System) thuộc lớp bảo vệ nào trong kiến trúc an ninh mạng?
A. Lớp vật lý (Physical Layer)
*B. Lớp mạng (Network Layer)
C. Lớp ứng dụng (Application Layer)
D. Lớp chính sách và quy trình (Policies & Procedures Layer)

Câu 17. Ba mục tiêu cốt lõi của an toàn thông tin, thường được gọi là tam giác CIA, bao gồm những gì?
*A. Bảo mật, Toàn vẹn, Sẵn sàng (Confidentiality, Integrity, Availability)
B. Kiểm soát, Nhận dạng, Ủy quyền (Control, Identity, Authorization)
C. Mã hóa, Toàn vẹn, Xác thực (Cryptography, Integrity, Authentication)
D. Bảo mật, Chính xác, Sẵn sàng (Confidentiality, Accuracy, Availability)

Câu 18. Kiểm soát truy cập dựa trên vai trò (Role-Based Access Control - RBAC) hoạt động như thế nào?
A. Cấp quyền truy cập dựa trên địa chỉ IP của người dùng.
*B. Cấp quyền truy cập dựa trên chức năng, vị trí công việc của người dùng trong tổ chức.
C. Cấp quyền truy cập cho tất cả mọi người.
D. Cấp quyền truy cập dựa trên thời gian trong ngày.

Câu 19. Mức an toàn bảo mật nào đảm bảo rằng dữ liệu chỉ được truy cập bởi những người được phép và không bị thay đổi khi chưa được cấp phép?
*A. An toàn dữ liệu
B. An ninh mạng
C. An ninh vật lý
D. An toàn ứng dụng

Câu 20. Một "backdoor" (cửa hậu) được cài đặt trên hệ thống mục tiêu phục vụ cho giai đoạn nào của cuộc tấn công?
A. Dò quét (Scanning)
B. Giành quyền truy cập ban đầu (Initial Access)
*C. Duy trì quyền truy cập (Maintaining Access)
D. Xóa dấu vết (Covering Tracks)

Câu 21. Trong mô hình Cyber Kill Chain, giai đoạn "Exploitation" (Khai thác) xảy ra khi nào?
A. Kẻ tấn công gửi email lừa đảo.
*B. Mã độc được kích hoạt để khai thác một lỗ hổng trên máy nạn nhân.
C. Kẻ tấn công thu thập địa chỉ email của nhân viên.
D. Kẻ tấn công xóa dấu vết khỏi hệ thống.

Câu 22. Việc đánh giá rủi ro (Risk Assessment) bao gồm các bước nào sau đây?
A. Chỉ cài đặt phần mềm diệt virus.
*B. Xác định tài sản, xác định mối đe dọa và lỗ hổng, sau đó phân tích tác động.
C. Chỉ sao lưu dữ liệu.
D. Chỉ cập nhật các bản vá lỗi.

Câu 23. Khi một quản trị viên hệ thống giữ nguyên mật khẩu mặc định của nhà sản xuất trên một thiết bị mạng, đây là loại lỗ hổng nào?
A. Lỗ hổng zero-day.
B. Lỗi lập trình.
*C. Cấu hình yếu kém (Weak Configuration).
D. Tấn công vật lý.

Câu 24. Tấn công từ chối dịch vụ (Denial of Service - DoS) ảnh hưởng trực tiếp đến thuộc tính nào của tam giác CIA?
A. Tính bảo mật (Confidentiality)
B. Tính toàn vẹn (Integrity)
*C. Tính sẵn sàng (Availability)
D. Tính chống chối bỏ (Non-repudiation)

Câu 25. "Ngăn chặn việc một cá nhân từ chối hành động mà họ đã thực hiện" là định nghĩa của khái niệm nào?
A. Ủy quyền (Authorization)
*B. Chống chối bỏ (Non-repudiation)
C. Kiểm soát truy cập (Access Control)
D. Toàn vẹn dữ liệu (Data Integrity)

Câu 26. Trong một cuộc tấn công, hành động sử dụng các công cụ như nmap hay ping sweep để xác định các máy chủ đang hoạt động và các cổng đang mở thuộc giai đoạn nào?
A. Thăm dò (Reconnaissance)
*B. Quét (Scanning)
C. Giành quyền truy cập (Gaining Access)
D. Leo thang đặc quyền (Privilege Escalation)

Câu 27. Việc đảm bảo rằng người dùng được ủy quyền có thể truy cập thông tin và tài nguyên mạng khi cần thiết thuộc về mục tiêu nào sau đây?
A. Tính toàn vẹn (Integrity)
B. Tính bảo mật (Confidentiality)
C. Tính xác thực (Authentication)
*D. Tính sẵn sàng (Availability)

Câu 28. Lỗ hổng bảo mật do người dùng cuối gây ra chủ yếu do đâu?
*A. Sử dụng mật khẩu yếu
B. Phần cứng lỗi
C. Đường truyền mạng không ổn định
D. Cập nhật phần mềm thường xuyên

Câu 29. Lỗ hổng nào cho phép kẻ tấn công có thể đọc, sửa đổi hoặc xóa các tệp tin tùy ý trên máy chủ web do cấu hình sai quyền truy cập?
A. SQL Injection
B. Cross-Site Scripting (XSS)
*C. Path Traversal (Directory Traversal)
D. Denial of Service (DoS)

Câu 30. Mục tiêu của giai đoạn "Leo thang đặc quyền" (Privilege Escalation) là gì?
A. Truy cập vào mạng nội bộ từ bên ngoài.
*B. Giành được quyền hạn cao hơn (ví dụ: từ người dùng thường lên quản trị viên).
C. Lây lan sang các máy tính khác trong cùng mạng.
D. Gửi dữ liệu bị đánh cắp về máy chủ của kẻ tấn công.

Câu 31. Một mối đe dọa (threat) trong an toàn mạng được định nghĩa là gì?
A. Một điểm yếu trong hệ thống có thể bị khai thác.
*B. Một khả năng hoặc nguyên nhân tiềm tàng có thể gây hại cho hệ thống.
C. Một cuộc tấn công đã xảy ra thành công.
D. Một biện pháp được áp dụng để bảo vệ tài sản.

Câu 32. Thuộc tính nào của an toàn mạng đảm bảo rằng thông tin không bị thay đổi bởi những người không được phép?
A. Tính bảo mật (Confidentiality)
*B. Tính toàn vẹn (Integrity)
C. Tính sẵn sàng (Availability)
D. Tính chống chối bỏ (Non-repudiation)

Câu 33. Việc phân loại dữ liệu (Data Classification) theo các mức như "Công khai", "Nội bộ", "Mật" nhằm mục đích gì?
A. Tăng tốc độ truy cập dữ liệu.
*B. Áp dụng các biện pháp kiểm soát bảo mật phù hợp với giá trị của dữ liệu.
C. Giảm dung lượng lưu trữ.
D. Tuân thủ quy định về sao lưu.

Câu 34. Đâu là ví dụ về một mối đe dọa vô tình (unintentional threat)?
A. Tin tặc cố gắng đánh cắp dữ liệu.
B. Virus máy tính lây lan qua email.
*C. Nhân viên vô tình xóa một tệp tin quan trọng.
D. Một cuộc tấn công lừa đảo có chủ đích.

Câu 35. Trong quy trình tấn công mạng, bước nào thường là giai đoạn đầu tiên của hacker?
*A. Trinh sát
B. Gaining truy cập
C. Duy trì truy cập
D. Dò tìm (Scanning)

Câu 36. Mô hình "Cyber Kill Chain" mô tả các giai đoạn của một cuộc tấn công mạng. Giai đoạn "Weaponization" (Vũ khí hóa) có mục đích gì?
A. Gửi mã độc đến mục tiêu.
*B. Tạo ra một mã độc (malware) hoặc công cụ tấn công.
C. Cài đặt mã độc lên hệ thống nạn nhân.
D. Thu thập thông tin về mục tiêu.

Câu 37. Giai đoạn đầu tiên trong một quy trình tấn công mạng điển hình là gì?
A. Giành quyền truy cập (Gaining Access)
*B. Dò quét và thu thập thông tin (Reconnaissance & Scanning)
C. Duy trì quyền truy cập (Maintaining Access)
D. Xóa dấu vết (Covering Tracks)

Câu 38. Mức an toàn nào dưới đây đề cập đến việc bảo vệ cơ sở hạ tầng và dữ liệu khỏi các cuộc tấn công?
*A. An ninh mạng
B. An toàn dữ liệu
C. An ninh vật lý
D. An toàn ứng dụng

Câu 39. "Ủy quyền" (Authorization) trong an toàn mạng có nghĩa là gì?
A. Ghi lại nhật ký hoạt động của người dùng.
*B. Cấp quyền truy cập tài nguyên cho một thực thể đã được xác thực.
C. Chứng minh danh tính của người dùng.
D. Ngăn chặn người dùng từ chối hành động đã thực hiện.

Câu 40. Đâu là một ví dụ của giai đoạn "Reconnaissance" (Thăm dò)?
A. Chạy một mã khai thác lỗ hổng.
B. Cài đặt keylogger.
*C. Tìm kiếm thông tin về công ty mục tiêu trên mạng xã hội và website của họ.
D. Mã hóa dữ liệu của nạn nhân để đòi tiền chuộc.
                `
            },
            {
                id: "attt_c1_de2",
                title: "Bài 01 (Đề 2): Chương 1 - Tổng quan về an toàn mạng",
                data: `
Câu 1. Hệ thống phát hiện và ngăn chặn xâm nhập (IDPS - Intrusion Detection and Prevention System) thuộc lớp bảo vệ nào trong kiến trúc an ninh mạng?
A. Lớp vật lý (Physical Layer)
*B. Lớp mạng (Network Layer)
C. Lớp ứng dụng (Application Layer)
D. Lớp chính sách và quy trình (Policies & Procedures Layer)

Câu 2. Khi một quản trị viên hệ thống giữ nguyên mật khẩu mặc định của nhà sản xuất trên một thiết bị mạng, đây là loại lỗ hổng nào?
A. Lỗ hổng zero-day.
B. Lỗi lập trình.
*C. Cấu hình yếu kém (Weak Configuration).
D. Tấn công vật lý.

Câu 3. Trong quy trình tấn công mạng, bước nào thường là giai đoạn đầu tiên của hacker?
*A. Trinh sát
B. Gaining truy cập
C. Duy trì truy cập
D. Dò tìm (Scanning)

Câu 4. Trong một cuộc tấn công, hành động sử dụng các công cụ như nmap hay ping sweep để xác định các máy chủ đang hoạt động và các cổng đang mở thuộc giai đoạn nào?
A. Thăm dò (Reconnaissance)
*B. Quét (Scanning)
C. Giành quyền truy cập (Gaining Access)
D. Leo thang đặc quyền (Privilege Escalation)

Câu 5. Việc đánh giá rủi ro (Risk Assessment) bao gồm các bước nào sau đây?
A. Chỉ cài đặt phần mềm diệt virus.
*B. Xác định tài sản, xác định mối đe dọa và lỗ hổng, sau đó phân tích tác động.
C. Chỉ sao lưu dữ liệu.
D. Chỉ cập nhật các bản vá lỗi.

Câu 6. Kiểm soát truy cập dựa trên vai trò (Role-Based Access Control - RBAC) hoạt động như thế nào?
A. Cấp quyền truy cập dựa trên địa chỉ IP của người dùng.
*B. Cấp quyền truy cập dựa trên chức năng, vị trí công việc của người dùng trong tổ chức.
C. Cấp quyền truy cập cho tất cả mọi người.
D. Cấp quyền truy cập dựa trên thời gian trong ngày.

Câu 7. Tấn công từ chối dịch vụ (Denial of Service - DoS) ảnh hưởng trực tiếp đến thuộc tính nào của tam giác CIA?
A. Tính bảo mật (Confidentiality)
B. Tính toàn vẹn (Integrity)
*C. Tính sẵn sàng (Availability)
D. Tính chống chối bỏ (Non-repudiation)

Câu 8. Lỗ hổng bảo mật do người dùng cuối gây ra chủ yếu do đâu?
*A. Sử dụng mật khẩu yếu
B. Phần cứng lỗi
C. Đường truyền mạng không ổn định
D. Cập nhật phần mềm thường xuyên

Câu 9. Mục đích chính của giai đoạn "Covering Tracks" (Xóa dấu vết) là gì?
A. Lấy cắp dữ liệu từ hệ thống.
B. Cài đặt backdoor để truy cập lại sau này.
*C. Xóa các file log và che giấu sự hiện diện của kẻ tấn công.
D. Khai thác một lỗ hổng cụ thể.

Câu 10. Việc không cập nhật các bản vá bảo mật cho hệ điều hành và phần mềm sẽ tạo ra loại lỗ hổng nào?
A. Lỗ hổng zero-day.
*B. Lỗ hổng đã biết nhưng chưa được vá (Unpatched known vulnerability).
C. Lỗ hổng cấu hình.
D. Lỗ hổng vật lý.

Câu 11. Một mối đe dọa (threat) trong an toàn mạng được định nghĩa là gì?
A. Một điểm yếu trong hệ thống có thể bị khai thác.
*B. Một khả năng hoặc nguyên nhân tiềm tàng có thể gây hại cho hệ thống.
C. Một cuộc tấn công đã xảy ra thành công.
D. Một biện pháp được áp dụng để bảo vệ tài sản.

Câu 12. Mức an toàn bảo mật nào đảm bảo rằng dữ liệu chỉ được truy cập bởi những người được phép và không bị thay đổi khi chưa được cấp phép?
*A. An toàn dữ liệu
B. An ninh mạng
C. An ninh vật lý
D. An toàn ứng dụng

Câu 13. Mô hình "Cyber Kill Chain" mô tả các giai đoạn của một cuộc tấn công mạng. Giai đoạn "Weaponization" (Vũ khí hóa) có mục đích gì?
A. Gửi mã độc đến mục tiêu.
*B. Tạo ra một mã độc (malware) hoặc công cụ tấn công.
C. Cài đặt mã độc lên hệ thống nạn nhân.
D. Thu thập thông tin về mục tiêu.

Câu 14. "Ủy quyền" (Authorization) trong an toàn mạng có nghĩa là gì?
A. Ghi lại nhật ký hoạt động của người dùng.
*B. Cấp quyền truy cập tài nguyên cho một thực thể đã được xác thực.
C. Chứng minh danh tính của người dùng.
D. Ngăn chặn người dùng từ chối hành động đã thực hiện.

Câu 15. Giai đoạn đầu tiên trong một quy trình tấn công mạng điển hình là gì?
A. Giành quyền truy cập (Gaining Access)
*B. Dò quét và thu thập thông tin (Reconnaissance & Scanning)
C. Duy trì quyền truy cập (Maintaining Access)
D. Xóa dấu vết (Covering Tracks)

Câu 16. Thuộc tính nào của an toàn mạng đảm bảo rằng thông tin không bị thay đổi bởi những người không được phép?
A. Tính bảo mật (Confidentiality)
*B. Tính toàn vẹn (Integrity)
C. Tính sẵn sàng (Availability)
D. Tính chống chối bỏ (Non-repudiation)

Câu 17. Đâu là ví dụ về một mối đe dọa vô tình (unintentional threat)?
A. Tin tặc cố gắng đánh cắp dữ liệu.
B. Virus máy tính lây lan qua email.
*C. Nhân viên vô tình xóa một tệp tin quan trọng.
D. Một cuộc tấn công lừa đảo có chủ đích.

Câu 18. Sự khác biệt cơ bản giữa "lỗ hổng" (vulnerability) và "rủi ro" (risk) là gì?
A. Chúng là hai thuật ngữ đồng nghĩa.
B. Lỗ hổng là cuộc tấn công, còn rủi ro là điểm yếu.
*C. Lỗ hổng là một điểm yếu, còn rủi ro là khả năng lỗ hổng đó bị khai thác và gây ra thiệt hại.
D. Lỗ hổng chỉ tồn tại trên phần mềm, còn rủi ro tồn tại trên phần cứng.

Câu 19. Mục tiêu của giai đoạn "Leo thang đặc quyền" (Privilege Escalation) là gì?
A. Truy cập vào mạng nội bộ từ bên ngoài.
*B. Giành được quyền hạn cao hơn (ví dụ: từ người dùng thường lên quản trị viên).
C. Lây lan sang các máy tính khác trong cùng mạng.
D. Gửi dữ liệu bị đánh cắp về máy chủ của kẻ tấn công.

Câu 20. Mức an toàn nào dưới đây đề cập đến việc bảo vệ cơ sở hạ tầng và dữ liệu khỏi các cuộc tấn công?
*A. An ninh mạng
B. An toàn dữ liệu
C. An ninh vật lý
D. An toàn ứng dụng

Câu 21. Ba mục tiêu cốt lõi của an toàn thông tin, thường được gọi là tam giác CIA, bao gồm những gì?
*A. Bảo mật, Toàn vẹn, Sẵn sàng (Confidentiality, Integrity, Availability)
B. Kiểm soát, Nhận dạng, Ủy quyền (Control, Identity, Authorization)
C. Mã hóa, Toàn vẹn, Xác thực (Cryptography, Integrity, Authentication)
D. Bảo mật, Chính xác, Sẵn sàng (Confidentiality, Accuracy, Availability)

Câu 22. "Ngăn chặn việc một cá nhân từ chối hành động mà họ đã thực hiện" là định nghĩa của khái niệm nào?
A. Ủy quyền (Authorization)
*B. Chống chối bỏ (Non-repudiation)
C. Kiểm soát truy cập (Access Control)
D. Toàn vẹn dữ liệu (Data Integrity)

Câu 23. Việc phân loại dữ liệu (Data Classification) theo các mức như "Công khai", "Nội bộ", "Mật" nhằm mục đích gì?
A. Tăng tốc độ truy cập dữ liệu.
*B. Áp dụng các biện pháp kiểm soát bảo mật phù hợp với giá trị của dữ liệu.
C. Giảm dung lượng lưu trữ.
D. Tuân thủ quy định về sao lưu.

Câu 24. Mức bảo mật nào được xem là cơ bản nhất, thường chỉ bao gồm các biện pháp như đặt mật khẩu cho người dùng và cập nhật phần mềm?
A. Mức cao (High)
B. Mức trung bình (Medium)
*C. Mức thấp (Low)
D. Mức chuyên dụng (Dedicated)

Câu 25. Trong mô hình Cyber Kill Chain, giai đoạn "Exploitation" (Khai thác) xảy ra khi nào?
A. Kẻ tấn công gửi email lừa đảo.
*B. Mã độc được kích hoạt để khai thác một lỗ hổng trên máy nạn nhân.
C. Kẻ tấn công thu thập địa chỉ email của nhân viên.
D. Kẻ tấn công xóa dấu vết khỏi hệ thống.

Câu 26. Kỹ thuật tấn công "Phishing" (lừa đảo) khai thác chủ yếu loại lỗ hổng nào?
A. Lỗ hổng phần mềm.
*B. Yếu tố con người.
C. Lỗ hổng phần cứng.
D. Lỗ hổng trong hệ điều hành.

Câu 27. Theo mô hình bảo mật theo chiều sâu (Defense in Depth), hệ thống được bảo vệ bởi:
A. Chỉ một lớp phòng thủ rất mạnh.
*B. Nhiều lớp phòng thủ khác nhau.
C. Chủ yếu dựa vào tường lửa (Firewall).
D. Chỉ dựa vào phần mềm diệt virus.

Câu 28. Lỗi "Buffer Overflow" (tràn bộ đệm) xảy ra khi nào?
A. Người dùng nhập sai mật khẩu quá nhiều lần.
*B. Một chương trình ghi dữ liệu vượt quá giới hạn của bộ đệm được cấp phát, làm ghi đè lên vùng nhớ liền kề.
C. Hệ thống hết dung lượng lưu trữ trên đĩa cứng.
D. Kết nối mạng bị quá tải.

Câu 29. Hành động xác minh danh tính của một người dùng, hệ thống hoặc thực thể được gọi là gì?
A. Ủy quyền (Authorization)
*B. Xác thực (Authentication)
C. Kiểm toán (Auditing)
D. Mã hóa (Encryption)

Câu 30. Việc đảm bảo rằng người dùng được ủy quyền có thể truy cập thông tin và tài nguyên mạng khi cần thiết thuộc về mục tiêu nào sau đây?
A. Tính toàn vẹn (Integrity)
B. Tính bảo mật (Confidentiality)
C. Tính xác thực (Authentication)
*D. Tính sẵn sàng (Availability)

Câu 31. Lỗ hổng "SQL Injection" là một ví dụ về loại lỗ hổng nào?
A. Lỗ hổng phần cứng.
B. Lỗ hổng trong thiết kế giao thức mạng.
*C. Lỗ hổng phần mềm ứng dụng web.
D. Lỗ hổng do cấu hình sai.

Câu 32. Một lỗ hổng bảo mật chưa được nhà cung cấp biết đến hoặc chưa có bản vá được gọi là gì?
A. Lỗ hổng đã biết (Known Vulnerability)
*B. Lỗ hổng zero-day
C. Lỗ hổng con người (Human Vulnerability)
D. Lỗ hổng vật lý (Physical Vulnerability)

Câu 33. Một "backdoor" (cửa hậu) được cài đặt trên hệ thống mục tiêu phục vụ cho giai đoạn nào của cuộc tấn công?
A. Dò quét (Scanning)
B. Giành quyền truy cập ban đầu (Initial Access)
*C. Duy trì quyền truy cập (Maintaining Access)
D. Xóa dấu vết (Covering Tracks)

Câu 34. Đâu là một ví dụ của giai đoạn "Reconnaissance" (Thăm dò)?
A. Chạy một mã khai thác lỗ hổng.
B. Cài đặt keylogger.
*C. Tìm kiếm thông tin về công ty mục tiêu trên mạng xã hội và website của họ.
D. Mã hóa dữ liệu của nạn nhân để đòi tiền chuộc.

Câu 35. Tiêu chuẩn nào sau đây là một hệ thống quản lý an toàn thông tin (ISMS) được công nhận rộng rãi trên toàn thế giới?
A. HTTP
B. TCP/IP
*C. ISO/IEC 27001
D. IEEE 802.11

Câu 36. Biện pháp nào sau đây thuộc về an ninh vật lý (Physical Security)?
A. Cài đặt tường lửa.
B. Mã hóa ổ cứng.
*C. Lắp đặt camera giám sát và khóa cửa phòng máy chủ.
D. Sử dụng xác thực hai yếu tố.

Câu 37. Chính sách bảo mật (Security Policy) trong một tổ chức đóng vai trò gì?
A. Là một phần mềm diệt virus.
*B. Là một tài liệu cấp cao định hướng các quy tắc, trách nhiệm và thực tiễn về an toàn thông tin.
C. Là một thiết bị tường lửa.
D. Là một quy trình sao lưu dữ liệu hàng ngày.

Câu 38. Lỗ hổng nào cho phép kẻ tấn công có thể đọc, sửa đổi hoặc xóa các tệp tin tùy ý trên máy chủ web do cấu hình sai quyền truy cập?
A. SQL Injection
B. Cross-Site Scripting (XSS)
*C. Path Traversal (Directory Traversal)
D. Denial of Service (DoS)

Câu 39. Lỗ hổng "Cross-Site Scripting" (XSS) cho phép kẻ tấn công làm gì?
A. Thực thi các lệnh SQL tùy ý trên cơ sở dữ liệu.
*B. Chèn mã độc (thường là JavaScript) vào các trang web mà người dùng khác sẽ xem.
C. Gây tràn bộ đệm của ứng dụng.
D. Truy cập trái phép vào các tệp tin trên máy chủ.

Câu 40. Kỹ thuật xã hội (Social Engineering) là phương pháp tấn công dựa vào việc khai thác yếu tố nào?
A. Lỗ hổng phần mềm.
B. Lỗi cấu hình hệ thống.
*C. Tâm lý và sự tin tưởng của con người.
D. Giao thức mạng không an toàn.
                `
            },
            {
                id: "bai_02",
                title: "Bài 02: Chương 1 - Tổng quan về an toàn mạng (Phần 2)",
                data: `
Câu 1. Quyền truy cập nào cho phép ta lưu giữ một tập tin?
A. Sao chép
B. Hiệu chỉnh
*C. Ghi
D. Đọc

Câu 2. Chiều dài của mật khẩu mạnh cần phải đạt:
A. 3 đến 5 ký tự
B. 8 ký tự
*C. 12 đến 15 ký tự
D. 1 đến 3 ký tự

Câu 3. Kerberos là dịch vụ ủy thác
A. Xác thực X.509
B. Xác thực trên Web
C. Xác thực trên Server
*D. Xác thực trên các máy trạm với nhau

Câu 4. Hoạt động của virus có 4 giai đoạn
A. Lây nhiễm, tấn công, hủy diệt và tự hủy
*B. Nằm im, lây nhiễm, tàn phá và tự hủy
C. Nằm im, lây nhiễm, khởi sự và tàn phá
D. Lây nhiễm, khởi sự, tàn phát, kích hoạt lại

Câu 5. Các lỗ hổng bảo mật trên hệ thống là do
A. Bản thân hệ điều hành
B. Con người tạo ra
C. Dịch vụ cung cấp
*D. Tất cả đều đúng

Câu 6. Bảo mật trong Datamining yêu cầu
A. Dữ liệu không thể truy xuất cho công cộng
*B. Dữ liệu có thể truy xuất riêng phần
C. Dữ liệu phải được mã hóa
D. Dữ liệu có thể suy diễn

Câu 7. Các tập tin nào sau đây có khả năng chứa virus nhất?
A. bigpic.jpeg
B. note.txt
*C. picture.gif.exe
D. database.dat

Câu 8. Mức an toàn nào đảm bảo tính bí mật của dữ liệu và ngăn chặn truy cập trái phép từ người dùng không được ủy quyền?
A. An toàn ứng dụng
B. An ninh vật lý
*C. An toàn dữ liệu
D. An ninh mạng

Câu 9. Lỗ hổng bảo mật do người dùng cuối gây ra chủ yếu do đâu?
A. Phần cứng lỗi
B. Đường truyền mạng không ổn định
*C. Sử dụng mật khẩu yếu
D. Cập nhật phần mềm thường xuyên

Câu 10. Mức an toàn nào dưới đây đề cập đến việc bảo vệ cơ sở hạ tầng và dữ liệu khỏi các cuộc tấn công?
A. An toàn dữ liệu
*B. An ninh mạng
C. An ninh vật lý
D. An toàn ứng dụng

Câu 11. Virus Macro chỉ có khả năng tấn công vào các file
A. MS.Excel, MS Word, MS.Outlook Mail
B. MS.Excel, MS Word, Yahoo Mail
*C. MS.Excel, MS Word, MS.Power Point
D. Tất cả các loại file

Câu 12. Trong quy trình tấn công mạng, bước nào thường là giai đoạn đầu tiên của hacker?
A. Gaining truy cập
B. Duy trì truy cập
C. Dò tìm (Scanning)
*D. Trinh sát

Câu 13. Mức an toàn bảo mật nào đảm bảo rằng dữ liệu chỉ được truy cập bởi những người được phép và không bị thay đổi khi chưa được cấp phép?
A. An ninh mạng
*B. An toàn dữ liệu
C. An ninh vật lý
D. An toàn ứng dụng

Câu 14. Các lỗ hổng bảo mật trên hệ thống là do?
A. Dịch vụ cung cấp
B. Bản thân hệ điều hành
*C. Dịch vụ cung cấp, bản thân hệ điều hành và con người tạo ra
D. Con người tạo ra

Câu 15. Công nghệ nào sau đây không nằm trong phạm vi chức năng của một Firewall?
A. Kiểm tra gói tin (Packet Inspection)
B. Kiểm soát truy cập (Access Control)
*C. Phân giải tên miền (DNS)
D. Mã hóa dữ liệu (Data Encryption)

Câu 16. Mục tiêu chính của giai đoạn "Duy trì quyền truy cập" (Maintaining Access) trong một cuộc tấn công mạng là gì?
A. Xóa sạch nhật ký hệ thống để khỏi bị phát hiện.
B. Thu thập thông tin về mục tiêu từ các nguồn công khai.
C. Khai thác lỗ hổng để xâm nhập lần đầu vào hệ thống.
*D. Tạo cửa hậu (backdoor) và rootkit để đảm bảo có thể quay lại hệ thống sau này.

Câu 17. Khi một tin tặc gửi email giả mạo ngân hàng để yêu cầu nạn nhân cung cấp mật khẩu và mã OTP, đây là ví dụ của hình thức tấn công nào?
A. Tấn công DDoS.
B. Tấn công SQL Injection.
*C. Tấn công Phishing (lừa đảo).
D. Tấn công tràn bộ đệm (Buffer Overflow).

Câu 18. Công cụ nào sau đây thường được sử dụng trong giai đoạn Quét (Scanning) để phát hiện các cổng đang mở và các dịch vụ đang chạy trên một hệ thống mạng?
A. Metasploit
*B. Nmap
C. Hydra
D. SQLmap

Câu 19. Loại nhật ký nào có thể cung cấp chi tiết về các yêu cầu đối với các tệp cụ thể trên hệ thống:
A. Event log
*B. Access log
C. Audit log
D. SysFile log

Câu 20. Chức năng chính của Virus là
A. Sống ký sinh và lây nhiễm
B. Tự phát triển độc lập và lây nhiễm
*C. Lây nhiễm và sinh sản
D. Tất cả đều đúng

Câu 21. Audit (kiểm tra, kiểm toán) dùng trong an toàn CSDL nhằm:
A. Cấp quyền ai có thể làm gì (authorization)?
*B. Ai đã làm gì?
C. Xác thực đó là ai (authentication)?
D. Tất cả các mục

Câu 22. Chứng nhận chứa:
A. Thông tin thuật toán tạo mã khoá
B. Thuật toán tạo chữ ký
C. Chữ ký
*D. Tất cả đều đúng

Câu 23. Cái nào có thể được sử dụng để ẩn thông tin về mạng nội bộ ngoại trừ:
A. Subnetting
B. Proxy server
*C. Protocol analyzer
D. Network address translation (NAT)

Câu 24. Theo bạn, đâu là những đặc trưng cơ bản của chữ ký số?
*A. Xác thực, toàn vẹn, bí mật, chống chối bỏ
B. Xác thực, định danh, toàn vẹn, chống chối bỏ
C. Xác thực, an toàn, bí mật, chống chối bỏ
D. Xác thực, định danh, bí mật, chống chối bỏ

Câu 25. Nếu một nhóm người dùng phải được tách ra khỏi những người dùng khác, thiết kế mạng nào bảo mật nhất?
A. Kết nối chúng với các thiết bị switch và router khác
B. Sử dụng mặt nạ mạng con
*C. Sử dụng VLAN
D. Không thể tách người dùng trên mạng

Câu 26. Giai đoạn đầu tiên trong quy trình tấn công mạng, nhằm thu thập thông tin về mục tiêu như địa chỉ IP, tên miền, được gọi là gì?
A. Quét (Scanning)
B. Tấn công truy cập (Gaining Access)
C. Duy trì quyền truy cập (Maintaining Access)
*D. Trinh sát (Reconnaissance)

Câu 27. Mức an toàn bảo mật nào chịu trách nhiệm đảm bảo rằng thiết bị vật lý như máy chủ và thiết bị mạng được bảo vệ khỏi truy cập trái phép?
A. An toàn ứng dụng
*B. An ninh vật lý
C. An ninh mạng
D. An toàn dữ liệu

Câu 28. Điều nào sau đây KHÔNG phải là mối quan tâm về bảo mật của môi trường ảo hóa?
A. Các máy ảo phải được bảo vệ khỏi cả thế giới bên ngoài và cũng từ các máy ảo khác trên cùng một máy tính vật lý
B. Các thiết bị bảo mật vật lý không phải lúc nào cũng được thiết kế để bảo vệ các hệ thống ảo
*C. Các máy chủ ảo rẻ hơn các máy chủ vật lý của chúng
D. Di chuyển trực tiếp có thể di chuyển ngay lập tức một máy chủ ảo hóa sang một trình siêu giám sát khác

Câu 29. Mô tả nào sau đây là mô tả chính xác một hacker mũ trắng?
A. Cựu Hacker mũ đen
B. Cựu Hacker mũ xám
*C. Chuyên gia bảo mật
D. Hacker hiểm độc

Câu 30. Mật khẩu nào sau đây là mật khẩu khó phá nhất đối với một hacker?
A. reception
B. password83
*C. !$aLtNb83
D. LaT3r
                `
            },
            {
                id: "bai_03",
                title: "Bài 03: Chương 2 - Các hình thức tấn công mạng phổ biến",
                data: `
Câu 1. Công cụ nào sau đây thường được sử dụng để thực hiện tấn công truy cập?
A. Nessus
B. Cain and Abel
*C. Hydra
D. Metasploit

Câu 2. Tấn công truy cập mục tiêu nhắm vào nội dung nào sau đây?
A. Hệ thống mạng
B. Dữ liệu cá nhân
*C. Tài khoản người dùng
D. Phần cứng máy tính

Câu 3. Phương pháp nào sau đây được sử dụng để tấn công vào các lỗ hổng trong quản lý phiên (session management) của một ứng dụng web?
A. SQL Injection
B. Cross-Site Scripting (XSS)
*C. Session Fixation
D. Cross-Site Request Forgery (CSRF)

Câu 4. Tiện ích nào sau đây là một phương thức bảo mật truy cập từ xa tốt hơn telnet?
A. SSL
*B. SSH
C. IPSec
D. VPN

Câu 5. Đâu là biện pháp phòng ngừa hiệu quả nhất để đối phó với tấn công truy cập?
*A. Cập nhật hệ thống đều đặn
B. Sử dụng phần mềm diệt virus
C. Sử dụng mật khẩu mạnh
D. Vô hiệu hóa tất cả các tài khoản người dùng

Câu 6. Cách nào sau đây KHÔNG phải là biện pháp hiệu quả để chống lại tấn công brute force?
A. Giới hạn số lần thử đăng nhập không thành công.
*B. Sử dụng mật khẩu mặc định cho các tài khoản.
C. Sử dụng xác thực hai yếu tố (2FA).
D. Áp dụng chính sách khóa tài khoản sau nhiều lần đăng nhập thất bại.

Câu 7. Trong các loại tấn công sau đây, loại nào sử dụng để lấy mật khẩu đã mã hóa?
A. Tấn công Birthday
*B. Tấn công Dictionary
C. Tấn công Denial of Service
D. Tấn công Man-in-the-middle

Câu 8. Loại tấn công thăm dò nào dưới đây thực hiện bằng cách gửi các gói tin ICMP Echo Request đến các địa chỉ IP trong một dải địa chỉ để xác định những máy tính đang hoạt động?
A. Traceroute
B. SYN Flood
*C. Ping Sweep
D. ARP Spoofing

Câu 9. Lỗ hổng bảo mật nào cho phép kẻ tấn công thực hiện các cuộc tấn công trung gian giữa người dùng và ứng dụng bằng cách can thiệp vào quá trình truyền thông giữa hai bên?
A. SQL Injection
B. Cross-Site Scripting (XSS)
*C. Man-in-the-Middle (MitM)
D. Remote Code Execution (RCE)

Câu 10. Kỹ thuật nào thường được sử dụng trong tấn công thăm dò?
*A. Scanning và Enumeration
B. Phishing
C. SQL Injection
D. Cross-Site Scripting (XSS)

Câu 11. Lỗ hổng bảo mật nào dựa trên việc kiểm tra dữ liệu không đúng cách vào bộ nhớ đệm của một ứng dụng và gây ra sự hoạt động không mong muốn?
A. Cross-Site Scripting (XSS)
*B. Buffer Overflow
C. SQL Injection
D. Phishing

Câu 12. Trong một cuộc tấn công Man-in-the-Middle (MITM), kẻ tấn công làm gì?
A. Sử dụng một chương trình độc hại để mã hóa dữ liệu trên mạng.
*B. Theo dõi và ghi lại thông tin truyền qua mạng giữa hai bên mà không bị phát hiện.
C. Giả mạo một trang web để lừa đảo người dùng nhập thông tin cá nhân.
D. Gửi một loạt các yêu cầu không hợp lệ để làm quá tải hệ thống.

Câu 13. Bước tiếp theo sau khi footprinting thường là gì?
A. Enumeration
B. System hacking
*C. Scanning
D. Active information gathering

Câu 14. Tấn công thăm dò mạng thường được thực hiện với mục đích gì?
A. Phá hoại hệ thống
B. Lấy cắp dữ liệu cá nhân
*C. Tìm kiếm lỗ hổng bảo mật
D. Khoá hệ thống

Câu 15. Tấn công hệ thống tên miền (Domain Name System - DNS) nào thay thế một địa chỉ IP gian lận cho tên một biểu tượng:
A. DNS replay
B. DNS masking
*C. DNS poisoning
D. DNS forwarding

Câu 16. Trong tấn công thăm dò mạng, công cụ nào được sử dụng để quét cổng (port scanning) trên một máy chủ hoặc mạng LAN?
A. Wireshark
*B. Nmap
C. Metasploit
D. Nessus

Câu 17. Mục nào KHÔNG là tấn công chủ động:
A. Tấn công từ chối dịch vụ
B. Tấn công replay
*C. Tấn công nghe lén (eavesdropping)
D. Tấn công giả mạo (masquerade)

Câu 18. Để bảo vệ một hệ thống mạng, việc sử dụng một chương trình chống virus là một biện pháp bảo mật hiệu quả ở tầng nào trong mô hình OSI?
A. Tầng Network
*B. Tầng Application
C. Tầng Transport
D. Tầng Data Link

Câu 19. Công cụ nào sau đây được sử dụng để thực hiện footprinting mà không bị phát hiện?
A. Traceroute
*B. Whois search
C. Ping sweep
D. Host scanning

Câu 20. Tấn công thăm dò mạng thường bắt đầu từ giai đoạn nào sau đây?
A. Phân tích lỗ hổng
B. Xâm nhập vào hệ thống
*C. Thu thập thông tin
D. Kích hoạt lỗ hổng

Câu 21. Yếu tố nào sau đây làm cho tấn công brute force trở nên khó khăn hơn đối với kẻ tấn công?
A. Sử dụng mật khẩu ngắn và đơn giản.
B. Sử dụng cùng một mật khẩu cho nhiều tài khoản.
*C. Sử dụng mật khẩu dài và phức tạp.
D. Không thay đổi mật khẩu thường xuyên

Câu 22. Câu nào về network address translation (NAT) là đúng?
*A. Nó loại bỏ các địa chỉ riêng khi gói rời khỏi mạng
B. Nó có thể là trạng thái trạng thái hoặc không trạng thái
C. Nó thay thế địa chỉ MAC cho địa chỉ IP
D. Nó chỉ có thể được tìm thấy trên các bộ định tuyến lõi

Câu 23. Biện pháp bảo mật nào có thể giúp ngăn chặn tấn công brute force?
A. Tăng thời gian phản hồi của máy chủ.
*B. Sử dụng CAPTCHA để xác minh người dùng.
C. Sử dụng giao thức HTTP thay vì HTTPS.
D. Cho phép đăng nhập không giới hạn số lần thử.

Câu 24. Trong các cách thức tấn công RSA (Rivest-Shamir-Adleman), KHÔNG có:
*A. Tấn công lựa chọn mã bí mật
B. Tấn công thuật toán
C. Tấn công lỗ hổng phần mềm
D. Tấn công brute force

Câu 25. Bộ lọc địa chỉ MAC được định nghĩa như thế nào?
A. Ngăn chặn truy cập từ một địa chỉ MAC nhất định
B. Được phép truy cập đến một địa chỉ MAC nhất định
C. Tường lửa cá nhân
*D. Tất cả đều đúng

Câu 26. Các giao thức đường hầm nào sau đây chỉ làm việc trên các mạng IP?
A. IPX
B. L2TP
C. SSH
*D. PPTP

Câu 27. Phòng chống tấn công từ chối dịch vụ phân bố (DDOS):
A. Chỉ có thể dùng tường lửa
*B. Sử dụng firewall và các hệ thống phát hiện/ngăn chặn tấn công
C. Hiện nay đã có cách phòng chống hiệu quả
D. Cách hiệu quả duy nhất là lưu trữ và phục hồi (backup và restore)

Câu 28. Trong DAC (Discretionary Access Control), mô hình nào dùng cấu trúc đồ thị tĩnh và đồ thị động?
A. Mô hình truy cập CSDL đa mức
B. Mô hình ma trận truy cập
*C. Mô hình Take-grant
D. Mô hình Acten (Action. Entity)

Câu 29. Phương thức nào sau đây thường được sử dụng trong tấn công thăm dò mạng để xác định các máy chủ và thiết bị mạng đang hoạt động trên mạng?
A. SYN Flood
*B. Ping Sweep
C. DNS Spoofing
D. Phishing

Câu 30. Kỹ thuật tấn công phổ biến trên Web là
A. Tràn bộ đệm
*B. Chèn câu truy vấn SQL
C. Chiếm hữu phiên làm việc
D. Từ chối dịch vụ (DoS)

Câu 31. Chính sách tài khoản nào nên được thiết lập để ngăn chặn các cuộc tấn công ác ý vào tài khoản của user?
A. Ngày hết hạn tài khoản
B. Hạn chế thời gian
*C. Giới hạn số lần logon
D. Disable tài khoản không dùng đến

Câu 32. Tấn công truy cập là gì?
A. Tấn công vào hệ thống bằng cách thu thập thông tin từ các tài khoản truy cập hợp pháp.
*B. Tấn công vào hệ thống bằng cách tìm lỗ hổng bảo mật để xâm nhập trái phép.
C. Tấn công vào hệ thống bằng cách tạo ra một số lượng lớn yêu cầu truy cập giả mạo.
D. Tấn công vào hệ thống bằng cách phá hoại dữ liệu và thiết lập quyền truy cập không hợp lệ.

Câu 33. Một ví dụ điển hình của tấn công biến đổi thông tin là gì?
A. Phát tán mã độc ransomware để mã hóa dữ liệu.
B. Tấn công từ chối dịch vụ (DDoS) làm tê liệt hệ thống mạng.
*C. Thay đổi số liệu tài chính trong hệ thống kế toán để gian lận.
D. Sử dụng phishing để lừa đảo người dùng lấy thông tin cá nhân

Câu 34. Thiết bị nào dễ dàng nhất để kẻ tấn công tận dụng lợi thế để nắm bắt và phân tích các gói tin?
A. Switch
B. Router
*C. Hub
D. Load balancer

Câu 35. Giao thức nào an toàn nhất để chuyển tệp?
A. SCP
B. FTPS
*C. SFTP
D. FTP

Câu 36. Phương pháp nào sau đây thường được sử dụng trong tấn công truy cập bằng cách đoán mật khẩu?
A. Keylogging
B. Phishing
*C. Brute force
D. Man-in-the-middle

Câu 37. Trong mô hình OSI, lớp nào chịu trách nhiệm xác thực và mã hóa dữ liệu gửi đi và nhận được?
A. Lớp Network
B. Lớp Data Link
*C. Lớp Presentation
D. Lớp Application

Câu 38. Mục tiêu chính của tấn công biến đổi thông tin là gì?
A. Làm cho hệ thống không thể hoạt động được.
*B. Thay đổi thông tin nhằm gây rối hoặc lợi dụng thông tin cho mục đích xấu.
C. Đánh cắp dữ liệu từ hệ thống
D. Xóa toàn bộ dữ liệu trong hệ thống.

Câu 39. Tấn công brute force là gì?
A. Một phương pháp tấn công mạng bằng cách gửi hàng loạt yêu cầu không hợp lệ để làm sập máy chủ.
B. Một phương pháp tấn công bằng cách khai thác lỗ hổng phần mềm.
*C. Một kỹ thuật tấn công bằng cách thử tất cả các khả năng mật khẩu cho đến khi tìm được mật khẩu đúng.
D. Một kỹ thuật tấn công bằng cách đánh cắp thông tin từ người dùng thông qua email lừa đảo.

Câu 40. Phương thức nào sau đây không phải là một loại lỗ hổng bảo mật phổ biến trong các ứng dụng web?
A. LDAP Injection
*B. DNS Spoofing
C. XML External Entity (XXE) Injection
D. Insecure Direct Object References
                `
            },
{
                id: "bai_04",
                title: "Bài 04: Chương 3 - An toàn dịch vụ Web (Phần 1)",
                data: `
Câu 1. Điều gì sẽ xảy ra nếu một trình duyệt gặp phải chứng chỉ SSL không hợp lệ?
A. Trình duyệt sẽ tự động sửa chữa chứng chỉ
B. Trình duyệt sẽ bỏ qua và tiếp tục tải trang web như bình thường
C. Trình duyệt sẽ gửi chứng chỉ đến trình duyệt
*D. Trình duyệt sẽ thông báo lỗi cho người dùng và có thể chặn truy cập vào trang web đó

Câu 2. HTTPS sử dụng giao thức nào để mã hóa dữ liệu?
A. FTP
*B. SSL/TLS
C. SNMP
D. SMTP

Câu 3. Hậu quả tiềm tàng của một cuộc tấn công SQL Injection là gì?
A. Thay đổi hoặc xóa dữ liệu trong cơ sở dữ liệu.
B. Chiếm quyền điều khiển máy chủ cơ sở dữ liệu.
*C. Tất cả các hậu quả.
D. Rò rỉ thông tin nhạy cảm từ cơ sở dữ liệu.

Câu 4. Chứng chỉ số trong HTTPS được cấp bởi ai?
A. Nhà cung cấp dịch vụ Internet (ISP)
*B. Cơ quan chứng nhận (CA)
C. Máy chủ web
D. Trình duyệt web

Câu 5. Chứng chỉ số (digital certificate) trong HTTPS có chức năng gì?
A. Xác minh danh tính của máy chủ.
B. Đảm bảo tính toàn vẹn của dữ liệu.
*C. Tất cả các chức năng
D. Mã hóa dữ liệu truyền tải.

Câu 6. Tường lửa có thể ngăn chặn loại tấn công nào sau đây?
A. SQL Injection
B. Tấn công từ chối dịch vụ (DoS)
C. XSS
*D. Tất cả các loại trên

Câu 7. Hai giao thức sử dụng trong IPSec (IPSec Protocol) gồm
A. TCP/IP, IP Encapsulating Security Payload
B. IP Authentication Header, TCP/IP
*C. IP Authentication Header, IP Encapsulating Security Payload
D. Tất cả đều đúng

Câu 8. Cách nào sau đây giúp ngăn chặn SQL Injection?
A. Sử dụng mã hóa AES cho dữ liệu
B. Tắt tính năng cookie trên trình duyệt
C. Sử dụng giao thức HTTP thay vì HTTPS
*D. Sử dụng truy vấn tham số hóa (prepared statements)

Câu 9. Giao thức SSL/TLS có thể bị tấn công bởi hình thức nào dưới đây?
A. SQL Injection
*B. Man-in-the-Middle (MITM)
C. Cross-Site Scripting (XSS)
D. Distributed Denial of Service (DDoS)

Câu 10. Giao thức HTTPS sử dụng giao thức nào ở tầng vận chuyển?
A. UDP
*B. TCP
C. ICMP
D. FTP

Câu 11. Tính năng bảo mật nào KHÔNG cung cấp tính năng cân bằng tải?
A. Ẩn các trang HTTP lỗi
B. Xóa tiêu đề định danh máy chủ khỏi HTTP responses
*C. Tấn công từ chối dịch vụ (DoS)
D. Lọc các gói dựa trên cài đặt giao thức

Câu 12. Để phát hiện SQL Injection, quản trị viên có thể kiểm tra gì?
A. Tốc độ tải trang web
B. Kích thước tệp HTML
C. Cấu hình trình duyệt
*D. Nhật ký truy cập máy chủ (log)

Câu 13. Cấu hình tường lửa không đúng có thể dẫn đến hậu quả gì?
A. Tăng tốc độ mạng
B. Giảm kích thước gói tin
*C. Chặn toàn bộ lưu lượng hợp lệ
D. Cải thiện hiệu suất cơ sở dữ liệu

Câu 14. Biện pháp nào dưới đây giúp ngăn chặn XSS?
A. Sử dụng hàm eval() để thực thi mã JavaScript.
B. Tăng tốc độ tải trang web.
C. Sử dụng mật khẩu mạnh cho người dùng.
*D. Xác thực và lọc đầu vào từ người dùng.

Câu 15. Sự khác biệt chính giữa HTTP và HTTPS là gì?
A. HTTPS sử dụng cổng 80, HTTP sử dụng cổng 443
*B. HTTPS mã hóa dữ liệu bằng SSL/TLS, HTTP thì không
C. HTTP chỉ hỗ trợ văn bản, HTTPS hỗ trợ đa phương tiện
D. HTTPS không hỗ trợ cookie

Câu 16. Quy trình bắt tay (handshake) của TLS nhằm mục đích gì?
A. Nén dữ liệu truyền đi
B. Kiểm tra tốc độ mạng
*C. Xác thực danh tính và thiết lập khóa mã hóa
D. Gửi cookie đến trình duyệt

Câu 17. XSS có thể gây ra hậu quả nào?
A. Thay đổi hoặc xóa dữ liệu trong cơ sở dữ liệu.
B. Làm chậm tốc độ mạng.
*C. Đánh cắp cookie và thông tin phiên (session).
D. Giảm kích thước trang web

Câu 18. Phương pháp nào dưới đây không phải là một biện pháp phòng chống SQL Injection?
A. Sử dụng framework ORM (Object-Relational Mapping).
B. Sử dụng hàm mysqli_real_escape_string() trong PHP.
C. Xác thực và lọc đầu vào từ người dùng.
*D. Sử dụng hàm eval() trong PHP để thực thi truy vấn SQL.

Câu 19. Công cụ nào thường được sử dụng để kiểm tra lỗ hổng XSS?
A. Wireshark
*B. Burp Suite
C. MySQL Workbench
D. Apache JMeter

Câu 20. Chức năng nào mà bộ lọc nội dung Internet KHÔNG thực hiện?
A. Lọc URL
B. Kiểm tra phần mềm độc hại
*C. Phát hiện xâm nhập
D. Kiểm tra nội dung

Câu 21. Giao thức TLS hoạt động ở tầng nào trong mô hình OSI?
A. Tầng liên kết dữ liệu
*B. Tầng vận chuyển
C. Tầng ứng dụng
D. Tầng mạng

Câu 22. Tường lửa (Firewall) hoạt động chủ yếu ở tầng nào trong mô hình OSI?
A. Tầng ứng dụng
*B. Tầng mạng và tầng vận chuyển
C. Tầng liên kết dữ liệu
D. Tầng vật lý

Câu 23. Tường lửa (Firewall) là gì?
A. Một phần mềm bảo vệ máy tính khỏi virus.
*B. Một hệ thống an ninh mạng kiểm soát và giám sát lưu lượng mạng ra vào.
C. Một công cụ để tối ưu hóa hiệu suất mạng.
D. Một thiết bị lưu trữ dữ liệu dự phòng.

Câu 24. Tường lửa nào dưới đây là một ví dụ của tường lửa phần mềm?
A. Palo Alto Networks
*B. Windows Defender Firewall
C. Cisco ASA
D. Fortinet FortiGate

Câu 25. Các lỗ hổng bảo mật được khai thác bằng cách gửi dữ liệu đặc biệt để kích hoạt lỗi trong quá trình xử lý của một ứng dụng web là:
A. Broken Authentication
B. Sensitive Data Exposures
*C. Injection Attacks
D. Insecure Deserialization

Câu 26. Một dấu hiệu nào sau đây có thể chỉ ra một cuộc tấn công SQL Injection?
A. Trang web tải chậm hơn bình thường
*B. Câu lệnh SQL bất thường xuất hiện trong nhật ký máy chủ
C. Giao diện người dùng thay đổi
D. Trình duyệt tự động tải lại trang

Câu 27. Cross Site Scripting (XSS) là gì?
A. Một kỹ thuật để tăng tốc độ tải trang web.
B. Một phương pháp tối ưu hóa cơ sở dữ liệu.
C. Một cách mã hóa dữ liệu truyền tải.
*D. Một loại tấn công mạng nhằm chèn mã độc vào các trang web khác.

Câu 28. Giao thức SSL và TSL hoạt động ở tầng nào của mô hình OSI
A. Sesion
B. Network
*C. Từ tầng Transport trở lên
D. Transport

Câu 29. Phương pháp nào sau đây giúp ngăn chặn tấn công SQL Injection?
A. Sử dụng truy vấn động (dynamic queries).
B. Tăng kích thước cơ sở dữ liệu.
C. Sử dụng mật khẩu mạnh cho người dùng cơ sở dữ liệu.
*D. Sử dụng truy vấn chuẩn hóa (prepared statements).

Câu 30. Hậu quả của một cuộc tấn công XSS thành công có thể là gì?
A. Tăng tốc độ tải trang
B. Nén dữ liệu trang web
*C. Lộ thông tin phiên (session hijacking)
D. Cải thiện hiệu suất cơ sở dữ liệu
                `
            },
            {
                id: "bai_04-p2",
                title: "Bài 04: Chương 3 - An toàn dịch vụ Web (Phần 2)",
                data: `
Câu 31. Phương pháp nào sau đây được sử dụng để bảo vệ mạng không dây khỏi việc đánh cắp dữ liệu?
A. WEP (Wired Equivalent Privacy)
B. WPS (Wi-Fi Protected Setup)
*C. WPA (Wi-Fi Protected Access)
D. MAC Filtering (MAC Address Filtering)

Câu 32. Cách nào sau đây giúp ngăn chặn tấn công XSS?
A. Vô hiệu hóa JavaScript trên máy chủ
*B. Mã hóa đầu ra (output encoding) và kiểm tra đầu vào
C. Sử dụng giao thức FTP thay vì HTTP
D. Tăng kích thước bộ nhớ đệm

Câu 33. Loại XSS nào xảy ra khi mã độc được lưu trữ trực tiếp trên máy chủ và được thực thi mỗi khi người dùng truy cập trang web bị ảnh hưởng?
A. Reflected XSS
B. DOM-based XSS
*C. Stored XSS
D. Persistent XSS

Câu 34. Chức năng chính của phiên (session) trong SSL/TLS là gì?
A. Quản lý các yêu cầu HTTP
B. Bảo vệ thông tin nhạy cảm
*C. Duy trì kết nối bảo mật giữa máy khách và máy chủ
D. Đảm bảo tính toàn vẹn của dữ liệu

Câu 35. Phiên bản nào của SSL được coi là không an toàn và không còn được sử dụng?
A. SSL 1.0
B. SSL 2.0
*C. SSL 3.0
D. TLS 1.3

Câu 36. Loại XSS nào thao tác trực tiếp trên DOM của trình duyệt?
A. Stored XSS
B. Reflected XSS
*C. DOM-based XSS
D. Blind XSS

Câu 37. Cổng mặc định của HTTPS là gì?
A. 80
*B. 443
C. 8080
D. 21

Câu 38. Loại tấn công XSS nào thường xuất hiện trong các tham số URL?
A. Stored XSS
*B. Reflected XSS
C. DOM-based XSS
D. Persistent XSS

Câu 39. SSL là viết tắt của gì?
A. Secure System Layer
B. Security Socket Layer
*C. Secure Sockets Layer
D. Secure Secure Layer

Câu 40. Tại sao cần phải chuyển từ HTTP sang HTTPS?
A. Để tăng tốc độ tải trang web.
*B. Để đảm bảo dữ liệu người dùng được mã hóa và an toàn.
C. Để tránh bị Google phạt.
D. Để tiết kiệm băng thông

Câu 41. Làm thế nào để phát hiện và ngăn chặn tấn công thăm dò?
A. Cài đặt và cấu hình tường lửa đúng cách
B. Sử dụng mật khẩu đơn giản để giảm độ phức tạp.
*C. Sử dụng tường lửa và hệ thống phát hiện xâm nhập (IDS).
D. Tăng băng thông mạng để giảm tải.

Câu 42. Để giảm thiểu rủi ro XSS, tiêu đề HTTP nào có thể được sử dụng để kiểm soát nguồn tài nguyên?
A. X-Frame-Options
B. Strict-Transport-Security
*C. Content-Security-Policy (CSP)
D. Access-Control-Allow-Origin

Câu 43. Tường lửa ứng dụng web (WAF) có thể bảo vệ chống lại loại tấn công nào?
A. Tấn công từ chối dịch vụ phân tán (DDoS)
*B. SQL Injection và XSS
C. Tấn công giả mạo địa chỉ IP
D. Tất cả các loại trên

Câu 44. Chức năng chính của tường lửa là gì?
A. Mã hóa dữ liệu
*B. Kiểm soát và lọc lưu lượng mạng
C. Tăng tốc độ truyền dữ liệu
D. Lưu trữ dữ liệu người dùng

Câu 45. Chứng chỉ số (SSL Certificate) trên một trang web HTTPS có chức năng chính gì?
A. Bảo vệ trang web khỏi các cuộc tấn công DDoS
B. Cung cấp tốc độ tải trang nhanh hơn
*C. Xác thực danh tính của máy chủ
D. Tăng băng thông truyền tải dữ liệu

Câu 46. Loại tường lửa nào sử dụng bảng trạng thái để theo dõi kết nối mạng?
A. Tường lửa gói tin
*B. Tường lửa trạng thái
C. Tường lửa proxy
D. Tường lửa ứng dụng

Câu 47. Loại tường lửa nào kiểm tra nội dung gói tin ở tầng ứng dụng?
A. Tường lửa trạng thái (Stateful Firewall)
*B. Tường lửa proxy
C. Tường lửa gói tin (Packet Filtering Firewall)
D. Tường lửa phần cứng

Câu 48. Kỹ thuật tấn công phổ biến trên Web là
A. Chiếm hữu phiên làm việc.
B. Từ chối dịch vụ (DoS)
C. Tràn bộ đệm.
*D. Chèn câu truy vấn SQL.

Câu 49. Kỹ thuật nào sau đây không hiệu quả trong việc ngăn chặn SQL Injection?
A. Sử dụng truy vấn tham số hóa
B. Kiểm tra và lọc đầu vào người dùng
C. Sử dụng tường lửa ứng dụng web (WAF)
*D. Tăng dung lượng cơ sở dữ liệu

Câu 50. Trong quá trình bắt tay (handshake) của SSL/TLS, chứng chỉ số của máy chủ được sử dụng để làm gì?
A. Mã hóa dữ liệu truyền tải
B. Xác thực danh tính của máy khách
*C. Xác thực danh tính của máy chủ
D. Nén dữ liệu truyền tải

Câu 51. Khi một trang web sử dụng HTTP thay vì HTTPS, rủi ro nào sau đây có thể xảy ra?
A. Trang web tải chậm hơn
B. Trình duyệt không hiển thị nội dung đa phương tiện
*C. Dữ liệu truyền đi có thể bị chặn và đọc bởi bên thứ ba
D. Cookie không được lưu trữ

Câu 52. TLS là phiên bản cải tiến của giao thức nào?
A. HTTP
*B. SSL
C. FTP
D. SMTP

Câu 53. Chứng chỉ TLS/SSL chứa thông tin gì?
A. Địa chỉ IP của máy chủ
B. Mật khẩu người dùng
C. Nội dung trang web
*D. Khóa công khai và thông tin về chủ sở hữu

Câu 54. Sự khác biệt chính giữa HTTP và HTTPS là gì?
A. HTTP sử dụng cổng 443, trong khi HTTPS sử dụng cổng 80.
B. HTTP nhanh hơn HTTPS.
*C. HTTP là giao thức không an toàn, trong khi HTTPS sử dụng SSL/TLS để mã hóa dữ liệu.
D. Không có sự khác biệt, cả hai đều an toàn

Câu 55. Tường lửa trạng thái (Stateful Firewall) có ưu điểm gì so với tường lửa gói tin (Packet Filtering Firewall)?
A. Kiểm tra nội dung gói tin ở tầng ứng dụng
*B. Theo dõi trạng thái kết nối mạng
C. Mã hóa dữ liệu truyền đi
D. Giảm kích thước gói tin

Câu 56. Kỹ thuật tấn công SQL Injection thường nhắm vào:
A. Hệ điều hành máy chủ.
B. Cấu trúc mạng nội bộ.
C. Thiết bị phần cứng.
*D. Giao diện người dùng của ứng dụng web.

Câu 57. Website nào sau đây giúp bạn thực hiện kiểm tra tệp tin nghi nhiễm mã độc?
A. https://virus.com
B. https://khonggianmang.vn
*C. https://www.virustotal.com
D. https://bkav.vn

Câu 58. Cơ chế bảo mật SSL hoạt động trên tầng
A. Network, Session
*B. Network, Transport
C. Application, Session
D. Tất cả đều sai

Câu 59. Trong quy trình bắt tay TLS, bước nào đảm bảo máy khách và máy chủ đồng ý về thuật toán mã hóa?
A. Server Certificate
*B. Key Exchange
C. Client Hello
D. Finished Message

Câu 60. SQL Injection là gì?
A. Một kỹ thuật tối ưu hóa truy vấn SQL.
B. Một phương pháp mã hóa dữ liệu trong SQL.
*C. Một loại tấn công mạng nhằm chèn mã SQL độc hại vào truy vấn của ứng dụng.
D. Một công cụ để tạo ra cơ sở dữ liệu SQL.
                `
            },
            {
                id: "bai_05",
                title: "Bài 05: Chương 4 - Bảo mật trong mạng không dây",
                data: `
Câu 1. Cơ cấu bảo mật mạng không dây nào sau đây là ít an toàn nhất?
A. Bảo mật định danh mạng
*B. Mã hóa WEP 40 bit
C. VPN
D. Mã hóa WEP 128 bit

Câu 2. Mục đích của quy trình bắt tay 4 bước là gì?
A. Để thiết lập kết nối
B. Để xác thực máy khách
C. Để bảo mật kết nối
*D. Tất cả các đáp án

Câu 3. VPN viết tắt của từ nào?
A. Virtual Public Network
B. Very Private Network
*C. Virtual Private Network
D. Virtual Public Net

Câu 4. Một trong những lợi ích chính của VPN là gì?
A. Giảm chi phí mạng
B. Tăng tốc độ internet
*C. Bảo mật dữ liệu khi truyền tải
D. Tăng dung lượng lưu trữ

Câu 5. Giao thức nào thường được sử dụng để tạo kết nối VPN?
A. HTTP
B. FTP
*C. IPsec
D. SMTP

Câu 6. Mục đích chính của TKIP là gì?
*A. Tạo ra khóa mã hóa mới cho mỗi gói dữ liệu
B. Giảm tốc độ mã hóa để tăng hiệu suất
C. Thay thế WEP mà không cần thay đổi phần cứng
D. Thay thế RC4 bằng AES để mã hóa mạnh hơn

Câu 7. Giao thức nào được phát triển để thay thế WEP do các vấn đề bảo mật của nó?
A. SSL (Secure Sockets Layer)
*B. WPA (Wi-Fi Protected Access)
C. IPSec (Internet Protocol Security)
D. SSH (Secure Shell)

Câu 8. WEP sử dụng thuật toán mã hóa nào để bảo vệ dữ liệu truyền tải?
A. RSA (Rivest-Shamir-Adleman)
*B. RC4 (Rivest Cipher 4)
C. DES (Data Encryption Standard)
D. AES (Advanced Encryption Standard)

Câu 9. Giao thức WEP được sử dụng để bảo mật kết nối:
A. Ethernet
*B. Wifi
C. Bluetooth
D. Tất cả các đáp án

Câu 10. Mức mã hóa WEP nào nên được thiết lập trên một mạng 802.11b?
A. 40 bit
B. 28 bit
*C. 128 bit
D. 16 bit

Câu 11. TKIP sử dụng thuật toán mã hóa nào?
A. DES (Data Encryption Standard)
B. AES (Advanced Encryption Standard)
*C. RC4 (Rivest Cipher 4)
D. RSA (Rivest-Shamir-Adleman)

Câu 12. Một trong những cải tiến chính của WPA so với WEP là gì?
A. Sử dụng thuật toán mã hóa bất đối xứng
B. Sử dụng mật khẩu mạnh hơn
*C. Sử dụng TKIP để thay đổi khóa mã hóa cho mỗi gói dữ liệu
D. Giảm độ phức tạp của quá trình mã hóa

Câu 13. WEP là viết tắt của gì?
A. Wireless Encryption Protocol
B. Wireless Equivalent Privacy
C. Wired Encryption Protocol
*D. Wired Equivalent Privacy

Câu 14. Tại sao mạng không dây dễ bị tấn công hơn so với mạng có dây?
A. Tốc độ truyền dữ liệu chậm hơn
B. Thiết bị không dây thường rẻ tiền hơn
*C. Tín hiệu không dây có thể bị bắt và giải mã bởi bất kỳ ai trong phạm vi
D. Mật khẩu mạng không dây dễ nhớ hơn

Câu 15. Một trong những cải tiến chính của TKIP so với WEP là gì?
A. Sử dụng khóa tĩnh thay vì khóa động
B. Tăng kích thước khóa lên 512 bit
*C. Sử dụng cơ chế "per-packet key mixing" để tạo khóa mã hóa riêng cho mỗi gói dữ liệu
D. Sử dụng mã hóa bất đối xứng

Câu 16. Mục đích chính của quy trình bắt tay 4 bước (4-way handshake) trong kết nối Wi-Fi là gì?
A. Mã hóa dữ liệu truyền tải giữa máy khách và điểm truy cập.
B. Thiết lập kết nối nhanh hơn.
*C. Xác thực mật khẩu và thiết lập các khóa bảo mật giữa máy khách và điểm truy cập.
D. Tối ưu hóa băng thông sử dụng.

Câu 17. Cơ cấu bảo mật nào sau đây được sử dụng với chuẩn không dây WAP?
A. SSL
B. HTTPS
*C. WTLS
D. Mã hóa WEP

Câu 18. TKIP được phát triển như một phần của giao thức bảo mật nào?
A. WEP
B. WPA2
*C. WPA (Wi-Fi Protected Access)
D. SSL/TLS

Câu 19. Bước cuối cùng trong quy trình bắt tay 4 bước là gì?
A. Máy khách gửi lại mật khẩu cho điểm truy cập.
B. Điểm truy cập xác thực mật khẩu của máy khách.
C. Máy khách và điểm truy cập trao đổi dữ liệu không mã hóa.
*D. Máy khách xác thực thông điệp xác nhận từ điểm truy cập và thiết lập kết nối bảo mật.

Câu 20. TKIP cung cấp cơ chế nào để đảm bảo tính toàn vẹn của dữ liệu?
A. Hash-based Message Authentication Code (HMAC)
B. Cyclic Redundancy Check (CRC)
*C. Message Integrity Check (MIC)
D. Digital Signature Algorithm (DSA)

Câu 21. Các giao thức xác thực nào sau đây là được sử dụng trong các mạng không dây?
*A. 802.1X
B. 802.11b
C. 802.11a
D. 803.1

Câu 22. WPA được phát triển để thay thế giao thức bảo mật nào?
A. TKIP (Temporal Key Integrity Protocol)
B. WPA2
*C. WEP (Wired Equivalent Privacy)
D. AES (Advanced Encryption Standard)

Câu 23. Các chuẩn giao thức mạng không dây IEEE nào sau đây là phổ biến nhất?
A. 802.11a
B. 802.11g
C. 802.11b
*D. Tất cả đều đúng

Câu 24. WPA3 cung cấp tính năng bảo mật nào để bảo vệ dữ liệu ngay cả khi kẻ tấn công đã có mật khẩu Wi-Fi?
A. Enhanced Open (OWE) bảo vệ các kết nối mở
B. Temporal Key Integrity Protocol (TKIP)
*C. Perfect Forward Secrecy (PFS) đảm bảo mỗi phiên có một khóa mã hóa riêng
D. Wired Equivalent Privacy (WEP)

Câu 25. Bước thứ ba trong quy trình bắt tay 4 bước liên quan đến hành động nào của điểm truy cập?
A. Điểm truy cập gửi khóa mã hóa cho máy khách.
*B. Điểm truy cập xác thực máy khách và gửi lại nonce đã mã hóa.
C. Điểm truy cập yêu cầu máy khách gửi lại nonce.
D. Điểm truy cập gửi một thông điệp xác nhận mã hóa đến máy khách.

Câu 26. WPA2, phiên bản nâng cấp của WPA, sử dụng thuật toán mã hóa nào để thay thế RC4 của WPA?
A. Blowfish
*B. AES (Advanced Encryption Standard)
C. DES (Data Encryption Standard)
D. RSA (Rivest-Shamir-Adleman)

Câu 27. Giao thức mã hóa nào sau đây được sử dụng rộng rãi trong VPN?
A. RSA
B. MD5
*C. AES
D. DES

Câu 28. WPA3-Personal cải thiện bảo mật bằng cách sử dụng cơ chế nào để thay thế Pre-Shared Key (PSK) của WPA2?
A. Extensible Authentication Protocol (EAP)
*B. Simultaneous Authentication of Equals (SAE)
C. Public Key Infrastructure (PKI)
D. Message Integrity Check (MIC)

Câu 29. Mục đích chính của việc lọc địa chỉ MAC trong một mạng không dây là gì?
A. Cải thiện tốc độ truyền dữ liệu
B. Tăng cường độ sáng của tín hiệu
*C. Kiểm soát truy cập vào mạng
D. Giảm thiểu nhiễu từ các thiết bị khác

Câu 30. Điểm yếu của WPA2 là:
A. Không có
B. Tất cả các đáp án
*C. Dễ bị tấn công brute-force
D. Độ dài mật khẩu ngắn

Câu 31. Công cụ/cơ chế bảo mật cho mạng không dây là
A. TSL
B. Giao thức PGP
*C. WEP
D. SSL

Câu 32. Với cách thức xác thực nào được coi là an toàn nhất?
A. Tên người dùng và mật khẩu
B. Mã PIN
C. Xác thực 2 yếu tố
*D. Vân tay hoặc nhận dạng khuôn mặt

Câu 33. WPA3-Enterprise cung cấp mức mã hóa tối thiểu nào cho mạng doanh nghiệp?
A. 128-bit
*B. 192-bit
C. 64-bit
D. 256-bit

Câu 34. Tại sao việc sử dụng VPN lại quan trọng khi kết nối vào mạng Wi-Fi công cộng?
A. Giảm băng thông sử dụng
*B. Bảo vệ dữ liệu khỏi bị đánh cắp
C. Tăng tốc độ kết nối
D. Giảm chi phí sử dụng internet

Câu 35. Bước đầu tiên trong quy trình bắt tay 4 bước là gì?
*A. Điểm truy cập gửi một nonce (số ngẫu nhiên) đến máy khách.
B. Máy khách gửi yêu cầu xác thực đến điểm truy cập.
C. Máy khách gửi nonce của mình đến điểm truy cập.
D. Máy khách và điểm truy cập trao đổi các khóa mã hóa.

Câu 36. WPA2-Enterprise yêu cầu một thành phần bổ sung nào để xác thực người dùng?
A. Certificate Authority (CA)
*B. RADIUS Server (Remote Authentication Dial-In User Service)
C. Pre-shared Key (PSK)
D. Public Key Infrastructure (PKI)

Câu 37. Trong bước thứ hai của quy trình bắt tay 4 bước, máy khách thực hiện hành động gì?
A. Gửi lại nonce của điểm truy cập kèm với một khóa bảo mật tạm thời.
B. Gửi yêu cầu kết nối.
*C. Gửi nonce của mình và một thông điệp mã hóa đến điểm truy cập.
D. Xác nhận lại mật khẩu.

Câu 38. Loại tấn công XSS nào sau đây không yêu cầu sự can thiệp của người dùng?
A. Reflected XSS
B. DOM-based XSS
*C. Stored XSS
D. Persistent XSS

Câu 39. Một trong những điểm yếu lớn nhất của WEP là gì?
A. Quá khó để triển khai
B. Sử dụng khóa mã hóa quá mạnh
*C. Quản lý khóa không an toàn và dễ bị tấn công brute-force
D. Không hỗ trợ bất kỳ hình thức mã hóa nào

Câu 40. Một trong những tính năng bảo mật mới của WPA3 so với WPA2 là gì?
A. Sử dụng thuật toán RC4 để mã hóa
B. Sử dụng mật khẩu tĩnh dễ đoán
*C. Bảo vệ chống lại các cuộc tấn công từ điển (dictionary attacks) bằng cách sử dụng giao thức SAE (Simultaneous Authentication of Equals)
D. Hỗ trợ mã hóa dữ liệu bằng thuật toán DES
                `
            },
            {
                id: "bai_06",
                title: "Bài 06: Chương 4 - Bảo mật trong mạng không dây",
                data: `
Câu 1. GTK (Group Temporal Key) được sử dụng để làm gì?
A. Mã hóa lưu lượng unicast giữa client và AP.
*B. Mã hóa lưu lượng broadcast và multicast từ AP đến các client.
C. Chỉ để xác thực client.
D. Chỉ để xác thực AP.

Câu 2. TKIP là một phần cốt lõi của tiêu chuẩn bảo mật nào?
A. WEP.
*B. WPA.
C. WPA2.
D. WPA3.

Câu 3. Quá trình bắt tay 4 bước có diễn ra khi một client kết nối lại (roaming) với một AP khác trong cùng một mạng không?
A. Không, client sẽ sử dụng lại khóa cũ.
B. Có, quá trình bắt tay 4 bước đầy đủ luôn được thực hiện.
*C. Có, nhưng là một phiên bản rút gọn nếu client đã có PMK.
D. Chỉ khi AP yêu cầu.

Câu 4. WEP có cung cấp cơ chế quản lý khóa động không?
A. Có, khóa được thay đổi sau mỗi phiên kết nối.
B. Có, nhưng chỉ khi người quản trị cấu hình.
*C. Không, khóa WEP là khóa tĩnh và phải được cấu hình thủ công trên AP và tất cả các client.
D. Chỉ phiên bản WEP2 mới có.

Câu 5. Giao thức mã hóa nào là bắt buộc đối với WPA?
A. AES-CCMP.
B. WEP.
*C. TKIP.
D. Không có giao thức nào bắt buộc.

Câu 6. Lỗ hổng KRACK (Key Reinstallation Attacks) khai thác điểm yếu ở bước nào trong quy trình bắt tay 4 bước?
A. Bằng cách gửi lại Message 1 nhiều lần.
B. Bằng cách thay đổi giá trị SNonce.
*C. Bằng cách gửi lại Message 3 nhiều lần để buộc client cài đặt lại PTK.
D. Bằng cách tấn công vào Message 2.

Câu 7. Lỗ hổng KRACK ảnh hưởng đến giao thức nào sau đây?
A. Chỉ WEP.
B. Chỉ WPA.
*C. WPA và WPA2.
D. Chỉ WPA3.

Câu 8. WPA2 dựa trên tiêu chuẩn IEEE nào?
A. 802.11a.
B. 802.11g.
*C. 802.11i.
D. 802.11ac.

Câu 9. WEP là viết tắt của cụm từ nào?
A. Wireless Encryption Protocol.
*B. Wired Equivalent Privacy.
C. Wireless Entertainment Protocol.
D. Wired Encryption Privacy.

Câu 10. MIC (Message Integrity Code) trong quy trình bắt tay 4 bước có vai trò gì?
A. Mã hóa dữ liệu.
*B. Đảm bảo tính toàn vẹn và xác thực của thông điệp.
C. Tạo số ngẫu nhiên.
D. Thỏa thuận thuật toán mã hóa.

Câu 11. Điểm yếu của cơ chế Michael trong TKIP là gì?
A. Rất chậm và tốn tài nguyên.
B. Có thể bị bẻ gãy nếu kẻ tấn công có thể đoán được một phần của gói tin.
*C. Dễ bị tấn công từ chối dịch vụ (DoS) do cơ chế đối phó của nó.
D. Không tương thích với nhiều thiết bị.

Câu 12. Thuật toán mã hóa dòng (stream cipher) nào được WEP sử dụng?
A. AES.
B. DES.
*C. RC4.
D. Blowfish.

Câu 13. Thông điệp thứ hai (Message 2) chứa thông tin quan trọng nào do client tạo ra?
A. ANonce.
*B. SNonce và MIC.
C. Chỉ có MIC.
D. Địa chỉ IP của client.

Câu 14. TKIP được giới thiệu để thay thế cho giao thức nào mà không cần nâng cấp phần cứng?
A. WPA.
*B. WEP.
C. WPA2.
D. AES.

Câu 15. Tại sao CRC-32 không phải là một cơ chế tốt để đảm bảo tính toàn vẹn trong bảo mật?
A. Vì nó quá chậm.
*B. Vì nó không có tính chất mật mã học, kẻ tấn công có thể dễ dàng thay đổi gói tin và tính toán lại giá trị CRC-32 mới.
C. Vì nó chỉ hoạt động với các gói tin nhỏ.
D. Vì nó yêu cầu khóa bí mật.

Câu 16. Trong WPA2-Personal, PSK (Pre-Shared Key) được sử dụng để tạo ra khóa nào?
A. GTK (Group Temporal Key).
B. KCK (Key Confirmation Key).
*C. PMK (Pairwise Master Key).
D. KEK (Key Encryption Key).

Câu 17. TKIP vẫn sử dụng thuật toán mã hóa nào làm nền tảng, giống như WEP?
A. AES.
B. 3DES.
*C. RC4.
D. Blowfish.

Câu 18. WPA được phát triển như một giải pháp trung gian trước khi tiêu chuẩn nào được hoàn thiện?
A. 802.11b.
B. 802.11g.
*C. 802.11i (WPA2).
D. 802.11n.

Câu 19. Trong chế độ WPA-Personal, người dùng cần cung cấp thông tin gì để kết nối vào mạng?
A. Tên người dùng và mật khẩu.
B. Chỉ tên người dùng.
*C. Khóa chia sẻ trước (Pre-Shared Key - PSK).
D. Chứng chỉ số.

Câu 20. Giao thức mã hóa nào là bắt buộc đối với WPA2, thay thế cho TKIP?
A. RC4.
B. WEP.
*C. AES-CCMP.
D. DES.

Câu 21. Chế độ WPA-Enterprise yêu cầu thành phần nào để xác thực người dùng?
A. Chỉ cần Access Point.
B. Một máy chủ DHCP.
*C. Một máy chủ xác thực RADIUS (802.1X).
D. Một modem cáp.

Câu 22. WPA có hai chế độ hoạt động là gì?
A. WPA-Home và WPA-Office.
*B. WPA-Personal (sử dụng PSK) và WPA-Enterprise (sử dụng 802.1X).
C. WPA-TKIP và WPA-AES.
D. WPA-Fast và WPA-Secure.

Câu 23. Hiện nay, WEP được khuyến nghị sử dụng trong trường hợp nào?
A. Trong các mạng doanh nghiệp yêu cầu bảo mật cao.
B. Trong các mạng gia đình.
C. Chỉ khi các thiết bị cũ không hỗ trợ các giao thức mạnh hơn.
*D. WEP không còn được khuyến nghị sử dụng trong bất kỳ trường hợp nào.

Câu 24. Các khóa WEP thường có độ dài bao nhiêu?
A. 32 bit và 64 bit.
*B. 64 bit và 128 bit.
C. 128 bit và 256 bit.
D. 256 bit và 512 bit.

Câu 25. So với WEP, cải tiến lớn nhất của WPA là gì?
A. Tăng tốc độ Wi-Fi.
*B. Giới thiệu TKIP để khắc phục các lỗ hổng của WEP và cơ chế xác thực mạnh hơn.
C. Sử dụng một loại ăng-ten mới.
D. Giảm độ trễ của mạng.

Câu 26. TKIP sử dụng cơ chế nào để đảm bảo tính toàn vẹn của thông điệp, thay thế cho CRC-32?
*A. Một cơ chế mới gọi là Michael.
B. CRC-64.
C. HMAC-SHA1.
D. Chỉ sử dụng checksum đơn giản.

Câu 27. Việc cài đặt khóa mã hóa (PTK và GTK) hoàn tất sau khi thông điệp nào được gửi và xác nhận thành công?
A. Message 1.
B. Message 2.
C. Message 3.
*D. Message 4.

Câu 28. Giá trị nào được gửi trong thông điệp đầu tiên (Message 1) của quá trình bắt tay 4 bước?
A. SNonce (Supplicant Nonce).
*B. ANonce (Authenticator Nonce).
C. MIC (Message Integrity Code).
D. GTK (Group Temporal Key).

Câu 29. Khi phát hiện hai gói tin có MIC không hợp lệ trong một khoảng thời gian ngắn, AP sẽ làm gì theo cơ chế đối phó của TKIP?
A. Bỏ qua các gói tin đó.
B. Yêu cầu client gửi lại khóa.
*C. Ngừng hoạt động trong 60 giây để chống lại tấn công giả mạo.
D. Chỉ ghi lại sự kiện vào log hệ thống.

Câu 30. PTK (Pairwise Transient Key) được tạo ra từ những thành phần nào sau đây?
*A. PMK, ANonce, SNonce, địa chỉ MAC của AP và client.
B. Chỉ từ PMK (Pairwise Master Key).
C. Chỉ từ ANonce và SNonce.
D. Mật khẩu Wi-Fi và SSID.

Câu 31. Chức năng chính của cơ chế trộn khóa (per-packet key mixing) trong TKIP là gì?
A. Để giảm kích thước của gói tin.
*B. Để tạo ra một khóa mã hóa mới cho mỗi gói tin, làm cho việc phân tích thống kê để bẻ khóa trở nên khó khăn hơn.
C. Để tăng tốc độ mã hóa.
D. Để tương thích ngược với WEP.

Câu 32. WPA2 có hỗ trợ tương thích ngược với WPA không?
A. Không, chúng hoàn toàn khác biệt.
B. Chỉ ở chế độ Enterprise.
*C. Có, thông qua một chế độ hỗn hợp (mixed mode) cho phép cả client WPA và WPA2 cùng kết nối.
D. Chỉ trên các thiết bị của một số nhà sản xuất nhất định.

Câu 33. Loại tấn công nào phổ biến nhất nhằm vào WEP?
A. Tấn công từ chối dịch vụ (DoS).
*B. Tấn công liên quan đến IV (IV collision attack) để tìm ra khóa.
C. Tấn công lừa đảo (Phishing).
D. Tấn công Man-in-the-middle.

Câu 34. Đâu là điểm yếu chính của việc sử dụng IV trong WEP?
A. IV quá dài, làm giảm hiệu năng mạng.
*B. IV được gửi dưới dạng văn bản rõ (plaintext) và có không gian khóa nhỏ, dẫn đến lặp lại.
C. IV được mã hóa bằng một thuật toán yếu.
D. IV không bao giờ thay đổi.

Câu 35. WPA có còn được coi là an toàn tuyệt đối ở thời điểm hiện tại không?
A. Có, nó vẫn rất an toàn.
B. Chỉ an toàn ở chế độ Enterprise.
*C. Không, vì TKIP đã được chứng minh là có những điểm yếu và không còn được khuyến nghị.
D. Chỉ an toàn khi kết hợp với VPN.

Câu 36. Trong quy trình bắt tay 4 bước, thông điệp đầu tiên (Message 1) được gửi từ đâu đến đâu?
A. Từ Client đến Access Point (AP).
*B. Từ Access Point (AP) đến Client.
C. Từ Router đến Client.
D. Từ Client đến Server xác thực.

Câu 37. TKIP đã cải tiến vấn đề IV của WEP như thế nào?
A. Loại bỏ hoàn toàn IV.
*B. Sử dụng IV dài hơn (48-bit) và một chuỗi tuần tự để chống tấn công phát lại.
C. Mã hóa IV trước khi gửi.
D. Giữ nguyên IV 24-bit nhưng thay đổi khóa thường xuyên hơn.

Câu 38. Vector khởi tạo (Initialization Vector - IV) trong WEP có độ dài bao nhiêu bit?
A. 16 bit.
*B. 24 bit.
C. 48 bit.
D. 64 bit.

Câu 39. Mục đích chính của quy trình bắt tay 4 bước (4-Way Handshake) trong WPA/WPA2 là gì?
A. Để thiết lập kết nối vật lý giữa client và Access Point (AP).
*B. Để trao đổi và xác thực khóa mã hóa phiên (session key).
C. Để client và AP thỏa thuận về tốc độ truyền dữ liệu.
D. Để cấp phát địa chỉ IP cho client.

Câu 40. WEP sử dụng cơ chế nào để kiểm tra tính toàn vẹn của dữ liệu?
A. MIC (Message Integrity Code).
B. HMAC (Hash-based Message Authentication Code).
*C. CRC-32 (Cyclic Redundancy Check).
D. SHA-256..
                `
            },
            {
                id: "bai_07",
                title: "Bài 07: Chương 4 - Bảo mật trong mạng không dây",
                data: `
Câu 1. Giao thức GCMP (Galois/Counter Mode Protocol) được sử dụng trong WPA3-Enterprise 192-bit mode mang lại lợi ích gì so với CCMP?
*A. GCMP có hiệu suất cao hơn và độ trễ thấp hơn CCMP trên nhiều nền tảng phần cứng.
B. GCMP đơn giản hơn để lập trình.
C. GCMP yêu cầu khóa ngắn hơn.
D. GCMP tương thích ngược với WEP.

Câu 2. WPA3 giới thiệu "Transition Mode" (chế độ chuyển tiếp) cho phép AP hỗ trợ đồng thời cả client WPA2 và WPA3. Rủi ro bảo mật chính của chế độ này là gì?
A. Nó làm giảm tốc độ của tất cả các client WPA3.
*B. Nó vẫn mở ra khả năng cho các cuộc tấn công hạ cấp (downgrade attack), nơi kẻ tấn công có thể buộc client WPA3 kết nối bằng WPA2 yếu hơn.
C. Nó yêu cầu hai SSID riêng biệt, gây nhầm lẫn cho người dùng.
D. Nó không tương thích với các thiết bị IoT.

Câu 3. CCMP của WPA2 sử dụng chế độ hoạt động nào của AES?
A. ECB (Electronic Codebook).
B. CBC (Cipher Block Chaining).
*C. CTR (Counter Mode) để mã hóa và CBC-MAC để xác thực.
D. GCM (Galois/Counter Mode).

Câu 4. Đâu là một nhược điểm tiềm ẩn khi sử dụng VPN?
*A. Có thể làm giảm tốc độ kết nối Internet do quá trình mã hóa và định tuyến.
B. Luôn luôn miễn phí.
C. Tăng cường bảo mật cho thiết bị.
D. Không tương thích với các trình duyệt web hiện đại.

Câu 5. Khái niệm "Perfect Forward Secrecy" (PFS) trong WPA3-SAE và các giao thức VPN hiện đại có ý nghĩa gì?
A. Khóa mã hóa không bao giờ thay đổi.
*B. Hệ thống tạo ra các khóa phiên (session keys) duy nhất cho mỗi phiên và việc lộ khóa dài hạn (long-term key) không cho phép kẻ tấn công giải mã các phiên trong quá khứ.
C. Dữ liệu được chuyển tiếp qua nhiều máy chủ để tăng cường bảo mật.
D. Chỉ cho phép các kết nối đi ra, không cho phép kết nối đi vào.

Câu 6. Trong WPA3, Protected Management Frames (PMF - IEEE 802.11w) trở thành bắt buộc. PMF bảo vệ chống lại loại tấn công nào?
A. Tấn công nghe lén (eavesdropping) lưu lượng dữ liệu.
*B. Tấn công giả mạo các gói tin quản lý như "deauthentication" hoặc "disassociation" để ngắt kết nối client.
C. Tấn công từ điển vào quá trình bắt tay.
D. Tấn công phát lại (replay attack) các gói tin dữ liệu.

Câu 7. Trong WPA-Enterprise, giao thức EAP nào được coi là kém an toàn nhất vì nó gửi thông tin xác thực bên trong một đường hầm không được mã hóa hoàn toàn ở giai đoạn đầu?
A. EAP-TLS.
B. EAP-TTLS.
C. PEAP.
*D. LEAP (Lightweight Extensible Authentication Protocol).

Câu 8. Tại sao AES-CCMP được coi là mạnh hơn TKIP/RC4?
A. Vì nó sử dụng khóa dài hơn.
*B. Vì AES là một tiêu chuẩn mã hóa khối mạnh mẽ, đã được kiểm chứng và không có những điểm yếu đã biết như RC4.
C. Vì nó chạy nhanh hơn trên phần cứng cũ.
D. Vì nó đơn giản hơn để triển khai.

Câu 9. WPA3 giới thiệu cơ chế trao đổi khóa mới nào để thay thế cho PSK trong chế độ Personal?
A. 802.1X.
*B. Simultaneous Authentication of Equals (SAE).
C. TKIP.
D. EAP-TLS.

Câu 10. WPA3-SAE có khả năng chống lại tấn công KRACK tốt hơn WPA2 vì sao?
A. SAE không sử dụng lại các số nonce.
*B. Quá trình trao đổi khóa của SAE phức tạp hơn và có các bước xác thực chặt chẽ hơn, không dễ dàng bị lừa để cài đặt lại một khóa đã tồn tại.
C. SAE sử dụng một thuật toán mã hóa khác hoàn toàn.
D. SAE yêu cầu một kết nối vật lý để trao đổi khóa lần đầu.

Câu 11. Lợi ích chính của SAE (còn gọi là Dragonfly Key Exchange) là gì?
A. Tăng tốc độ kết nối.
*B. Bảo vệ chống lại tấn công từ điển ngoại tuyến ngay cả khi mật khẩu yếu.
C. Yêu cầu mật khẩu phức tạp hơn.
D. Chỉ hoạt động với phần cứng mới.

Câu 12. "Forward Secrecy" hay "Perfect Forward Secrecy" trong WPA3/SAE có nghĩa là gì?
A. Mật khẩu sẽ được tự động thay đổi mỗi ngày.
*B. Nếu một khóa phiên bị lộ, nó không thể được sử dụng để giải mã các lưu lượng đã bắt được trước đó.
C. Tất cả lưu lượng đều được chuyển tiếp qua một máy chủ an toàn.
D. Tốc độ truyền dữ liệu sẽ không đổi.

Câu 13. Giao thức IKEv2/IPsec thường được ưa chuộng trên các thiết bị di động vì lý do nào?
A. Vì nó tiêu thụ ít năng lượng nhất.
*B. Vì nó có khả năng tự động kết nối lại rất nhanh khi có sự thay đổi mạng (ví dụ: chuyển từ Wi-Fi sang 4G), nhờ vào Mobility and Multihoming Protocol (MOBIKE).
C. Vì nó hoàn toàn miễn phí và mã nguồn mở.
D. Vì nó cung cấp tốc độ nhanh nhất trong mọi điều kiện.

Câu 14. Tấn công từ điển (dictionary attack) ngoại tuyến (offline) vào WPA2-Personal hoạt động bằng cách nào?
A. Thử từng mật khẩu trực tiếp trên AP.
*B. Bắt gói tin của quá trình bắt tay 4 bước và thử các mật khẩu có thể có trên máy của kẻ tấn công.
C. Gây nhiễu sóng Wi-Fi.
D. Lừa người dùng kết nối vào một AP giả mạo.

Câu 15. Site-to-Site VPN thường được sử dụng để làm gì?
A. Để một cá nhân làm việc từ xa kết nối vào mạng công ty.
*B. Để kết nối hai hoặc nhiều mạng văn phòng của một tổ chức với nhau một cách an toàn qua Internet.
C. Để chơi game trực tuyến.
D. Để truy cập các trang mạng xã hội.

Câu 16. Một "VPN Kill Switch" là gì?
A. Một nút vật lý trên router để bật/tắt VPN.
*B. Một tính năng phần mềm tự động ngắt kết nối Internet của thiết bị nếu kết nối VPN bị gián đoạn, nhằm ngăn chặn rò rỉ dữ liệu không được mã hóa.
C. Một chương trình để tấn công và vô hiệu hóa VPN của người khác.
D. Một loại virus nhắm vào các kết nối VPN.

Câu 17. WPA3-Enterprise cung cấp một chế độ bảo mật tương đương 192-bit tùy chọn, phù hợp cho các môi trường nào?
A. Mạng gia đình thông thường.
B. Mạng công cộng.
*C. Mạng doanh nghiệp, chính phủ và quốc phòng yêu cầu bảo mật cấp cao.
D. Mạng dành cho thiết bị IoT.

Câu 18. CCMP là viết tắt của cụm từ gì?
A. Counter Cipher Mode with Block Chaining Message Authentication Code Protocol.
B. Cipher Block Chaining with Message Authentication Code Protocol.
C. Counter Mode CBC-MAC Protocol.
*D. Cả A và C đều đúng.

Câu 19. Trong WPA2-Enterprise sử dụng EAP-TLS, quá trình xác thực diễn ra như thế nào?
A. Chỉ sử dụng tên người dùng và mật khẩu.
B. Sử dụng xác thực hai yếu tố qua tin nhắn SMS.
*C. Dựa trên việc xác thực lẫn nhau bằng chứng chỉ số (digital certificates) được cài đặt trên cả máy chủ RADIUS và thiết bị client.
D. Sử dụng một khóa chia sẻ trước (PSK) cho toàn bộ doanh nghiệp.

Câu 20. Tại sao giao thức VPN cũ như PPTP không còn được coi là an toàn?
A. Vì nó quá chậm so với các tiêu chuẩn hiện đại.
*B. Nó sử dụng cơ chế xác thực MS-CHAPv2 đã bị bẻ gãy về mặt mật mã học.
C. Nó không tương thích với hệ điều hành Windows 10 trở lên.
D. Nó yêu cầu cấu hình thủ công phức tạp.

Câu 21. Remote Access VPN thường được sử dụng cho mục đích gì?
A. Kết nối các trung tâm dữ liệu với nhau.
*B. Cho phép nhân viên làm việc từ xa truy cập an toàn vào tài nguyên mạng nội bộ của công ty.
C. Chỉ để duyệt web ẩn danh.
D. Kết nối các thiết bị IoT.

Câu 22. Tại sao thuật toán RC4, mặc dù nhanh, lại được coi là không an toàn cho việc sử dụng trong Wi-Fi (WEP/TKIP)?
A. Vì nó yêu cầu phần cứng chuyên dụng mà không phải thiết bị nào cũng có.
B. Vì nó không hỗ trợ khóa có độ dài lớn hơn 64 bit.
*C. Vì nó có các "thiên vị" (biases) trong dòng khóa đầu ra, cho phép kẻ tấn công suy ra khóa nếu thu thập đủ gói tin.
D. Vì nó chỉ có thể mã hóa, không thể giải mã.

Câu 23. OWE trong WPA3 là viết tắt của gì?
A. Open Wi-Fi Encryption.
*B. Opportunistic Wireless Encryption.
C. Optimized Wireless Engagement.
D. Open Waveform Encryption.

Câu 24. Cơ chế đối phó của Michael MIC trong TKIP (ngừng hoạt động 60 giây) lại vô tình tạo ra một lỗ hổng nào?
A. Lỗ hổng tràn bộ đệm (buffer overflow).
B. Lỗ hổng cho phép thực thi mã từ xa.
*C. Lỗ hổng tấn công từ chối dịch vụ (DoS) - kẻ tấn công có thể chủ động gửi 2 gói tin giả mạo để làm tê liệt mạng.
D. Lỗ hổng cho phép cài đặt lại khóa (key reinstallation).

Câu 25. Trong quy trình bắt tay 4 bước, việc sử dụng ANonce và SNonce nhằm mục đích chính là gì?
*A. Để đảm bảo mỗi phiên kết nối tạo ra một khóa PTK duy nhất, chống lại tấn công phát lại (replay attack).
B. Để giảm tải tính toán cho Access Point.
C. Để đồng bộ hóa thời gian giữa client và AP.
D. Để lựa chọn thuật toán mã hóa sẽ được sử dụng.

Câu 26. Chức năng chính của VPN là gì?
A. Tăng tốc độ kết nối Internet.
*B. Tạo một "đường hầm" (tunnel) được mã hóa an toàn qua một mạng công cộng (như Internet).
C. Chặn quảng cáo trên các trang web.
D. Cung cấp Wi-Fi miễn phí.

Câu 27. So sánh giữa WPA3-Personal và WPA3-Enterprise, điểm khác biệt cơ bản nhất là gì?
A. WPA3-Personal nhanh hơn WPA3-Enterprise.
*B. WPA3-Personal dùng cho cá nhân với xác thực SAE, trong khi WPA3-Enterprise dùng cho tổ chức với xác thực 802.1X/EAP dựa trên danh tính từng người dùng.
C. WPA3-Enterprise yêu cầu phần cứng đắt tiền hơn.
D. Không có sự khác biệt, chỉ là tên gọi marketing.

Câu 28. So sánh giữa OpenVPN và WireGuard, ưu điểm chính của WireGuard là gì?
A. Hỗ trợ nhiều thuật toán mã hóa cũ hơn để tương thích.
*B. Có một codebase nhỏ hơn đáng kể, giúp việc kiểm tra và xác định lỗ hổng dễ dàng hơn.
C. Sử dụng cổng TCP 443 làm mặc định để vượt qua tường lửa.
D. Đã tồn tại lâu hơn và được coi là tiêu chuẩn công nghiệp.

Câu 29. "Đường hầm" (tunneling) trong VPN có nghĩa là gì?
A. Một kết nối vật lý trực tiếp giữa hai điểm.
*B. Quá trình đóng gói một gói tin mạng bên trong một gói tin khác.
C. Tăng băng thông của kết nối.
D. Kết nối qua vệ tinh.

Câu 30. IPsec (Internet Protocol Security) trong VPN cung cấp những dịch vụ bảo mật nào?
A. Chỉ mã hóa.
B. Chỉ xác thực.
*C. Cả xác thực, toàn vẹn dữ liệu và mã hóa.
D. Chỉ nén dữ liệu.

Câu 31. Giao thức nào sau đây KHÔNG phải là một giao thức đường hầm VPN phổ biến?
A. PPTP (Point-to-Point Tunneling Protocol).
B. L2TP/IPsec (Layer 2 Tunneling Protocol with IPsec).
C. OpenVPN.
*D. HTTP (Hypertext Transfer Protocol).

Câu 32. Rò rỉ DNS (DNS Leak) khi sử dụng VPN xảy ra khi nào?
A. Khi máy chủ VPN không hoạt động.
*B. Khi các yêu cầu phân giải tên miền (DNS query) của máy tính vẫn được gửi đến máy chủ DNS của ISP thay vì đi qua đường hầm VPN an toàn.
C. Khi người dùng nhập sai địa chỉ trang web.
D. Khi kết nối Wi-Fi quá yếu.

Câu 33. Khi bạn kết nối với VPN, địa chỉ IP công cộng của bạn sẽ hiển thị là gì?
A. Địa chỉ IP của nhà cung cấp dịch vụ Internet (ISP) của bạn.
*B. Địa chỉ IP của máy chủ VPN mà bạn đang kết nối.
C. Địa chỉ IP riêng của máy tính bạn.
D. Không có địa chỉ IP nào.

Câu 34. Tại sao việc chọn một nhà cung cấp VPN đáng tin cậy lại quan trọng?
A. Vì họ sẽ cung cấp tốc độ nhanh nhất.
*B. Vì nhà cung cấp VPN có thể thấy được lưu lượng truy cập của bạn, do đó chính sách không ghi nhật ký (no-logs policy) là rất quan trọng để đảm bảo quyền riêng tư.
C. Vì họ sẽ cung cấp phần mềm có giao diện đẹp nhất.
D. Vì họ luôn có giá rẻ nhất.

Câu 35. Ngoài lỗ hổng KRACK, một rủi ro tiềm ẩn trong việc triển khai WPA2-Personal là gì nếu PSK (mật khẩu) không đủ mạnh?
A. Kẻ tấn công có thể dễ dàng gây ra tình trạng từ chối dịch vụ (DoS).
*B. Kẻ tấn công có thể bắt các gói tin EAPOL và thực hiện tấn công từ điển ngoại tuyến (offline dictionary attack) để tìm ra PMK.
C. Kẻ tấn công có thể giải mã lưu lượng broadcast mà không cần mật khẩu.
D. Kẻ tấn công có thể buộc client hạ cấp xuống giao thức WEP.

Câu 36. Tấn công "Evil Twin" hoạt động như thế nào và VPN có thể giúp giảm thiểu rủi ro này ra sao?
*A. Kẻ tấn công tạo một AP giả mạo với SSID giống hệt mạng hợp pháp. VPN mã hóa toàn bộ lưu lượng của người dùng, vì vậy ngay cả khi kết nối với AP giả, dữ liệu vẫn an toàn.
B. Kẻ tấn công làm nhiễu sóng Wi-Fi. VPN không thể giúp gì trong trường hợp này.
C. Kẻ tấn công bẻ khóa mật khẩu WPA2. VPN giúp đặt lại mật khẩu.
D. Kẻ tấn công gửi các gói tin deauthentication. VPN giúp duy trì kết nối.

Câu 37. Split tunneling trong VPN là gì?
A. Chia kết nối VPN thành hai đường hầm để tăng tốc độ.
*B. Cho phép một số lưu lượng truy cập đi qua đường hầm VPN trong khi một số lưu lượng khác đi trực tiếp ra Internet.
C. Một kỹ thuật để tấn công VPN.
D. Kết nối đồng thời với hai máy chủ VPN khác nhau.

Câu 38. WPA3 giúp việc kết nối với các mạng Wi-Fi công cộng (mở) an toàn hơn như thế nào?
A. Bằng cách yêu cầu tất cả mọi người phải đăng nhập.
*B. Bằng cách tự động mã hóa lưu lượng giữa client và AP, ngay cả khi không có mật khẩu (sử dụng OWE).
C. Bằng cách chặn tất cả các trang web không an toàn.
D. Bằng cách giảm phạm vi phủ sóng.

Câu 39. Tại sao việc tấn công vào mật khẩu WPA3-SAE bằng phương pháp thử-sai (brute-force) lại khó khăn và chậm hơn rất nhiều so với WPA2-PSK?
A. Vì WPA3 yêu cầu mật khẩu phải có ít nhất 20 ký tự.
*B. Vì giao thức SAE yêu cầu một tương tác mạng cho mỗi lần thử mật khẩu, khiến cho các cuộc tấn công ngoại tuyến (offline) trở nên bất khả thi và tấn công trực tuyến (online) rất chậm.
C. Vì WPA3 sử dụng một thuật toán băm (hashing) mới chưa thể bị bẻ khóa.
D. Vì WPA3 tự động khóa tài khoản sau 3 lần thử sai.

Câu 40. Lợi ích của việc sử dụng VPN khi kết nối vào mạng Wi-Fi công cộng là gì?
A. Giúp điện thoại sạc pin nhanh hơn.
*B. Mã hóa lưu lượng truy cập của bạn, ngăn chặn kẻ xấu trên cùng mạng nghe lén.
C. Tự động kết nối vào Wi-Fi.
D. Tăng cường tín hiệu Wi-Fi.
                `
            }

        ]
    },
    
    {
        id: "mon_danh_gia_hieu_nang",
        name: "Môn: Đánh Giá Hiệu Năng Mạng",
        quizzes: [
            {
                id: "dg_hn_c1",
                title: "Bài 01: Chương 1 - Giới thiệu",
                data: `
Câu 1. Mục đích của việc đánh giá hiệu năng mạng là gì?
A. Xác định những điểm yếu của mạng
*B. Tất cả các phương án đều đúng
C. Xác định tài nguyên cần thiết cho mạng
D. Xác định cường độ tấn công mạng

Câu 2. Đánh giá hiệu năng mạng là bước quan trọng trong quá trình nào?
A. Phát triển mạng
B. Xây dựng mạng
*C. Quản lý mạng
D. Thiết kế mạng

Câu 3. Đơn vị đo lường phổ biến của độ trễ mạng là gì?
A. Kilobytes (KB)
B. Gigabits per second (Gbps)
*C. Milliseconds (ms)
D. Megabytes (MB)

Câu 4. Mô hình hóa hiệu năng mạng sử dụng để làm gì?
A. Đo lường hiệu suất của mạng
B. Phân tích tương tác mạng
*C. Tất cả các phương án đều đúng
D. Dự đoán về tăng trưởng mạng

Câu 5. Đánh giá hiệu năng mạng là gì?
A. Đo lường sự ổn định của tín hiệu WiFi
*B. Phân tích hiệu quả hoạt động của một mạng
C. Kiểm tra kết nối internet
D. Quá trình xác định dung lượng mạng

Câu 6. Băng thông mạng được đo bằng đơn vị nào?
A. Gigabit (Gb)
*B. Megabit (Mb)
C. Gigabyte (GB)
D. Megabyte (MB)

Câu 7. Tốc độ mạng được tính bằng đơn vị nào?
A. Megabyte (MB)
B. Gigabyte (GB)
C. Gigabit (Gb)
*D. Megabit (Mb)

Câu 8. Khi tải lên / tải xuống một lượng dữ liệu lớn có thể gây ảnh hưởng như thế nào đến hiệu năng mạng?
A. Cải thiện
*B. Giảm
C. Không ảnh hưởng
D. Tăng

Câu 9. Để đo băng thông mạng, chúng ta sử dụng công cụ nào sau đây?
A. Cáp mạng
B. Đèn báo tín hiệu
*C. Phần mềm đo tốc độ mạng
D. Máy đo đường kính

Câu 10. Khi đánh giá hiệu năng mạng, tiêu chí nào KHÔNG cần phải quan tâm?
A. Tối ưu hóa băng thông
*B. Đánh giá nhu cầu phát triển phần mềm
C. Đánh giá hiệu suất xử lý
D. Tăng cường bảo mật

Câu 11. Đánh giá hiệu năng mạng là quá trình như thế nào?
A. Phân tích lưu lượng dữ liệu
B. Đánh giá mô hình mạng
*C. Đánh giá các yếu tố ảnh hưởng đến hiệu năng của mạng
D. Kiểm tra tốc độ mạng

Câu 12. Đánh giá hiệu năng mạng tập trung vào những thông tin nào?
A. Độ tin cậy của kết nối mạng
B. Tốc độ truyền dữ liệu
C. Số lượng người dùng kết nối
*D. Tất cả các phương án đều đúng

Câu 13. Khi đánh giá hiệu năng mạng KHÔNG cần quan tâm đến yếu tố nào sau đây?
A. Độ trễ
B. Băng thông
*C. Công suất CPU
D. Độ ổn định

Câu 14. Thời gian phản hồi của mạng được quy định như thế nào?
A. Thời gian từ lúc mạng bị ngắt kết nối cho đến khi kết nối lại được
B. Thời gian để tải xuống một trang web
C. Thời gian mất mát dữ liệu
*D. Thời gian từ lúc gửi yêu cầu cho đến khi nhận được phản hồi

Câu 15. Khi thực hiện đánh giá hiệu năng mạng, liệu có cần thiết phải triển khai mô hình thực tế không?
A. Có, để đảm bảo tính thực tế của mô hình
*B. Không, chỉ cần dùng mô phỏng là đủ
C. Có, để kiểm tra tính bảo mật của mạng
D. Có, để thu thập dữ liệu thực tế

Câu 16. Để đánh giá băng thông mạng, chúng ta cần quan tâm đến điều gì?
A. Công suất CPU
B. Tất cả các phương án đều đúng
*C. Tốc độ truyền tải dữ liệu
D. Số lượng kết nối

Câu 17. Để đánh giá độ ổn định của mạng, chúng ta cần quan tâm đến điều gì?
A. Số lượng kết nối
B. Sự an toàn mạng
*C. Sự ổn định của kết nối
D. Tốc độ truyền tải dữ liệu

Câu 18. Để đánh giá hiệu năng mạng, bước đầu tiên quan trọng nhất là gì?
A. Thu thập dữ liệu hiệu năng
*B. Xác định mục tiêu đánh giá
C. Phân tích kết quả đánh giá
D. Xây dựng mô hình mạng

Câu 21. Bước nào sau đây là quan trọng nhất trong việc đánh giá hiệu năng mạng?
A. Đo tốc độ upload
B. Thiết lập đường truyền mới
*C. Phân tích dữ liệu thu thập được
D. Đo tốc độ download

Câu 22. Chúng ta cần xem xét yếu tố nào khi lập kế hoạch để cải tiến hiệu năng mạng?
A. Đánh giá độ trễ của mạng
B. Tối ưu hóa đường truyền
C. Thiết kế sơ đồ mạng
*D. Cả A và B đúng

Câu 23. Khi thực hiện đánh giá hiệu năng mạng, nhiệm vụ của người phân tích dữ liệu hiệu năng mạng là làm gì?
A. Ghi lại các cải tiến của mạng
*B. Xác định vấn đề và nguyên nhân
C. Sử dụng mạng bình thường
D. Đo tốc độ mạng

Câu 25. Để cải thiện hiệu năng mạng, bạn cần làm gì sau khi xác định vấn đề?
A. Thay đổi nhà cung cấp dịch vụ internet
B. Cài đặt thêm mạng LAN để chia nhỏ mạng
C. Thay đổi phần mềm ứng dụng
*D. Lập kế hoạch và triển khai giải pháp
                `
            },
            {
                id: "dg_hn_c2",
                title: "Bài 02: Chương 2 - Các tiến trình ngẫu nhiên",
                data: `
Câu 26. Sự kiện ngẫu nhiên là sự kiện như thế nào trong ngữ cảnh của đánh giá hiệu năng mạng?
A. Một sự kiện xảy ra với tỷ lệ cố định và không thay đổi
*B. Một sự kiện xảy ra một cách ngẫu nhiên và không thể dự đoán được
C. Một sự kiện xảy ra một cách dự đoán nhưng không có thứ tự cụ thể
D. Một sự kiện xảy ra một cách dự đoán và có thứ tự cụ thể

Câu 27. Trong đánh giá hiệu năng mạng, tại sao chúng ta cần phải quan tâm đến sự kiện ngẫu nhiên?
A. Vì chúng chỉ xảy ra trong một số trường hợp nhất định và không ảnh hưởng đến mạng
*B. Vì chúng có thể ảnh hưởng đến hiệu suất hoạt động của mạng
C. Vì chúng không quan trọng trong việc đánh giá hiệu năng mạng
D. Vì chúng không ảnh hưởng đến hiệu suất hoạt động của mạng

Câu 28. Trong quá trình đánh giá hiệu năng mạng, biến ngẫu nhiên là biến như thế nào?
A. Một biến mà giá trị của nó được xác định trước và không thay đổi
B. Một biến mà giá trị của nó hoàn toàn có thể được dự đoán trước
*C. Một biến mà giá trị của nó thay đổi ngẫu nhiên trong một phạm vi cố định
D. Một biến mà giá trị của nó không thể đo lường được

Câu 29. Độ lệch chuẩn của một biến ngẫu nhiên đo lường điều gì?
A. Sự đồng nhất của dữ liệu
B. Sự tập trung của dữ liệu quanh giá trị trung bình
C. Sự biến đổi của dữ liệu
*D. Sự phân tán của dữ liệu từ giá trị trung bình

Câu 30. Trong tiến trình ngẫu nhiên, khoảng cách thời gian giữa hai gói tin liên tiếp được gửi đi là bao nhiêu?
A. Tăng dần
B. Bằng nhau
*C. Ngẫu nhiên
D. Được xác định trước

Câu 31. Trong một tiến trình ngẫu nhiên, các gói tin được gửi đi ở tần suất như thế nào?
A. Đều đặn và cố định
*B. Ngẫu nhiên theo thời gian
C. Đều đặn và ngẫu nhiên
D. Ngẫu nhiên theo khoảng cách

Câu 32. Trong mô hình mạng, yếu tố nào thường được mô hình hóa bằng tiến trình ngẫu nhiên?
A. Khoảng cách truyền tải
B. Tốc độ truyền tải
C. Luồng dữ liệu
*D. Gói tin

Câu 33. Trong mạng, một ví dụ về sự kiện ngẫu nhiên có thể là gì?
A. Thứ tự các bước thực hiện trong quá trình huấn luyện mạng
*B. Thời gian phản hồi của một yêu cầu web từ người dùng
C. Số lượng lượt truy cập vào một trang web trong một ngày
D. Số lượng người dùng đăng ký trong một tháng

Câu 34. Trong đánh giá hiệu năng mạng, tại sao quan tâm đến các đặc trưng của biến ngẫu nhiên?
A. Vì chúng có thể làm giảm độ tin cậy của mô hình mạng
B. Vì chúng không ảnh hưởng đến hiệu suất hoạt động của mạng
*C. Vì chúng là yếu tố quyết định ảnh hưởng đến hiệu suất hoạt động của mạng
D. Vì chúng không quan trọng trong việc đánh giá hiệu năng mạng

Câu 35. Khi sử dụng tiến trình ngẫu nhiên để đánh giá hiệu năng mạng, yếu tố nào quan trọng nhất cần cân nhắc?
A. Độ tin cậy của phần cứng
B. Tốc độ truyền dữ liệu
C. Sự phân tán của dữ liệu
*D. Sự ngẫu nhiên của các gói tin

Câu 36. Để sử dụng tiến trình ngẫu nhiên một cách hiệu quả, điều gì là cần thiết?
A. Đo lường khoảng cách giữa các thiết bị
*B. Xác định thời gian và khoảng cách ngẫu nhiên
C. Một phần mềm đặc biệt để gửi gói tin
D. Sử dụng nhiều máy tính hơn

Câu 37. Tiến trình ngẫu nhiên trong mạng có thể giúp chúng ta xác định vấn đề nào sau đây?
A. Độ ổn định của phần cứng
B. Bảo mật mạng
*C. Sự chậm trễ trong đường truyền
D. Sự phân tán của dữ liệu

Câu 38. Tiến trình ngẫu nhiên giúp kiểm tra và đánh giá hiệu năng mạng trong điều kiện nào?
A. Điều kiện mô phỏng
B. Điều kiện lý thuyết
C. Điều kiện lý tưởng
*D. Điều kiện thực tế

Câu 39. Mục đích chính của việc sử dụng sự kiện ngẫu nhiên trong đánh giá hiệu năng mạng là gì?
A. Đo lường băng thông mạng
B. Kiểm tra sự ổn định của đường truyền
*C. Mô phỏng các tình huống thực tế
D. Phân tích cấu trúc mạng

Câu 40. Trong tiến trình ngẫu nhiên, gói tin được sinh ra dựa trên yếu tố nào?
A. Khoảng cách cố định
B. Thời gian cố định
C. Thời gian và khoảng cách cố định
*D. Thời gian và khoảng cách ngẫu nhiên
                `
            },
            {
                id: "dg_hn_c3",
                title: "Bài 03: Chương 3 - Hệ thống mạng hàng đợi",
                data: `
Câu 42. Trong hệ thống mạng hàng đợi, mục đích chính của hàng đợi là gì?
A. Lưu trữ dữ liệu
B. Đảm bảo các luồng dữ liệu không bị mất
*C. Xử lý dữ liệu theo thứ tự đến
D. Chuyển tiếp dữ liệu giữa các nút

Câu 43. Một hệ thống mạng hàng đợi có thể giúp giải quyết vấn đề gì?
A. Tăng khả năng tải đối với các nút mạng
B. Trễ trong quá trình truyền dẫn dữ liệu
C. Tình trạng quá tải hệ thống mạng
*D. Tất cả các phương án trên

Câu 44. Thời gian phục vụ một gói tin trung bình được tính như thế nào?
A. Thời gian để gửi gói tin đó từ bit đầu tiên đến bit cuối cùng từ máy tính đến switch
*B. Thời gian để gửi gói tin đó từ bit đầu tiên đến bit cuối cùng trên đường truyền
C. Thời gian để gửi gói tin đó từ bit đầu tiên đến bit cuối cùng từ máy tính đến cổng mạng internet
D. Thời gian để gửi gói tin đó từ bit đầu tiên đến bit cuối cùng từ máy tính đến router

Câu 45. Ý nghĩa của "K" trong ký hiệu M/M/1/K là gì?
A. Tốc độ phục vụ tối đa
B. Thời gian phục vụ trung bình
*C. Số lượng kết nối tối đa trong hệ thống
D. Tốc độ đến không đổi

Câu 46. Trong một mạng hàng đợi nội tiếp, các giao diện của các thiết bị đầu cuối được kết nối trực tiếp với gì?
A. Mạng vô tuyến
B. Hệ thống truy cập
*C. Thiết bị chuyển mạch
D. Mạng ngoại vi

Câu 47. Mô hình hàng đợi đơn có bao nhiêu trạm phục vụ?
A. 2
B. Nhiều
*C. 1
D. Cả 1 và Nhiều đều đúng

Câu 48. Mô hình hàng đợi Kendall được sử dụng để mô phỏng và đánh giá hiệu năng của loại hệ thống nào?
A. Hệ thống mạng toàn cầu
B. Hệ thống điều khiển
*C. Hệ thống hàng đợi
D. Hệ thống mạng cục bộ

Câu 49. Mô hình M/M/1/k là phiên bản nâng cao của mô hình nào sau đây?
A. M/M/c
*B. M/M/1
C. M/M/∞
D. M/M/1/c

Câu 50. Trong hệ thống mạng Jackson mở, hiệu suất hệ thống được đo lường bằng chỉ số nào?
A. Số lượng người dùng
B. Số lượng thiết bị
*C. Thời gian chờ đợi trung bình
D. Thời gian trung bình phục vụ

Câu 51. Tham số nào thường được dùng để đánh giá hiệu năng của một hệ thống hàng đợi?
A. Kích thước bộ nhớ đệm
B. Số lượng yêu cầu đã được phục vụ
C. Số lượng người dùng đồng thời
*D. Thời gian chờ trung bình

Câu 52. Hệ thống mạng hàng đợi thường được sử dụng để làm gì?
A. Giảm tải cho các nút trong mạng
B. Tăng cường tính bảo mật của mạng
*C. Quản lý lưu lượng mạng và xử lý dữ liệu
D. Tăng tốc độ truyền dữ liệu trên mạng

Câu 53. Trong một hệ thống mạng hàng đợi, thời gian xử lý trung bình của mỗi gói dữ liệu có tính chất gì?
A. Phụ thuộc vào tình trạng của mạng
B. Được xác định trước
*C. Phụ thuộc vào kích thước của gói dữ liệu
D. Không đổi

Câu 54. Trong một hệ thống mạng hàng đợi, khái niệm "thông lượng" đề cập đến điều gì?
A. Số lượng gói dữ liệu được xử lý mỗi giây
B. Số lượng các nút trong mạng
C. Tốc độ truyền dẫn tối đa của mạng
*D. Số lượng gói dữ liệu mà một nút mạng có thể chuyển tiếp trong một khoảng thời gian cố định

Câu 55. Các giao diện trong mạng hàng đợi nội tiếp có thể được kết nối qua đường dẫn nào?
A. Cáp quang
B. Không có phương án nào đúng
*C. Cả cáp đồng trục và cáp quang đều đúng
D. Cáp đồng trục

Câu 56. Trong mạng hàng đợi nội tiếp, vấn đề nào thường xảy ra khi tải cao?
A. Giảm số lượng hàng đợi
B. Tăng băng thông
*C. Tăng độ trễ
D. Giảm độ trễ

Câu 57. Trong hệ thống mạng Jackson mở, thời gian chờ đợi trung bình được tính như thế nào?
A. Thời gian chờ đợi trung bình = Thời gian trung bình phục vụ * (Tỷ lệ đến - Tỷ lệ phục vụ)
*B. Thời gian chờ đợi trung bình = Thời gian trung bình phục vụ / (1 - Tỷ lệ đến / Tỷ lệ phục vụ)
C. Thời gian chờ đợi trung bình = Thời gian trung bình phục vụ / (Tỷ lệ đến - Tỷ lệ phục vụ)
D. Thời gian chờ đợi trung bình = Thời gian trung bình phục vụ * (1 - Tỷ lệ đến / Tỷ lệ phục vụ)

Câu 58. Trong hệ thống mạng Jackson mở, điều gì quyết định tỷ lệ phục vụ của từng thiết bị?
A. Số lượng người dùng
B. Băng thông của mạng
*C. Thời gian trung bình phục vụ
D. Số lượng thiết bị

Câu 59. Trong hệ thống mạng Jackson đóng, hiệu suất hệ thống được đo lường bằng chỉ số nào?
A. Số lượng hàng đợi
*B. Thời gian chờ đợi trung bình
C. Số lượng người dùng
D. Thời gian trung bình phục vụ

Câu 60. Trong hệ thống mạng Jackson đóng, điều gì xác định tỷ lệ phục vụ của từng thiết bị?
A. Băng thông của mạng
B. Số lượng người dùng
C. Số lượng hàng đợi
*D. Thời gian trung bình phục vụ

Câu 61. Mô hình hàng đợi M/M/1 thường được sử dụng để mô phỏng các loại hệ thống nào?
A. Hệ thống có nhiều hàng đợi và một máy chủ
*B. Hệ thống có một máy chủ và một hàng đợi
C. Hệ thống không giới hạn về số lượng máy chủ hoặc hàng đợi
D. Hệ thống có nhiều máy chủ và một hàng đợi

Câu 62. Mô hình M/M/1 mô tả loại hình hệ thống hàng đợi nào?
A. Hệ thống đa kênh, tự phục vụ
B. Hệ thống đa kênh, phục vụ bởi nhiều kênh
*C. Hệ thống đơn kênh, tự phục vụ
D. Hệ thống đơn kênh, phục vụ bởi nhiều kênh

Câu 63. Mô hình hàng đợi M/M/1 thường được sử dụng để mô phỏng các loại hệ thống nào?
A. Hệ thống có nhiều máy chủ và một hàng đợi
B. Hệ thống không giới hạn về số lượng máy chủ hoặc hàng đợi
*C. Hệ thống có một máy chủ và một hàng đợi
D. Hệ thống có nhiều hàng đợi và một máy chủ

Câu 64. Trong mạng hàng đợi nội tiếp, điều gì ảnh hưởng đến độ trễ truyền dẫn?
A. Số lượng hàng đợi
B. Băng thông của các giao diện
C. Tốc độ truyền dữ liệu
*D. Tất cả các phương án

Câu 65. Trong mạng hàng đợi nội tiếp, điều gì gây ra hiện tượng treo hệ thống?
A. Sự cố với thiết bị
B. Độ trễ lớn
*C. Số lượng hàng đợi quá ít
D. Băng thông hạn chế

Câu 66. Trong hệ thống mạng Jackson mở, nếu tỷ lệ đến là 0.9 gói/s và tỷ lệ phục vụ là 1 gói/s, thì thời gian chờ đợi trung bình sẽ là bao nhiêu?
A. 7 giây
*B. 9 giây
C. 10 giây
D. 8 giây

Câu 67. Trong hệ thống mạng Jackson mở, nếu tỷ lệ đến là 1 gói/s và tỷ lệ phục vụ là 0.5 gói/s, thì thời gian chờ đợi trung bình sẽ là bao nhiêu?
A. 2 giây
B. 4 giây
*C. Vô hạn
D. 6 giây

Câu 68. Trong hệ thống mạng Jackson đóng, nếu tỷ lệ đến là 0.6 gói/s và tỷ lệ phục vụ là 0.8 gói/s, thì thời gian chờ đợi trung bình sẽ là bao nhiêu?
A. 4 giây
*B. 5 giây
C. 8 giây
D. 6 giây

Câu 69. Trong hệ thống mạng Jackson đóng, nếu tỷ lệ đến là 0.8 gói/s và tỷ lệ phục vụ là 1 gói/s, thì thời gian chờ đợi trung bình sẽ là bao nhiêu?
A. 6 giây
B. 8 giây
C. 7 giây
*D. 5 giây

Câu 70. Trong hệ thống mạng Jackson mở, nếu tỷ lệ đến là 0.6 gói/s và tỷ lệ phục vụ là 0.8 gói/s, thì hệ thống có ổn định không?
A. Không, vì tỷ lệ đến lớn hơn tỷ lệ phục vụ
B. Có, vì tỷ lệ đến lớn hơn tỷ lệ phục vụ
C. Không, vì tỷ lệ đến nhỏ hơn tỷ lệ phục vụ
*D. Có, vì tỷ lệ đến nhỏ hơn tỷ lệ phục vụ
                `
            },
            {
                id: "dg_hn_c4",
                title: "Bài 04: Chương 4 - Chất lượng dịch vụ (QoS) và mô phỏng NS2",
                data: `
Câu 74. QoS là viết tắt của thuật ngữ nào?
A. Quick of Service
*B. Quality of Service
C. Quantity of Service
D. Quantitative of Service

Câu 75. Trong mạng, đánh giá QoS có vai trò gì quan trọng?
A. Tăng cường bảo mật
B. Tối ưu hóa hiệu suất hệ thống
*C. Đảm bảo chất lượng dịch vụ
D. Đảm bảo tính an toàn

Câu 76. Trong mô hình Best-Effort, dữ liệu được truyền đi như thế nào?
A. Dựa trên cam kết chất lượng dịch vụ
*B. Mà không có cam kết về chất lượng dịch vụ
C. Theo quy tắc FIFO (First In, First Out)
D. Theo thứ tự được sắp xếp

Câu 77. Mô hình dịch vụ tích hợp cung cấp các dịch vụ gì cho người dùng?
A. Dịch vụ đa phương tiện
B. Dịch vụ tích hợp dữ liệu và thoại
*C. Tất cả các phương án trên
D. Dịch vụ đa dạng như truyền thông, video, và dữ liệu

Câu 78. Mô hình dịch vụ phân biệt trong mạng là gì?
A. Một mô hình mà tất cả các dịch vụ được xử lý một cách như nhau
B. Một mô hình chỉ dành cho các dịch vụ cao cấp
*C. Một mô hình cho phép các dịch vụ được xử lý với ưu tiên khác nhau dựa trên yêu cầu của chúng
D. Một mô hình chỉ dành cho các dịch vụ cơ bản

Câu 79. MPLS là viết tắt của từ gì?
A. Maximum Power Line Speed
B. Mobile Packet Loss Sensitivity
C. Managed Private Link Service
*D. Multi-Protocol Label Switching

Câu 80. Phần mềm NS2 được viết bằng ngôn ngữ nào?
A. Python
B. JavaScript
C. Java
*D. C++

Câu 81. NS2 là phần mềm như thế nào?
A. Phần mềm toán học
B. Phần mềm văn bản
*C. Phần mềm giả lập mạng
D. Phần mềm chính ảnh

Câu 82. Phần mềm NS2 được cài đặt trên hệ điều hành nào?
A. Windows (đóng)
B. Fedora
C. Windows Server
*D. Linux

Câu 83. Để tạo và quản lý mạng trong NS2, người dùng cần phải cài đặt và sử dụng công cụ nào?
A. Wireshark
B. Packet Tracer
C. GNS3 (Graphical Network Simulator 3)
*D. Nam (Network Animator)

Câu 84. Trong NS2, lệnh "set" được sử dụng để làm gì?
A. Tạo các đối tượng mạng
B. Ghi dữ liệu vào file
*C. Khởi tạo các biến
D. Thực hiện các phép toán

Câu 85. Trong NS2, để kết thúc quá trình mô phỏng, lệnh nào được sử dụng?
A. end
B. exit
C. close
*D. finish

Câu 86. Trong NS2, đối tượng "Link" dùng để làm gì?
A. Đại diện cho các gói tin
B. Đại diện cho các thiết bị mạng
C. Đại diện cho các luồng dữ liệu
*D. Đại diện cho các kết nối mạng

Câu 87. Những thông số cần thiết để thực hiện đánh giá chất lượng dịch vụ QoS là gì?
A. Số lượng người dùng và tải trọng mạng
*B. Băng thông, độ trễ, và sự ổn định
C. Sự bảo mật và an toàn
D. Tốc độ truyền dữ liệu và độ tin cậy

Câu 88. Đánh giá chất lượng dịch vụ (QoS) có thể được thực hiện bằng những cách nào?
A. Thực hiện kiểm tra thủ công bằng cách gửi dữ liệu và đo lường kết quả
B. Sử dụng công cụ và phần mềm đánh giá mạng
*C. Tất cả đều đúng
D. Theo dõi các chỉ số tự động từ các thiết bị mạng

Câu 89. Trong cấu trúc Best-Effort, khi lưu lượng mạng tăng cao, điều gì có thể xảy ra?
A. Tăng băng thông
B. Giảm độ trễ
C. Tăng tốc độ truyền tải
*D. Tăng tỷ lệ mất gói tin

Câu 90. Trong mô hình Best-Effort, khi mạng trở nên quá tải, điều gì có thể xảy ra với các ứng dụng thời gian thực?
A. Ứng dụng sẽ được ưu tiên
*B. Ứng dụng có thể bị gián đoạn hoặc mất kết nối
C. Ứng dụng sẽ tự động chuyển sang mạng khác
D. Ứng dụng sẽ hoạt động bình thường

Câu 92. Mô hình cung cấp chất lượng dịch vụ Cấu trúc dịch vụ tích hợp (Integrated Services) chủ yếu áp dụng cho loại mạng nào?
A. Mạng rộng (WAN)
B. Mạng khu vực đô thị (MAN)
C. Mạng cục bộ (LAN)
*D. Internet

Câu 93. Trong mô hình Cấu trúc dịch vụ tích hợp, gói tin có thể được ưu tiên dựa trên cái gì?
A. Loại dịch vụ
B. Port đích
C. Địa chỉ IP nguồn
*D. Tất cả các phương án

Câu 94. Trong mô hình Cấu trúc dịch vụ tích hợp, gói tin được gán với loại dịch vụ nào để đảm bảo chất lượng dịch vụ?
A. Service Level Agreement (SLA)
B. Simple Network Management Protocol (SNMP)
*C. Quality of Service (QoS)
D. Real-time Transport Protocol (RTP)

Câu 95. Mô hình dịch vụ phân biệt có thể giúp giải quyết vấn đề gì trong mạng?
A. Tăng băng thông
*B. Tăng hiệu suất mạng
C. Tất cả các phương án
D. Tăng trễ mạng

Câu 96. Mục đích chính của mô hình dịch vụ phân biệt là gì?
A. Đảm bảo rằng mọi dịch vụ đều được xử lý trong thời gian ngắn nhất có thể
B. Tạo ra một môi trường mạng hoàn hảo không có sự trễ
*C. Cho phép ưu tiên các dịch vụ quan trọng hơn so với các dịch vụ ít quan trọng hơn
D. Đảm bảo rằng mọi dịch vụ đều nhận được cùng một mức độ chất lượng

Câu 97. Trong mô hình dịch vụ phân biệt, dịch vụ nào thường được ưu tiên cao nhất?
A. Trình duyệt web
B. Email
C. Tất cả các dịch vụ đều nhận được ưu tiên như nhau
*D. Truyền thông video

Câu 98. Việc đánh giá chất lượng dịch vụ (QoS) có thể giúp phát hiện ra điều gì?
A. Các vấn đề về bảo mật mạng
B. Các lỗi phần cứng
C. Các vấn đề về phần mềm
*D. Các nút cổ chai trong mạng

Câu 99. Công cụ mô phỏng nào sau đây thường được sử dụng để mô phỏng mạng lớn và phức tạp?
A. Wireshark
B. Packet Tracer
*C. NS-2
D. GNS3

Câu 100. Đánh giá chất lượng dịch vụ (QoS) có ý nghĩa như thế nào đối với người quản trị mạng?
A. Tăng cường tính bảo mật của các thiết bị mạng
B. Giảm số lượng người dùng trên mạng
C. Tăng dung lượng lưu trữ
*D. Xác định và sửa chữa các vấn đề hiệu suất trước khi chúng ảnh hưởng đến người dùng

Câu 101. Trong đánh giá thống kê kết quả mô phỏng, phân tích phân phối xác suất của băng thông có thể được sử dụng để làm gì?
A. Xác định ảnh hưởng của băng thông đến độ trễ mạng
B. Phân loại các loại lưu lượng mạng
C. Đánh giá hiệu suất mạng
*D. Xác định tần suất sử dụng băng thông của mạng

Câu 102. Dữ liệu nào sẽ xác định tốc độ mô phỏng của NS2?
A. Số lượng thiết bị trong mạng
B. Định dạng dữ liệu đầu vào
*C. Công suất CPU
D. Số lượng giao thức sử dụng

Câu 103. Đâu là tên của một loại giao thức phổ biến và được hỗ trợ trong phần mềm NS2?
A. DNS (Domain Name System)
B. DHCP (Dynamic Host Configuration Protocol)
*C. TCP (Transmission Control Protocol)
D. FTP (File Transfer Protocol)

Câu 104. Phần mềm NS2 được phát triển chủ yếu để mô phỏng và nghiên cứu về thông tin gì trong mạng máy tính?
A. Bảo mật mạng
*B. Giao thức và các thuật toán mạng
C. Thiết kế phần cứng mạng
D. Phần mềm mạng

Câu 105. Lý do nào sau đây không phải là mục tiêu của việc đánh giá chất lượng dịch vụ (QoS)?
A. Cải thiện độ tin cậy của mạng
B. Đáp ứng yêu cầu của người dùng cuối
C. Tối ưu hóa hiệu suất mạng
*D. Đảm bảo tính bảo mật cao nhất

Câu 106. Việc đánh giá QoS có vai trò gì trong việc đảm bảo các yêu cầu về độ trễ và băng thông?
A. Tăng dung lượng lưu trữ của máy chủ
B. Giảm chi phí bảo trì hệ thống
*C. Đảm bảo mạng hoạt động ổn định dưới tải cao
D. Giảm số lượng người dùng trên mạng

Câu 107. Định dạng file đầu ra của mô phỏng NS2 thường có phần mở rộng là gì?
A. .txt
B. .csv
C. .xml
*D. .tr

Câu 108. Để mô phỏng mạng không dây trong NS2, cần sử dụng gói phần mềm nào?
A. ns-2-adhoc
B. ns-2-mobility
C. ns-2-wireless-ext
*D. ns-2-wireless

Câu 109. Trong NS2, đối tượng "Agent" được sử dụng để làm gì?
A. Quản lý tốc độ truyền tải dữ liệu
B. Quản lý lưu trữ dữ liệu
*C. Quản lý các kết nối và giao tiếp giữa các nút mạng
D. Quản lý bảo mật mạng

Câu 110. Để mô phỏng lưu lượng trong NS2, đối tượng nào được sử dụng?
A. Node
B. Queue
C. Link
*D. Traffic Generator

Câu 111. Khi so sánh với cấu trúc có QoS, cấu trúc Best-Effort có nhược điểm gì?
A. Cấu hình phức tạp hơn
*B. Không đảm bảo chất lượng dịch vụ
C. Tốn kém hơn
D. Khả năng mở rộng kém hơn

Câu 112. Cấu trúc Best-Effort có đảm bảo độ trễ thấp cho các gói tin không?
A. Chỉ khi mạng không quá tải
B. Có
*C. Không
D. Chỉ khi sử dụng cùng với QoS

Câu 113. Để bắt đầu mô phỏng trong NS2, lệnh nào được sử dụng?
A. $ns simulate
B. $ns start
*C. $ns run
D. $ns begin

Câu 114. Trong NS2, để thiết lập tốc độ truyền tải của một đường truyền, lệnh nào được sử dụng?
A. $ns set-link-rate $link $bw
*B. $ns set-link-bw $link $bw
C. $ns set-bw $link $bw
D. $ns set-link-speed $link $bw

Câu 115. Trong NS2, lệnh nào được sử dụng để thiết lập độ trễ của một đường truyền?
A. $ns set-link-time $link $delay
B. $ns set-link-latency $link $delay
C. $ns set-delay $link $delay
*D. $ns set-link-delay $link $delay

Câu 116. Trong mô hình Cấu trúc dịch vụ tích hợp, điều gì cần được cân nhắc khi xác định các yêu cầu về QoS?
A. Địa chỉ IP của máy chủ
B. Loại dịch vụ
*C. Yêu cầu về băng thông và độ trễ của ứng dụng
D. Tất cả các phương án

Câu 117. Việc đánh giá QoS thường được thực hiện ở đâu?
A. Tại máy chủ dịch vụ
B. Tại bộ định tuyến (router) trên mạng
*C. Tất cả các phương án
D. Tại máy tính cá nhân của người dùng

Câu 118. Mô hình dịch vụ phân biệt đặt yêu cầu gì đối với mạng?
A. Sự hoàn hảo về mọi mặt
B. Tất cả các phương án
C. Khả năng tự động điều chỉnh
*D. Khả năng phân loại và ưu tiên dịch vụ

Câu 119. MPLS có thể cung cấp chất lượng dịch vụ (QoS) như thế nào so với các phương pháp truyền dẫn khác?
A. QoS trong MPLS chỉ phụ thuộc vào giao thức IP
B. Không cung cấp QoS
*C. MPLS cung cấp QoS dựa trên phân loại và ưu tiên dữ liệu
D. QoS trong MPLS phụ thuộc vào băng thông

Câu 120. Trong NS2, để thêm một Agent vào một Node, lệnh nào được sử dụng?
*A. node attach-agent agent
B. ns connect-agent node $agent
C. $ns attach-agent $node $agent
D. node add-agent agent

Câu 121. Trong NS2, định nghĩa một đường truyền giữa hai nút mạng được thực hiện bằng lệnh nào?
A. $ns path
B. $ns link
C. $ns connect
*D. $ns duplex-link

Câu 122. Mô hình Cấu trúc dịch vụ tích hợp thường sử dụng giao thức nào để xác định và quản lý QoS?
A. RTP (Real-time Transport Protocol)
B. SNMP (Simple Network Management Protocol)
*C. RSVP (Resource Reservation Protocol)
D. SIP (Session Initiation Protocol)
                `
            },
            {
                id: "dg_hn_tong_hop",
                title: "Bài 05: Đề ôn tập tổng hợp (50 câu)",
                data: `
Câu 1. Khi thực hiện đánh giá hiệu năng mạng, liệu có bắt buộc phải xây dựng mô hình thử nghiệm vật lý thực tế hay không?
A. Bắt buộc phải triển khai mạng vật lý trước
B. Không cần làm gì vì các thiết bị tự tối ưu
*C. Không bắt buộc, có thể dùng các phương pháp mô phỏng hoặc phân tích toán học để đánh giá hiệu quả và tiết kiệm chi phí
D. Chỉ cần thiết bị mạng đắt tiền nhất

Câu 2. Để đánh giá năng lực băng thông của một truyền truyền thông, tham số nào sau đây cần được tập trung đo đạc?
A. Số chân kết nối của đầu cắm cáp mạng
*B. Tốc độ truyền tải dữ liệu tối đa (Throughput)
C. Số lượng icon hiển thị trên màn hình
D. Tên của hệ điều hành trên máy trạm

Câu 3. Thứ tự chuẩn mực của các bước trong quy trình đánh giá hiệu năng mạng là:
A. Thiết lập sơ đồ -> Đánh giá -> Thu thập dữ liệu
B. Báo cáo -> Đánh giá hiệu năng -> Tối ưu hóa -> Thu thập dữ liệu
C. Mua thiết bị mới -> Chạy thử nghiệm -> Viết kết luận
*D. Xác định mục tiêu -> Thu thập dữ liệu & xây dựng mô hình -> Triển khai mô hình -> Đánh giá hiệu năng -> Tối ưu hóa -> Báo cáo

Câu 4. Khi lập kế hoạch cải tiến và nâng cấp hiệu năng cho hệ sinh thái mạng, người thiết kế cần xem xét yếu tố nào?
*A. Đánh giá độ trễ hiện tại của mạng và tối ưu hóa năng lực đường truyền
B. Giảm số lượng quản trị viên mạng
C. Cấm tất cả người dùng truy cập Internet
D. Thay đổi toàn bộ dây cáp mạng sang màu đỏ

Câu 5. Các hoạt động nào sau đây KHÔNG thuộc quy trình nghiệp vụ của việc đánh giá hiệu năng mạng?
A. Đánh giá tỷ lệ mất gói dưới tải cao
B. Phân tích thống kê luồng dữ liệu
C. Đo thông lượng và thời gian trễ của liên kết
*D. Đo nhiệt độ vỏ máy vi tính và kiểm tra độ phân giải màn hình hiển thị

Câu 6. Trong lý thuyết xác suất áp dụng cho mạng máy tính, phân phối Poisson thường được sử dụng phổ biến nhất để mô hình hóa đại lượng nào?
A. Độ dài cố định của một địa chỉ MAC
B. Tốc độ lan truyền của sóng điện từ
*C. Số lượng gói tin hoặc cuộc gọi đến hệ thống trong một khoảng thời gian xác định
D. Kích thước cổng nối tiếp trên thiết bị

Câu 7. Phân phối thời gian giữa hai lần đến liên tiếp tương ứng với tiến trình Poisson là phân phối nào?
A. Phân phối chuẩn (Normal Distribution)
*B. Phân phối hàm mũ (Exponential Distribution)
C. Phân phối đều (Uniform Distribution)
D. Phân phối nhị thức (Binomial Distribution)

Câu 8. Tính chất "Không nhớ" (Memoryless property) là đặc tính độc đáo của phân phối xác suất nào sau đây?
*A. Phân phối hàm mũ
B. Phân phối Beta
C. Phân phối Gamma
D. Phân phối Poisson

Câu 9. Trong một tiến trình ngẫu nhiên mô phỏng mạng, các gói tin được sinh ra dựa trên những tham số ngẫu nhiên nào?
A. Số serial của bộ chuyển mạch
B. Cấu hình phần cứng của nhà sản xuất
C. Thời gian sản xuất thiết bị
*D. Thời gian xuất hiện và khoảng thời gian giữa các gói

Câu 10. Để mô phỏng lưu lượng mạng sát với thực tế của mạng Internet ngày nay (có tính chất bùng nổ và tự tương đồng), người ta thường dùng phân phối nào?
A. Phân phối đều
*B. Phân phối Pareto hoặc Weibull (Heavy-tailed distribution)
C. Phân phối tam giác
D. Hằng số xác định

Câu 11. Trong một mạng hàng đợi tiếp (Tandem Queues), dòng dữ liệu ra khỏi một trạm phục vụ sẽ trở thành:
A. Dữ liệu rác
B. Dòng phản hồi âm về máy tính phát
*C. Dòng dữ liệu vào của trạm phục vụ kế tiếp
D. Dòng dữ liệu bị hủy bỏ ngay lập tức

Câu 12. Mô hình hàng đợi đơn kênh phục vụ có một máy chủ thường được ký hiệu là:
*A. M/M/1
B. M/M/c
C. G/G/m
D. M/M/∞

Câu 13. Định lý Jackson phát biểu rằng trong một mạng hàng đợi Jackson mở ở trạng thái cân bằng:
A. Tỷ lệ mất gói luôn bằng 0
B. Không có gói tin nào phải xếp hàng
*C. Mỗi nút hàng đợi hoạt động độc lập như một hệ thống hàng đợi M/M/m riêng biệt
D. Tất cả các hàng đợi đều có độ dài bằng nhau

Câu 14. Ký hiệu "D" trong mô hình hàng đợi M/D/1 thể hiện điều gì?
A. Thời gian phục vụ biến thiên ngẫu nhiên
B. Hàng đợi bị vô hiệu hóa
C. Thời gian phục vụ phụ thuộc vào nhiệt độ môi trường
*D. Thời gian phục vụ là một hằng số xác định (Deterministic)

Câu 15. Trong hệ thống mạng Jackson đóng, thông số nào sau đây luôn được duy trì không đổi?
*A. Tổng số lượng công việc (gói tin) lưu hành trong mạng
B. Thời gian phục vụ tại mỗi trạm
C. Tỷ lệ đến từ môi trường ngoài
D. Băng thông của các liên kết

Câu 16. Trong hệ thống mạng Jackson đóng, nếu tỷ lệ đến λ = 0.6 gói/s và tỷ lệ phục vụ μ = 0.8 gói/s, thời gian trung bình một gói tin lưu lại trong một trạm là bao nhiêu?
A. 8 giây
B. 4 giây
*C. 5 giây
D. 6 giây

Câu 17. Trong hệ thống mạng Jackson đóng, nếu tỷ lệ đến λ = 1.0 gói/s và tỷ lệ phục vụ μ = 1.0 gói/s, thời gian chờ đợi trung bình trong hệ thống là:
A. 7 giây
*B. 5 giây
C. 6 giây
D. 8 giây

Câu 18. Hệ thống mạng Jackson mở có tỷ lệ đến λ = 0.6 gói/s và tỷ lệ phục vụ μ = 0.8 gói/s có ổn định không?
A. Không, vì tỷ lệ đến lớn hơn tỷ lệ phục vụ
B. Không bao giờ ổn định
C. Cần thêm máy chủ phụ
*D. Có, vì tỷ lệ đến nhỏ hơn tỷ lệ phục vụ (λ < μ)

Câu 19. Thành phần cơ bản cấu thành nên một mô hình mạng hàng đợi toán học bao gồm:
*A. Các nút phục vụ (Servers), Hàng đợi (Queues), Bộ điều khiển kỷ luật và Các luồng dữ liệu đến
B. Nguồn điện dự phòng UPS
C. Cáp mạng, Đầu cắm RJ45, Bàn phím máy tính
D. Màn hình điều khiển và Chuột quang

Câu 20. Kỷ luật hàng đợi SIRO (Service In Random Order) hoạt động theo cách:
A. Yêu cầu nào đến trước phục vụ trước
*B. Các yêu cầu được chọn ra phục vụ theo trình tự ngẫu nhiên, không phụ thuộc vào thời điểm đến
C. Độ dài của dây cắm nguồn thiết bị
D. Chỉ phụ thuộc vào giá bán của thiết bị

Câu 21. Kỹ thuật loại hàng đợi Fair Queuing (FQ) nhằm mục tiêu gì?
A. Ưu tiên gói tin có kích thước bé nhất
B. Dành toàn bộ băng thông cho luồng dữ liệu lớn nhất
C. Loại bỏ các gói tin đến từ mạng bên ngoài
*D. Đảm bảo chia sẻ tài nguyên băng thông công bằng giữa các luồng lưu lượng khác nhau

Câu 22. Cơ chế QoS nào cho phép mạng dành riêng tài nguyên một cách tuyệt đối (Hard QoS) cho từng luồng?
A. Mô hình Best-Effort
*B. Mô hình Dịch vụ Tích hợp (IntServ)
C. Kỹ thuật chia sẻ file ngang hàng
D. Mô hình Mạng cục bộ thuần túy

Câu 23. Cơ chế QoS nào áp dụng phương pháp gần nhân độ ưu tiên mềm (Soft QoS) dựa trên lớp dịch vụ (Class of Service)?
*A. Mô hình Dịch vụ Phân biệt (DiffServ)
B. Mô hình Dịch vụ Tích hợp (IntServ)
C. Giao thức HTTP 1.1
D. Bảng định tuyến RIP

Câu 24. Trong tiêu đề gói tin IPv4, trường nào được sử dụng bởi kiến trúc DiffServ để phân loại gói tin?
A. Trường Total Length
B. Trường Header Checksum
C. Trường Version
*D. Trường DS Field (Differentiated Services Field - 8 bits)

Câu 25. Trong kiến trúc DiffServ, khái niệm PHB (Per-Hop Behavior) mô tả điều gì?
A. Khoảng cách vật lý giữa hai bước nhảy
B. Thời gian sống của gói tin (TTL)
C. Thuật toán mã hóa mật khẩu giữa hai router
*D. Hành vi chuyển tiếp và mức độ ưu tiên đối với một nút mạng cụ thể đối với một lớp gói tin nhất định

Câu 26. Hai loại hành vi chuyển tiếp PHB tiêu chuẩn phổ biến nhất trong mạng DiffServ là:
A. First In (FI) và Last Out (LO)
B. Fast Path (FP) và Slow Path (OP)
C. Encrypted Path (EP) và Open Path (OP)
*D. Expedited Forwarding (EF) và Assured Forwarding (AF)

Câu 27. Hành vi chuyển tiếp Expedited Forwarding (EF) trong DiffServ được thiết kế riêng để cung cấp dịch vụ gì?
*A. Dịch vụ độ trễ cực thấp, mất gói cực thấp tương tự như một đường thuê riêng chuyên dụng (Leased Line)
B. Dịch vụ truyền file dung lượng khổng lồ không cần vội
C. Dịch vụ gửi thư rác
D. Dịch vụ duyệt web ngoại tuyến

Câu 28. Trong kỹ thuật MPLS, thiết bị nằm ở biên mạng có nhiệm vụ phân loại lưu lượng và gắn nhãn nhị phân vào gói tin được gọi là:
A. Modem quang
*B. LER (Label Edge Router)
C. LSR (Label Switching Router)
D. Core Switch

Câu 29. Trong kỹ thuật MPLS, các router nằm sâu bên trong lõi mạng chỉ đọc và tráo đổi nhãn để chuyển tiếp gói tin được gọi là:
A. Proxy Server
*B. LSR (Label Switching Router)
C. Firewall
D. LER (Label Edge Router)

Câu 30. Tập hợp các gói tin đi vào mạng MPLS có cùng thuộc tính và đi cùng một tuyến đường chuyển tiếp tiếp nhận được gọi là:
A. MTU (Maximum Transmission Unit)
B. TTL (Time to Live)
*C. FEC (Forwarding Equivalence Class)
D. RTT (Round Trip Time)

Câu 31. Trong phần mềm mô phỏng NS2, cấu trúc mô phỏng được phân tầng theo hình nào?
*A. Tầng điều khiển kịch bản (Tcl/OTcl) và tầng thực thi cơ chế mạng hiệu năng cao (C++)
B. Tầng cơ sở dữ liệu SQL và Tầng giao diện HTML
C. Tầng máy ảo Java và Tầng giao tiếp Web
D. Tầng điện thoại di động và Tầng máy tính để bàn

Câu 32. Đối tượng Link trong NS2 được sử dụng với vai trò gì?
A. Đại diện cho card đồ họa
B. Đại diện cho thuật toán mã hóa
C. Đại diện cho ứng dụng phần mềm của người dùng
*D. Đại diện cho kết nối vật lý và kênh truyền dẫn giữa các nút mạng

Câu 33. Đối tượng Agent trong môi trường NS2 chịu trách nhiệm:
A. Hiển thị hình ảnh động lên màn hình
B. Cung cấp nguồn điện cho máy ảo
*C. Đóng gói và quản lý các giao thức mạng ở tầng giao vận và mạng (như TCP, UDP)
D. Quét virus cho các tập tin mô phỏng

Câu 34. Để tạo một tệp ghi lại diễn biến chuyển động dùng cho Network Animator trong NS2, ta dùng lệnh:
A. open trace.exe
*B. set nf [open out.nam w] kèm theo ns namtrace-all
C. capture screen
D. draw graph

Câu 35. Trong NS2, cấu trúc hàng đợi nào triển khai cơ chế loại bỏ gói tin ngẫu nhiên khi phát hiện nguy cơ tắc nghẽn sớm?
*A. RED (Random Early Detection)
B. Priority Queue
C. FIFO
D. DropTail

Câu 36. Một tệp kịch bản mô phỏng mạng cho công cụ NS2 có phần mở rộng thường là:
A. .py
B. .cpp
*C. .tcl
D. .java

Câu 37. Để thiết lập kích thước hàng đợi tối đa của một liên kết giữa nút n0 và n1 thành 50 gói trong NS2, cú pháp là:
*A. $ns queue-limit $n0 $n1 50
B. $n0 limit 50
C. $n0 link queue 50
D. $ns set-buffer $n0 $n1 50

Câu 38. Trong NS2, lệnh nào sau đây liên kết một đối tượng ứng dụng phát lưu lượng (như FTP) vào một Agent vận chuyển (như TCP)?
A. $tcp connect $ftp
*B. $ns link $ftp $tcp
C. $ftp bind $tcp
D. $tcp attach-agent $ftp

Câu 39. Việc đánh giá phân phối xác suất độ trễ mạng trong các công cụ mô phỏng giúp:
*A. Đánh giá mức độ ổn định và độ giật (Jitter) của đường truyền
B. Tăng gấp đôi băng thông cáp quang
C. Xóa các tập tin tạm trong hệ điều hành
D. Giảm độ phân giải video

Câu 40. Yếu tố nào sau đây quyết định băng thông sẵn có (Available Bandwidth) của một liên kết mạng?
A. Nhãn hiệu của card mạng
*B. Băng thông định mức trừ đi phần băng thông đang bị chiếm dụng bởi các luồng lưu lượng khác
C. Chiều dài của dây cáp mạng
D. Số lượng người dùng đang truy cập

Câu 41. Trong mô hình mạng Jackson mở, nếu lưu lượng vào một nút vượt quá khả năng phục vụ (λ > μ), biện pháp xử lý bắt buộc trong thực tế là gì?
A. Ép hệ thống chạy không cần nguồn điện
*B. Hủy bớt các gói tin mới hoặc áp dụng cơ chế điều khiển lưu lượng (Backpressure/Flow Control)
C. Tắt màn hình máy chủ
D. Bỏ qua không cần kiểm soát

Câu 42. Hiện tượng nghẽn mạng (Congestion) xảy ra khi:
A. Máy tính bị nhiễm virus cục bộ
B. Không có người dùng nào truy cập mạng
*C. Nhu cầu gửi dữ liệu qua một nút mạng vượt quá khả năng xử lý hoặc băng thông truyền dẫn của nút đó
D. Dây cáp mạng quá dài

Câu 43. Trong bộ giao thức TCP/IP, thuật toán nào của TCP đảm nhận việc phát hiện và phản ứng với nghẽn mạng?
*A. TCP Slow Start và Congestion Avoidance
B. DNS Query
C. ICMP Ping
D. ARP Request

Câu 44. Thuật toán Random Early Detection (RED) giúp tránh hiện tượng đồng bộ toàn cục (Global Synchronization) của TCP bằng cách:
A. Chỉ cho phép các gói tin UDP đi qua
B. Tắt cổng mạng khi có tải cao
C. Hủy toàn bộ gói tin khi hàng đợi chạm ngưỡng 100%
*D. Bỏ rơi gói tin một cách ngẫu nhiên và có xác suất tăng dần theo độ dài hàng đợi trung bình

Câu 45. Đại lượng nào sau đây thể hiện phần trăm thời gian mà một kênh phục vụ thực tế bận xử lý yêu cầu?
A. Độ biến động trễ
B. Tỷ lệ mất gói
*C. Hệ số tải / Hệ số sử dụng (ρ = λ/μ)
D. Băng thông tối đa

Câu 46. Kỹ thuật hàng đợi Deficit Round Robin (DRR) được phát triển nhằm mục đích:
A. Giảm độ trễ về mức 0 tuyệt đối
*B. Cho phép cơ chế Round Robin xử lý công bằng đối với các gói tin có kích thước biến động không đều
C. Loại bỏ nhu cầu sử dụng bộ nhớ đệm
D. Thay thế hoàn toàn giao thức TCP

Câu 47. Trong các tham số của giao thức RSVP, thông điệp PATH do thực thể nào phát đi?
*A. Nguồn phát (Sender) gửi dọc theo tuyến đường đến đích để thông báo đặc tính lưu lượng
B. Máy chủ DNS gửi
C. Nút nhận gửi ngược về nguồn để giữ chỗ
D. Bộ định tuyến lõi gửi để hủy kết nối

Câu 48. Trong giao thức RSVP, thông điệp RESV do thực thể nào tạo ra để chính thức yêu cầu cấp phát và giữ trước tài nguyên?
A. Bộ chuyển mạch Ethernet Layer 2
B. Nguồn phát (Sender)
C. Toàn mạng Internet
*D. Thiết bị nhận (Receiver)

Câu 49. Một mô hình hàng đợi M/M/1 có λ = 5 gói/s và μ = 10 gói/s. Thời gian trung bình một gói tin nằm chờ trong hàng đợi trước khi được phục vụ (Wq) là:
A. 1.0 giây
*B. 0.1 giây
C. 0.5 giây
D. 0.2 giây

Câu 50. Ưu điểm lớn nhất của công cụ mô phỏng mạng như NS2 so với việc thử nghiệm trực tiếp trên mạng thực tế là:
A. Luôn luôn nhanh hơn tốc độ truyền tín hiệu ánh sáng
B. Không bao giờ cần đến máy tính để chạy
*C. Khả năng thiết lập, tái lập các kịch bản mạng phức tạp với chi phí thấp và không gây rủi ro gián đoạn hệ thống đang hoạt động
D. Tự động viết báo cáo luận văn tốt nghiệp
                `
            },
            {
                id: "dg_hn_toan_xs",
                title: "Bài : Chương 2 - Các tiến trình ngẫu nhiên",
                data: `
Câu 1. Khi cố định một kết cục sơ cấp ω ∈ Ω, hàm số x(t) = X(t, ω) theo thời gian t được gọi là gì của tiến trình ngẫu nhiên?
A. Hàm mật độ xác suất liên kết.
B. Hàm tương quan chéo.
*C. Hàm hiện thực (hoặc quỹ đạo mẫu).
D. Hàm đặc trưng của tiến trình.

Câu 2. Cho hằng số thực a và biến ngẫu nhiên X. Tính chất nào sau đây của kỳ vọng là chính xác?
A. E[aX] = a²E[X].
B. E[aX] = E[X] + a.
*C. E[aX] = aE[X].
D. E[aX] = aE[X].

Câu 3. Tiến trình ngẫu nhiên X(t) được gọi là dừng theo nghĩa rộng (Wide-Sense Stationary - WSS) khi thỏa mãn những điều kiện nào?
A. Mọi hàm phân phối hữu hạn chiều không đổi qua phép tịnh tiến thời gian.
*B. Kỳ vọng mX(t) là hằng số và RX(t1, t2) chỉ phụ thuộc vào hiệu τ = t2 - t1.
C. Phương sai của tiến trình luôn tiến về 0 khi thời gian tăng dần.
D. Các mẫu lấy tại mọi thời điểm hoàn toàn độc lập với nhau.

Câu 4. Cho hai biến cố bất kỳ A và B. Công thức cộng xác suất tổng quát là:
A. P(A ∪ B) = P(A) + P(B).
B. P(A ∪ B) = P(A) + P(B) + P(A ∩ B).
C. P(A ∪ B) = P(A)P(B).
*D. P(A ∪ B) = P(A) + P(B) - P(A ∩ B).

Câu 5. Biến ngẫu nhiên X tuân theo phân bố Bernoulli với tham số thành công p. Kỳ vọng và phương sai của X lần lượt là:
A. E[X] = p(1-p) và Var(X) = p.
B. E[X] = 1-p và Var(X) = p.
C. E[X] = p và Var(X) = p².
*D. E[X] = p và Var(X) = p(1-p).

Câu 6. Hàm kỳ vọng toán mX(t) của tiến trình ngẫu nhiên X(t) được định nghĩa như thế nào?
A. mX(t) = ∫ X(t)dt.
*B. mX(t) = E[X(t)].
C. mX(t) = Var(X(t)).
D. mX(t) = E[X(t)²].

Câu 7. Cho hằng số thực a và biến ngẫu nhiên X. Biểu thức nào sau đây thể hiện đúng tính chất của phương sai?
A. Var(aX + b) = aVar(X) + b.
*B. Var(aX + b) = a²Var(X).
C. Var(aX + b) = a²Var(X) + b.
D. Var(aX + b) = aVar(X).

Câu 8. Biến ngẫu nhiên liên tục X tuân theo phân bố mũ với tham số tỷ lệ λ > 0 có hàm mật độ xác suất dạng f(x) = λe^(-λx) với x ≥ 0. Kỳ vọng E[X] và phương sai Var(X) của X lần lượt là:
A. E[X] = λ và Var(X) = λ².
*B. E[X] = 1/λ và Var(X) = 1/λ².
C. E[X] = 1/λ và Var(X) = 1/λ.
D. E[X] = 1/λ² và Var(X) = 1/λ².

Câu 9. Theo hệ tiên đề Kolmogorov, với mọi biến cố A, xác suất P(A) phải thỏa mãn điều kiện nào?
A. P(A) > 0.
*B. 0 ≤ P(A) ≤ 1.
C. -1 ≤ P(A) ≤ 1.
D. P(A) ≤ 1.

Câu 10. Công thức tính xác suất có điều kiện của biến cố A khi biết biến cố B đã xảy ra (P(B) > 0) là:
A. P(A|B) = P(A)P(A ∩ B).
B. P(A|B) = P(B)P(A).
*C. P(A|B) = P(A ∩ B) / P(B).
D. P(A|B) = P(A)P(B).

Câu 11. Trong lý thuyết xác suất, tập hợp tất cả các kết cục có thể xảy ra của một phép thử ngẫu nhiên được gọi là:
*A. Không gian mẫu.
B. Biến cố ngẫu nhiên.
C. Trường sự kiện.
D. Tập rời rạc.

Câu 12. Hàm tự tương quan (Autocorrelation function) RX(t1, t2) của tiến trình ngẫu nhiên X(t) được định nghĩa bằng biểu thức nào?
*A. RX(t1, t2) = E[X(t1)X(t2)].
B. RX(t1, t2) = E[X(t1)] + E[X(t2)].
C. RX(t1, t2) = Var(X(t1) - X(t2)).
D. RX(t1, t2) = E[X(t2)]E[X(t1)].

Câu 13. Công thức tính phương sai Var(X) thông qua các mô-men của biến ngẫu nhiên là gì?
*A. Var(X) = E[X²] - (E[X])².
B. Var(X) = E[X²] + (E[X])².
C. Var(X) = (E[X])² - E[X²].
D. Var(X) = E[X] - E[X²].

Câu 14. Công thức xác suất P(X = k) của biến ngẫu nhiên nhị thức X ~ B(n, p) với k ∈ {0, 1, ..., n} là:
A. P(X = k) = p^k(1-p)^(n-k).
B. P(X = k) = A_n^k * p^k(1-p)^(n-k).
C. P(X = k) = C_n^k * p^(n-k)(1-p)^k.
*D. P(X = k) = C_n^k * p^k(1-p)^(n-k).

Câu 15. Đối với một tiến trình ngẫu nhiên dừng theo nghĩa rộng X(t), giá trị RX(0) của hàm tự tương quan biểu diễn đặc trưng vật lý nào?
A. Điện áp một chiều tức thời của tín hiệu.
*B. Công suất trung bình toàn phần của tiến trình.
C. Tần số dao động lớn nhất của tiến trình.
D. Băng thông thông tin của kênh truyền.

Câu 16. Cho biến ngẫu nhiên X tuân theo phân bố đều trên đoạn [2, 10]. Kỳ vọng và phương sai của X lần lượt là:
A. E[X] = 6 và Var(X) = 8.
B. E[X] = 5 và Var(X) = 4.
*C. E[X] = 6 và Var(X) = 16/3.
D. E[X] = 6 và Var(X) = 64/3.

Câu 17. Hai biến cố A và B được gọi là xung khắc khi và chỉ khi điều kiện nào sau đây thỏa mãn?
A. A ∪ B = Ω.
B. P(A) + P(B) = 1.
*C. A ∩ B = ∅.
D. P(A ∩ B) = P(A)P(B).

Câu 18. Cho {H1, H2, ..., Hn} là một hệ biến cố đầy đủ. Công thức xác suất đầy đủ để tính xác suất của biến cố A là:
A. P(A) = ∑ P(Hi|A)P(A).
B. P(A) = ∏ P(A|Hi).
*C. P(A) = ∑ P(Hi)P(A|Hi).
D. P(A) = ∑ [P(Hi) + P(A|Hi)].

Câu 19. Quy tắc kinh nghiệm 3-sigma (68-95-99.7) đối với biến ngẫu nhiên có phân bố chuẩn X ~ N(μ, σ²) cho biết xác suất P(μ - 2σ ≤ X ≤ μ + 2σ) xấp xỉ bằng bao nhiêu?
A. 68,27%
B. 99,73%
*C. 95,45%
D. 50,00%

Câu 20. Kỳ vọng toán học E[X] của biến ngẫu nhiên rời rạc X nhận các giá trị xi với xác suất pi được tính bằng công thức nào?
A. E[X] = ∑ pi.
B. E[X] = ∑ xi²pi.
*C. E[X] = ∑ xipi.
D. E[X] = (1/n)∑ xi.

Câu 21. Đồ thị hàm mật độ xác suất của biến ngẫu nhiên tuân theo phân bố chuẩn N(μ, σ²) có đặc điểm đối xứng qua đường thẳng nào?
A. x = σ.
*B. x = μ.
C. x = 0.
D. x = σ².

Câu 22. Hàm phân phối xác suất tích lũy F(x) của biến ngẫu nhiên X được định nghĩa theo biểu thức nào?
A. F(x) = P(X = x).
B. F(x) = P(X > x).
*C. F(x) = P(X ≤ x).
D. F(x) = P(X ≥ x).

Câu 23. Phát biểu nào sau đây phản ánh đúng tính chất của hàm phân phối tích lũy F(x)?
A. F(x) là hàm luôn giảm và tuần hoàn.
B. F(x) có thể nhận giá trị âm nếu x < 0.
*C. F(x) là hàm không giảm và liên tục phải.
D. lim(x→+∞) F(x) = +∞.

Câu 24. Tiến trình ngẫu nhiên {X(t), t ∈ T} về mặt toán học được hiểu là:
*A. Một họ các biến ngẫu nhiên phụ thuộc tham số t.
B. Một hàm số đơn trị tiền định theo biến số t.
C. Một giá trị ngẫu nhiên duy nhất cố định theo thời gian.
D. Một ma trận số thực xác định trước.

Câu 25. Để chuyển đổi biến ngẫu nhiên X ~ N(μ, σ²) về biến ngẫu nhiên chuẩn hóa Z ~ N(0, 1), phép biến đổi nào được sử dụng?
A. Z = (μ - X)/σ.
*B. Z = (X - μ)/σ.
C. Z = (X - μ)/σ².
D. Z = (X + μ)/σ.

Câu 26. Công thức Bayes dùng để xác định đại lượng nào sau đây?
A. Xác suất tiền nghiệm P(Hk).
B. Xác suất đồng thời P(A ∩ Ω).
*C. Xác suất hậu nghiệm P(Hk|A).
D. Không gian mẫu mới sau phép thử.

Câu 27. Biến ngẫu nhiên liên tục X có phân bố đều trên đoạn [a, b], ký hiệu X ~ U(a, b). Hàm mật độ xác suất f(x) của X trên đoạn [a, b] là:
A. f(x) = 1/(b + a).
B. f(x) = b - a.
*C. f(x) = 1/(b - a).
D. f(x) = x/(b - a).

Câu 28. Biến ngẫu nhiên X về mặt toán học được định nghĩa là:
A. Một số thực ngẫu nhiên không có quy luật.
B. Một tập hợp con của không gian mẫu Ω.
*C. Một hàm số ánh xạ từ Ω vào R.
D. Một biến số nhận giá trị ngẫu nhiên chỉ từ 0 đến 1.

Câu 29. Tính chất đặc trưng độc nhất của phân bố mũ so với các phân bố liên tục khác là tính chất nào?
*A. Tính không nhớ (Memoryless property).
B. Tính đối xứng hoàn hảo qua gốc tọa độ.
C. Kỳ vọng luôn bằng phương sai.
D. Hàm phân phối tích lũy là hàm tuyến tính.

Câu 30. Phương sai của biến ngẫu nhiên nhị thức X ~ B(n, p) được tính bằng công thức nào?
A. Var(X) = np.
B. Var(X) = n(1-p).
*C. Var(X) = np(1-p).
D. Var(X) = np(1-p).
                `
            }
        ]
    },
    
    {
        id: "mon_mang_khong_day",
        name: "Môn: Mạng Không Dây & Di Động",
        quizzes: [
            {
                id: "mkd_c1",
                title: "Bài 01: Trắc nghiệm Chương 1",
                data: `
Câu 1. Tốc độ truyền dữ liệu cơ bản của GSM là?
A. 2.4 Kbps
*B. 9.6 Kbps
C. 64 Kbps
D. 144 Kbps

Câu 2. Trong GSM, mỗi kênh tần số được chia thành bao nhiêu khe thời gian?
A. 4
*B. 8
C. 16
D. 32

Câu 3. CDMA trong mạng di động có nghĩa là?
*A. Code Division Multiple Access
B. Cellular Division Mobile Access
C. Channel Division Multiple Access
D. Code Digital Mobile Access

Câu 4. Hệ thống TACS được phát triển ở quốc gia nào?
A. Mỹ
*B. Anh
C. Nhật Bản
D. Thụy Điển

Câu 5. Đặc điểm nào sau đây là của 5G so với 4G?
A. Độ trễ thấp hơn (dưới 1ms)
B. Mật độ kết nối cao hơn
C. Tốc độ cực cao (lên đến 10Gbps)
*D. Tất cả các đáp án trên

Câu 6. GPRS được gọi là công nghệ?
A. 2G
*B. 2.5G
C. 3G
D. 3.5G

Câu 7. Công nghệ 2G sử dụng kỹ thuật gì?
A. Chuyển mạch tương tự
*B. Chuyển mạch số
C. FDMA thuần túy
D. AMPS

Câu 8. Công nghệ nào sau đây KHÔNG phải là tiền thân của 4G (thuộc thế hệ tiền 4G/3G nâng cao)?
A. HSPA+
B. LTE
C. WiMAX
*D. EDGE

Câu 9. Thế hệ mạng nào đầu tiên hỗ trợ SMS?
A. 1G
*B. 2G
C. 3G
D. 4G

Câu 10. Hệ thống NMT-450 hoạt động trên băng tần nào?
*A. 450 MHz
B. 800 MHz
C. 900 MHz
D. 1800 MHz

Câu 11. CDMA2000 là phiên bản nâng cấp của?
A. GSM
*B. IS-95
C. AMPS
D. TACS

Câu 12. EDGE được xem là công nghệ?
A. 2G
*B. 2.75G
C. 3G

Câu 13. 4G sử dụng công nghệ đa truy nhập nào?
A. CDMA
*B. OFDMA
C. FDMA
D. TDMA

Câu 14. Tốc độ tối đa của 4G (LTE-Advanced) có thể đạt?
A. 100 Mbps
*B. 1 Gbps
C. 10 Gbps
D. 100 Gbps

Câu 15. Sự khác biệt chính giữa 3G và 4G là?
A. 4G sử dụng CDMA, 3G sử dụng OFDMA
*B. 4G sử dụng OFDMA, 3G sử dụng W-CDMA
C. 4G là tương tự, 3G là số
D. Không có khác biệt đáng kể

Câu 16. Khái niệm "ngăn tổ ong" (cellular) được đề xuất bởi ai?
A. Guglielmo Marconi
*B. D. H. Ring
C. Alexander Graham Bell
D. Martin Cooper

Câu 17. Tần số hoạt động của 5G là?
A. 150-900 MHz
B. 1.8-2.5 GHz
*C. 3-300 GHz (bao gồm sub-6GHz và mmWave)
D. 400-800 THz

Câu 18. Tốc độ tối đa lý thuyết của EDGE là bao nhiêu?
A. 64 Kbps
*B. 384 Kbps
C. 2 Mbps
D. 14.4 Mbps

Câu 19. Tại sao 2G vẫn được sử dụng lâu dài hơn 3G?
A. Tiết kiệm năng lượng hơn
B. Phủ sóng rộng hơn
C. Thiết bị đầu cuối rẻ hơn
*D. Tất cả các đáp án trên

Câu 20. Tốc độ tối đa của HSPA+ (Evolved HSPA) có thể đạt?
A. 14.4 Mbps
*B. 56 Mbps (hoặc lên đến 168 Mbps tùy theo số lượng sóng mang)
C. 168 Mbps
D. 1 Gbps

Câu 21. Đặc điểm nào KHÔNG phải của 4G?
A. Hỗ trợ lưu lượng IP
*B. Cần liên kết điều khiển chuyên dụng kiểu chuyển mạch kênh (Circuit Switched)
C. Hỗ trợ tính di động tốt
D. Hỗ trợ nhiều công nghệ vô tuyến

Câu 22. Tốc độ tối đa lý thuyết của GPRS có thể đạt?
A. 9.6 Kbps
B. 64 Kbps
*C. 171.2 Kbps
D. 384 Kbps

Câu 23. LTE là viết tắt của?
*A. Long Term Evolution
B. Local Telephone Exchange
C. Long Telephone Extension
D. Local Terminal Equipment

Câu 24. Kỹ thuật "handoff" (handover) trong mạng di động là gì?
*A. Chuyển cuộc gọi/kết nối giữa các cell (trạm thu phát)
B. Chuyển đổi giữa các nhà cung cấp dịch vụ
C. Thay đổi công nghệ mạng
D. Chuyển đổi giữa thoại và dữ liệu

Câu 25. Kỹ thuật nào được sử dụng trong 1G để điều chế tín hiệu thoại?
*A. FM (Frequency Modulation)
B. AM (Amplitude Modulation)
C. QAM (Quadrature Amplitude Modulation)
D. PSK (Phase Shift Keying)

Câu 26. Hệ thống điện thoại di động công cộng đầu tiên xuất hiện năm nào?
A. 1936
*B. 1946 (MTS do AT&T ra mắt tại St. Louis, Mỹ)
C. 1956
D. 1966

Câu 27. Lý do chính để phát triển 5G là?
A. Nhu cầu về tốc độ cao hơn
B. Hỗ trợ IoT quy mô lớn
C. Độ trễ thấp hơn
*D. Tất cả các đáp án trên

Câu 28. 3G cho phép các dịch vụ nào sau đây?
A. Truy cập Internet
B. Truyền tín hiệu video
C. Dịch vụ đa phương tiện
*D. Tất cả các đáp án trên

Câu 29. 3G sử dụng công nghệ đa truy nhập chủ đạo nào?
A. FDMA
B. TDMA
*C. W-CDMA
D. OFDMA

Câu 30. Hệ thống AMPS hoạt động trên băng tần nào?
A. 450 MHz
*B. 850 MHz
C. 900 MHz
D. 1800 MHz

Câu 31. UMTS là viết tắt của?
*A. Universal Mobile Telecommunication System
B. United Mobile Telephone Service
C. Universal Mobile Telephone Standard
D. United Mobile Telecommunication Standard

Câu 32. 4G được chuẩn hóa bởi tổ chức nào?
A. 3GPP
B. IEEE
C. ITU-R
*D. Cả a và c

Câu 34. Ưu điểm của CDMA so với GSM là?
A. Sử dụng phổ tần hiệu quả hơn
B. Chất lượng thoại tốt hơn
C. Giảm xác suất rớt cuộc gọi (Soft Handoff)
*D. Tất cả các đáp án trên

Câu 35. Công nghệ 1G có đặc điểm nào sau đây?
A. Dung lượng cao
B. Xác suất rớt cuộc gọi thấp
*C. Kỹ thuật chuyển mạch tương tự (Analog)
D. Bảo mật tốt

Câu 36. Hệ thống di động thế hệ 1G sử dụng công nghệ nào?
A. Số hóa
*B. Tương tự (Analog)
C. Chuyển mạch gói
D. CDMA

Câu 37. GSM là viết tắt của?
*A. Global System for Mobile Communications
B. General Standard for Mobile
C. Global Service Mobile
D. General System Mobile

Câu 38. Công nghệ nào cho phép nhiều người dùng chia sẻ cùng một tần số bằng cách phân biệt bằng mã?
A. FDMA
B. TDMA
*C. CDMA
D. OFDMA

Câu 39. Thế hệ mạng nào đầu tiên sử dụng công nghệ số (Digital)?
A. 1G
*B. 2G
C. 3G
D. 4G

Câu 40. Công nghệ nào sau đây KHÔNG thuộc thế hệ 2G?
A. GSM
B. CDMA (IS-95)
*C. AMPS
D. D-AMPS

Câu 41. Thế hệ mạng nào có tốc độ chuẩn quy định từ 144 Kbps đến 2 Mbps?
A. 2G
*B. 3G
C. 4G
D. 5G
                `
            },
            {
                id: "mkd_c2",
                title: "Bài 02: Chương 2 - Kiến trúc mạng di động",
                data: `
Câu 1. Giao diện kết nối giữa RNC và SGSN là:
*A. Iu
B. Uu
C. Gn
D. Gp

Câu 2. SGSN có vai trò gì?
A. Kết nối giữa các mạng 2G
*B. Quản lý di động và tính cước
C. Truy cập truyền hình số
D. Quản lý mã hóa tin nhắn

Câu 3. MME thực hiện chức năng nào?
A. Quản lý chuyển mạch gói
*B. Quản lý di động
C. Cấp phát kênh vô tuyến
D. Kết nối mạng cố định

Câu 4. UMTS sử dụng công nghệ truy cập nào?
A. FDMA
B. TDMA
*C. WCDMA
D. CDMA2000

Câu 5. SMSC có chức năng:
A. Điều khiển thiết bị
*B. Chuyển tin nhắn
C. Định tuyến dữ liệu
D. Quản lý thuê bao

Câu 6. Dải tần hoạt động phổ biến của UMTS là:
A. 850-1800 MHz
*B. 900-2100 MHz
C. 700-2600 MHz
D. 1800-2300 MHz

Câu 7. Ai lưu trữ khóa bí mật trong mạng GSM?
A. HLR
B. VLR
*C. AUC
D. BTS

Câu 8. TDD và FDD là kỹ thuật:
A. Mã hóa dữ liệu
B. Chuyển đổi gói tin
*C. Phân kênh lên và xuống
D. Nhảy tần số

Câu 9. MSC thực hiện chức năng nào?
A. Định tuyến
B. Đăng ký
C. Xác thực
*D. Tất cả các đáp án trên

Câu 10. UMTS là sự kế thừa của công nghệ nào?
*A. GSM
B. CDMA
C. PSTN
D. EDGE

Câu 11. UMTS là viết tắt của:
A. Universal Mobile Telephone System
*B. Universal Mobile Telecommunication System
C. Unified Mobile Technology System
D. United Mobile Telecom Standard

Câu 12. CN (Core Network) chia thành mấy phần chính?
A. 1
*B. 2
C. 3
D. 4

Câu 13. Mạng lõi EPC KHÔNG có thành phần nào sau đây?
A. SGW
B. MME
*C. GGSN
D. PDN GW

Câu 14. USIM là gì?
A. Thẻ SIM tiêu chuẩn cho GSM
*B. Module nhận dạng thuê bao UMTS
C. Bộ mã hóa mạng
D. Thiết bị truyền phát vô tuyến

Câu 15. Trong SMS, kênh được sử dụng là:
A. TCH
B. AGCH
*C. SDCCH
D. RACH

Câu 16. Số MSISDN là:
A. Số nhận dạng thiết bị
*B. Số điện thoại người dùng
C. Mã nhận dạng mạng
D. Số seri thẻ SIM

Câu 17. ME (Mobile Equipment) là:
A. Trạm BTS
B. Trạm thu phát tín hiệu
*C. Thiết bị di động đầu cuối
D. Cổng truyền dữ liệu

Câu 18. Cơ sở dữ liệu quản lý IMEI gọi là:
A. HLR
B. VLR
*C. EIR
D. MSC

Câu 19. LTE được phát triển dựa trên:
*A. GSM và UMTS
B. CDMA và 3G
C. PSTN và EDGE
D. 5G NR

Câu 20. HLR lưu thông tin gì?
A. Thiết bị
B. Vị trí người dùng
C. Thông tin thuê bao
*D. Cả B và C

Câu 21. GSM là viết tắt của:
A. General System for Mobile
*B. Global System for Mobile
C. Global Standard for Mobile
D. General Standard Mobile

Câu 22. Số nhận dạng IMSI gồm các phần nào?
*A. MCC + MNC + MSIN
B. CC + NDC + SN
C. TAC + FAC + SNR
D. MSRN + GMSC

Câu 23. Kênh nào dùng để cấp phát trong quá trình thiết lập cuộc gọi GSM?
A. RACH
*B. AGCH
C. TCH
D. Tất cả đều đúng

Câu 24. BSS gồm hai thành phần chính là:
A. BTS và HLR
*B. BTS và BSC
C. MSC và BSC
D. BTS và MSC

Câu 25. Quá trình gọi từ thuê bao A đến B, số của thuê bao B sẽ được gửi đến?
A. BTS
B. BSC
*C. MSC
D. PSTN

Câu 26. Mạng GSM gồm mấy phân hệ chính?
A. 2
*B. 3
C. 4
D. 5

Câu 27. Quá trình Paging dùng trong cuộc gọi nào?
A. Từ MS đến MS
B. Từ MS đến PSTN
*C. PSTN đến MS
D. Từ MS đến BSC

Câu 28. Hệ thống GSM được chính thức đề xuất vào năm nào?
*A. 1990
B. 1991
C. 1992
D. 1993

Câu 29. Danh sách đen trong EIR nghĩa là gì?
A. Thiết bị hợp lệ
B. Thiết bị cần theo dõi
*C. Thiết bị không được phép dùng
D. Thiết bị đã xác thực

Câu 30. BSC có vai trò gì?
A. Giao tiếp với người dùng
*B. Điều khiển và quản lý trạm BTS
C. Chuyển mạch cuộc gọi
D. Xác thực thiết bị

Câu 31. Thiết bị có mã định danh IMEI gồm bao nhiêu phần?
A. 2
B. 3
*C. 4
D. 5

Câu 33. RAN là viết tắt của:
A. Remote Area Network
*B. Radio Access Network
C. Router Access Network
D. Rapid Area Network

Câu 34. LTE là viết tắt của:
A. Long Transfer Evolution
B. Large Terminal Evolution
*C. Long Term Evolution
D. Long Time Efficiency

Câu 35. Tên gọi khác của mạng truy nhập vô tuyến UMTS là:
A. CN
B. EPC
*C. UTRAN
D. PSTN

Câu 36. RNC thực hiện chức năng nào sau đây?
A. Định tuyến Internet
*B. Điều khiển tài nguyên vô tuyến
C. Cấp phát IP
D. Bảo mật truyền tin

Câu 37. Dịch vụ nào KHÔNG phải là dịch vụ GSM cung cấp?
A. SMS
*B. Gọi video
C. Fax
D. CBS

Câu 38. Phân hệ nào chịu trách nhiệm xử lý cuộc gọi trong GSM?
A. BSS
B. NMS
*C. SS
D. BTS

Câu 39. Kiến trúc mạng LTE đơn giản nhờ:
A. Loại bỏ HLR
B. Gộp eNodeB và MME
*C. Gồm chỉ eNodeB và EPC
D. Không cần BTS

Câu 40. Phân hệ đa phương tiện bao gồm:
A. eNodeB
*B. UE và USIM
C. SGSN và GGSN
D. HLR và VLR

Câu 41. GGSN đảm nhiệm chức năng:
A. Quản lý mã hóa
B. Giao tiếp vô tuyến
*C. Chuyển mạch gói ra Internet
D. Giao tiếp với thiết bị người dùng
                `
            },
            {
                id: "mkd_c2_bai03",
                title: "Bài 03: Chương 2 - Công nghệ 2G, 3G, 4G, 5G",
                data: `
Câu 1. 2G viết tắt bởi cụm từ:
*A. Second Generation
B. Second Global System
C. General Packet Radio Service
D. Wireless Cellular Technology

Câu 2. Đặc điểm cơ bản của hệ thống di động 4G
*A. Hỗ trợ nhiều công nghệ vô tuyến khác nhau
B. Không cần liên kết điều khiển
C. Hỗ trợ tính di động tốt
D. Cả ba phương án trên

Câu 3. Công nghệ 3G có gì khác với 2G?
*A. Hỗ trợ nhiều dịch vụ hơn, như: email, web, ... Đóng gói cả tín hiệu Voice và data. Nâng cao, cải thiện tốc độ truyền dữ liệu
B. Hỗ trợ nhiều dịch vụ hơn, như: email, web, ... Đóng gói cả tín hiệu Voice và Data
C. Hỗ trợ nhiều dịch vụ hơn, như: email, web, ... Nâng cao, cải thiện tốc độ truyền dữ liệu
D. Hỗ trợ nhiều dịch vụ hơn, như: email, web, ... Hỗ trợ bảo mật và Hỗ trợ WiMAX

Câu 4. Kênh TCH trong mạng GSM có nhiệm vụ:
A. Truyền tin báo hiệu
*B. Truyền tải dữ liệu thoại và phi thoại
C. Phân tích số thuê bao
D. Định tuyến gói tin

Câu 5. Một tế bào LTE có thể hỗ trợ tối thiểu bao nhiêu UE (với 5MHz)?
A. 50
B. 75
*C. 100
D. 15

Câu 6. Chuẩn kỹ thuật nào được sử dụng chủ yếu trong mạng 5G?
*A. NR (New Radio)
B. WiMAX
C. LTE
D. GSM

Câu 7. Tính năng vượt trội của công nghệ mạng 2G so với công nghệ mạng 1G là:
A. Cung cấp dịch vụ dữ liệu cho di động
B. Sử dụng hiệu quả hơn phổ tần số vô tuyến cho phép nhiều người dùng hơn trên mỗi dải tần.
C. Tín hiệu được mã hoá dưới dạng tín hiệu kỹ thuật số
*D. Cả ba đáp án trên

Câu 8. Node B trong UMTS tương đương với thiết bị nào trong GSM?
A. MSC
B. HLR
*C. BTS
D. SGSN

Câu 9. LTE là viết tắt của từ gì?
*A. Long-Term Evolution
B. Low-Tier Efficiency
C. Large-Transmission Equipment
D. Localized Technical Enhancement

Câu 10. Công nghệ truy cập vô tuyến trong LTE là:
A. CDMA
B. TDMA
*C. OFDMA
D. FDMA

Câu 11. LTE hỗ trợ kích thước ô (cell size) như thế nào?
A. Chỉ hỗ trợ tế bào nhỏ (micro cell)
*B. Hỗ trợ từ vài mét đến vài km
C. Hạn chế tế bào lớn
D. Chỉ hỗ trợ trong nhà

Câu 12. Mạng di động sử dụng công nghệ nào sau đây được gọi là mạng thế hệ 3G
*A. W-CDMA
B. GPRS
C. HSCSD
D. GSM

Câu 13. Mạng di động sử dụng công nghệ 2G sử dụng phương pháp đa truy cập nào?
*A. TDMA
B. CDMA
C. PDMA
D. GPRS

Câu 14. Chức năng phân tập macro được thực hiện tại:
A. Node B
*B. RNC
C. MSC
D. UE

Câu 15. PCRF dùng để làm gì?
A. Quản lý mã hóa
B. Kiểm tra thiết bị
*C. Quản lý cước phí dịch vụ
D. Định tuyến tin nhắn

Câu 16. EPS là sự kết hợp của:
A. EPC và RNC
*B. EPC và E-UTRAN
C. SGSN và PDN
D. MME và Node B

Câu 17. Những cải tiến của công nghệ 4G so với thế hệ 3G là:
A. Tốc độ truyền, cải thiện hiệu năng, chất lượng thoại
*B. Tốc độ truyền, cải thiện hiệu năng, tính tương thích
C. Tốc độ truyền, chất lượng thoại, tính tương thích
D. Cải thiện hiệu năng, chất lượng thoại, tính tương thích

Câu 18. UMTS sử dụng kỹ thuật điều chế:
*A. QPSK và 16QAM
B. FSK
C. ASK
D. BPSK

Câu 19. PCRF thực hiện chức năng chính là:
A. Quản lý thiết bị đầu cuối
B. Ghi log hệ thống
*C. Điều chỉnh chính sách dịch vụ và cước
D. Điều chế tín hiệu

Câu 20. Dải tầng truyền và nhận của UMTS lần lượt là:
*A. 900MHz và 2100MHz
B. 1800MHz và 2100MHz
C. 850MHz và 1900MHz
D. 700MHz và 2300MHz

Câu 21. Mạng 3G được thiết kế để cung cấp tốc độ truyền dẫn tối đa lên đến bao nhiêu?
*A. 114 Kbps
B. 20 Kbps
C. 100 Kbps
D. 10 Kbps

Câu 22. Trong kiến trúc mạng GSM, BSC thực hiện chức năng nào sau đây?
A. Giao tiếp trực tiếp với người dùng
*B. Quản lý điều khiển chuyển giao và cấp phát tần số
C. Xác thực thuê bao
D. Lưu trữ tin nhắn

Câu 23. Ưu điểm vượt trội của mạng 4G so với mạng 3G là
*A. Tốc độ truyền dữ liệu cao hơn
B. Tần số sử dụng cao hơn
C. Tần số sử dụng thấp hơn
D. Thiết bị rẻ hơn

Câu 24. EPS là viết tắt của:
A. Enhanced Packet System
*B. Evolved Packet System
C. Evolution Packet Switch
D. Efficient Packet Service

Câu 25. Mạng di động sử dụng công nghệ 2G khi truyền dữ liệu thuộc loại gì?
*A. Digital
B. Analog
C. Analog và Digital
D. Bit

Câu 26. Công nghệ anten dùng trong LTE là:
A. TDM
*B. MIMO
C. FDMA
D. SC-FDMA

Câu 27. Trong số nhận dạng thiết bị IMEI, TAC biểu thị:
A. Mã vùng
*B. Mã nhà sản xuất
C. Mã kiểu dáng thiết bị
D. Mã tần số

Câu 28. Điều gì là một trong những ưu điểm chính của mạng 5G so với các thế hệ trước?
*A. Giảm độ trễ (latency)
B. Tốc độ truyền dẫn cao hơn
C. Tăng cường độ phủ sóng
D. Sự tương thích ngược với các thiết bị cũ

Câu 29. Mạng di động sử dụng công nghệ nào sau đây được gọi là mạng thế hệ 4G
*A. LTE, LTE Advance
B. GPRS
C. GSM
D. W-CDMA

Câu 30. Tín hiệu mà công nghệ 2G đến 3G sử dụng khi truyền dữ liệu thuộc loại?
*A. Digital
B. Analog
C. Kết hợp cả Analog và Digital
D. Bit

Câu 31. VLR thường được đặt tại:
A. Gần BTS
B. Trong thiết bị đầu cuối
*C. Cùng vị trí với MSC
D. Trong thiết bị người dùng

Câu 32. Hệ thống di động thế hệ thứ hai (2G) sử dụng công nghệ nào sau đây?
*A. GSM
B. LTE
C. CDMA
D. W-CDMA

Câu 33. LTE hỗ trợ các công nghệ nào sau đây?
A. Chỉ LTE
B. LTE và Wi-Fi
C. LTE và 3G
*D. LTE, GSM, UMTS, CDMA2000

Câu 34. Trong mạng GSM, thiết bị nào điều khiển giao diện vô tuyến?
A. MSC
B. BSC
*C. BTS
D. GMSC

Câu 35. Mạng di động sử dụng công nghệ 1G, khi truyền dữ liệu thuộc loại gì?
*A. Analog
B. Digital
C. Analog và Digital
D. Bit

Câu 36. Trong kiến trúc LTE, MME quản lý:
A. Địa chỉ IP của thiết bị
B. Điều khiển chuyển mạch dữ liệu
*C. Di động và xác thực thuê bao
D. Phát quảng bá tín hiệu

Câu 37. Tầng mạng trong kiến trúc UMTS đảm nhiệm chức năng:
A. Điều khiển công suất
B. Quản lý mã hóa
*C. Kết nối và chuyển mạch
D. Cấp phát IP

Câu 38. Thế hệ đầu tiên của hệ thống điện thoại di động (1G) có thể truyền?
*A. Tiếng nói
B. Hình ảnh
C. Video
D. Dữ liệu

Câu 39. eNodeB là:
A. Gateway mạng
B. Thiết bị người dùng
*C. Trạm gốc LTE
D. Thiết bị định tuyến

Câu 40. Ưu điểm của hệ thống di động 2G mà hệ thống 1G không có là?
*A. Số hóa dữ liệu
B. Hỗ trợ song công
C. Truyền dữ liệu tương tự
D. Truyền được tiếng nói

Câu 41. CC trong cấu trúc số thuê bao GSM là viết tắt của:
A. Customer Code
*B. Country Code
C. Core Connection
D. Central Call

Câu 42. Cổng PDN GW trong LTE dùng để:
*A. Định tuyến dữ liệu đến mạng ngoài
B. Cấp phát mã SIM
C. Định tuyến cuộc gọi thoại
D. Giao tiếp với BTS

Câu 43. Một hệ thống mạng di động 2G có thể thực hiện được những việc nào sau đây?
*A. Định danh người gọi, truyền SMS, truyền thoại, truyền dữ liệu tốc độ thấp
B. Truyền SMS, truyền thoại
C. Định danh người gọi, truyền SMS, truyền thoại, truyền dữ liệu tốc độ cao
D. Định danh người gọi, truyền SMS, truyền thoại

Câu 44. Đặc trưng của mạng di động sử dụng công nghệ 1G?
A. Chất lượng âm thanh rất tồi
B. Không có chế độ bảo mật tốt
C. Khả năng handoff không tin cậy
*D. Cả ba đáp án

Câu 45. Tốc độ truyền tải cao hơn nhờ giảm:
A. Chi phí
*B. Trễ truyền dẫn và thiết lập cuộc gọi
C. Băng thông
D. Thiết bị đầu cuối

Câu 46. Khái niệm ngăn tổ ong (cell) được đề xuất bởi
*A. H.Ring vào năm 1947
B. H.Ring vào năm 1960
C. H.Ring vào năm 1980
D. H.Ring vào năm 1981

Câu 47. eNodeB trong LTE tích hợp chức năng của:
*A. BTS + BSC
B. MSC + SGSN
C. BTS + GGSN
D. ME + SGSN

Câu 48. SGW đảm nhiệm:
*A. Chuyển tiếp và định tuyến gói tin
B. Quản lý thuê bao
C. Xác thực thiết bị
D. Phân tích gói dữ liệu

Câu 49. UTRAN bao gồm các thành phần:
A. BTS và MSC
*B. RNC và Node B
C. SGSN và GGSN
D. ME và USIM

Câu 50. LTE được thiết kế chủ yếu để:
A. Cải thiện thoại chất lượng cao
B. Tăng cường dịch vụ SMS
*C. Tăng thông lượng và giảm trễ
D. Tăng bảo mật dữ liệu
                `
            },
            {
                id: "mkd_c2_bai04",
                title: "Bài 04: Chương 2 - Các khái niệm cơ bản",
                data: `
Câu 1. Thế hệ đầu tiên của hệ thống điện thoại di động (1G) có thể truyền?
*A. Tiếng nói
B. Hình ảnh
C. Video
D. Dữ liệu

Câu 2. Mạng di động GSM - 1800 đầu tiên được chia thành bao nhiêu kênh?
*A. 374 kênh
B. 243 kênh
C. 364 kênh
D. 124 kênh

Câu 3. Tính năng "VoLTE" (Voice over LTE) trong mạng 4G làm gì?
*A. Cho phép truyền giọng nói qua mạng LTE
B. Tăng cường tốc độ dữ liệu
C. Tăng cường bảo mật
D. Tạo mạng riêng ảo

Câu 4. Mạng di động GSM - 1800 MHz có độ rộng băng tầng của đường lên là bao nhiêu?
*A. 1710 – 1785 MHz
B. 1785- 1780 MHz
C. 1700-1750 MHz
D. 1805- 1850 MHz

Câu 5. Hệ thống di động sử dụng công nghệ GSM kết hợp với công nghệ GPRS thường được gọi là hệ thống di động thế hệ?
*A. 2.5 G
B. 2G
C. 1G
D. 3G

Câu 6. Mục tiêu chính của LTE là gì?
A. Giảm độ trễ
B. Hỗ trợ nhiều người dùng cùng một lúc
C. Tăng tốc độ truyền dẫn dữ liệu
*D. Cả ba phương án

Câu 7. Mạng di động GSM - 900 MHz có độ rộng băng tầng của đường xuống là bao nhiêu?
*A. 935-960 MHz
B. 890- 960MHz
C. 890-915 MHz
D. 900-925 MHz

Câu 8. GSM là công nghệ chỉ sử dụng cho mạng di động thế hệ nào sau đây?
*A. 2G
B. 1G
C. 3G
D. 4G

Câu 9. Mạng di động GSM - 900 MHz có độ rộng băng tầng của đường lên là bao nhiêu?
*A. 890-915 MHz
B. 890- 960MHz
C. 935-960 MHz
D. 900-925 MHz

Câu 10. Mạng di động GSM - 1800 MHz có độ rộng băng tầng của đường xuống là bao nhiêu?
*A. 1805- 1880 MHz
B. 1785- 1780 MHz
C. 1700-1750 MHz
D. 1710 – 1785 MHz

Câu 11. Hệ thống di động sử dụng công nghệ GSM kết hợp với công nghệ GPRS có thể cung cấp các dịch vụ
*A. Gọi thoại, gửi SMS, MMS, internet
B. Chỉ gọi thoại và gửi SMS
C. Gọi thoại, gửi SMS, MMS
D. Chỉ truyền dữ liệu

Câu 12. Mạng di động GSM-900, mỗi kênh vật lý (200 kHz) có thể hỗ trợ bao nhiêu thuê bao liên lạc đồng thời trong cùng một thời điểm?
A. 1 thuê bao
B. 4 thuê bao
*C. 8 thuê bao
D. 16 thuê bao

Câu 13. Một kênh sóng mang GSM có độ rộng
*A. 200 KHz.
B. 45 MHz.
C. 200 MHz.
D. 35 MHz.

Câu 14. Tần số nào được sử dụng trong LTE để đạt tốc độ cao nhất?
A. 2600 MHz
B. 1800 MHz
C. 900 MHz
*D. Cả ba phương án

Câu 15. GSM viết tắt bởi:
*A. Global System for Mobile Communications
B. Global System For Mobile Technology
C. Global Shared Memory
D. General system for mobile communications

Câu 16. Các dịch vụ sử dụng công nghệ 2G?
A. Frequency Division Multiple Access (FDMA). Code Division Multiple Access (CDMA). Global System for Mobile Communications (GSM)
B. Code Division Multiple Access (CDMA). Global System for Mobile Communications (GSM)
*C. GSM (Global System for Mobile Communications)
D. Frequency Division Duplex (FDD) và Time Division Duplex (TDD)

Câu 17. Mạng di động GSM - 900 MHz có độ rộng băng thông là bao nhiêu?
*A. 25 MHz
B. 32 MHz
C. 45 MHz
D. 95 MHz

Câu 18. Khái niệm "cell" (ngăn tổ ong) được sử dụng cho công nghệ mạng nào sau đây?
*A. GSM
B. CDMA
C. MTS
D. LTE

Câu 19. Điều chế trong GSM là
*A. GMSK
B. 64QAM
C. QPSK
D. PSK

Câu 20. Mạng di động GSM - 1800 MHz có độ rộng băng thông là bao nhiêu?
A. 95 MHz
B. 32 MHz
C. 45 MHz
*D. 75 MHz (hoặc 25 MHz theo dải chuẩn)

Câu 21. Mạng di động GSM đầu tiên xây dựng trên băng tần nào?
*A. Băng tần 900 MHz
B. Băng tần 1800 MHz
C. Băng tần 600 MHz
D. Băng tần 450 MHz

Câu 22. Mạng di động GSM – 900 đầu tiên được chia thành bao nhiêu kênh?
*A. 124 kênh
B. 21 kênh
C. 23 kênh
D. 3 kênh

Câu 23. UMTS (chuẩn HSDPA) hỗ trợ tốc độ truyền dữ liệu tối đa:
A. 21 Mbps
B. 11 Mbps
*C. 7.2 Mbps
D. 50 Mbps

Câu 24. Có bao nhiêu phiên bản của hệ thống GSM trên thế giới?
*A. 4
B. 3
C. 2
D. 5

Câu 25. Hệ thống GSM được định nghĩa như sau:
*A. Sử dụng tín hiệu digital, tần số 900 MHz, chia làm 124 kênh
B. Sử dụng tín hiệu analog, tần số 1900 MHz, chia làm 124 kênh
C. Sử dụng tín hiệu digital và analog, tần số 1800 MHz, chia làm 124 kênh
D. Sử dụng tín hiệu analog, tần số 900 – 1900 MHz, chia làm 124 kênh

Câu 26. Các công nghệ di động nào sau đây sử dụng chuyển mạch gói?
*A. GPRS
B. IMTS
C. MTS
D. GSM

Câu 27. Tần số làm việc của hệ thống GSM là:
A. 800, 900, 1800 và 1900 Mhz
B. 800 và 1800 Mhz
C. 900, 1800, 1900 Mhz
*D. 900, 1800 MHz

Câu 28. Các công nghệ nào sau đây không được sử dụng cho mạng không dây:
*A. Ethernet
B. GSM
C. Wi-MaX
D. LTE

Câu 29. Mạng UMTS được phát triển dựa trên công nghệ nào?
*A. W-CDMA
B. CDMA
C. CDMAone
D. IS-95 CDMA

Câu 30. Mạng GSM có những phân hệ chính nào sau đây?
A. Phân hệ vô tuyến (trạm gốc) BSS
B. Phân hệ vận hành và bảo dưỡng: NMS
C. Phân hệ chuyển mạch SS
*D. Cả ba phân hệ trên
                `
            },
            {
                id: "mkd_c3_bai05",
                title: "Bài 05: Chương 3 - Mạng 5G và 5G NR",
                data: `
Câu 1. Dịch vụ kết nối M-MTC được dùng cho ngữ cảnh nào?
A. Chơi game online
B. Xem video 8K
*C. Liên kết hoàn toàn giữa các thiết bị mà không có sự can thiệp của con người
D. Cuộc gọi thoại chất lượng cao

Câu 2. Mục tiêu chính của công nghệ Massive MIMO là gì?
A. Giảm độ phức tạp tính toán
*B. Tăng độ phân tập không gian lên tới tối đa
C. Giảm số lượng ăng ten
D. Tăng công suất phát

Câu 3. Yêu cầu nào về tính di động được đặt ra cho kênh truyền 5G?
A. Chỉ hỗ trợ một đầu cuối di động
*B. Hỗ trợ tính di động cho nhiều đầu cuối cùng di động
C. Không hỗ trợ các thiết bị di chuyển nhanh
D. Chỉ hỗ trợ thiết bị cố định

Câu 4. Mạng 5G hoạt động trong các băng tần nào?
A. Chỉ băng tần dưới 6 GHz
B. Chỉ băng tần cao (28, 38, 60 GHz)
*C. Băng tần dưới 6 GHz hoặc băng tần cao (28, 38, 60 GHz)
D. Chỉ băng tần của mạng Wi-Fi

Câu 5. Theo sơ đồ kiến trúc, các thành phần cơ bản của 5G bao gồm những gì?
A. Chỉ có mạng RAN và bộ tổng hợp
B. Chỉ có NanoCore và mạng IP
*C. Mạng RAN, bộ tổng hợp, mạng IP, NanoCore và các thành phần khác
D. Chỉ có các trạm phát sóng 5G

Câu 6. Tổ chức nào đã khởi xướng phát triển công nghệ truy cập vô tuyến NR (New Radio)?
A. ITU
B. IEEE
*C. 3GPP
D. GSM Association

Câu 7. Công nghệ Massive MIMO là gì?
*A. Sự mở rộng của công nghệ MIMO với số lượng lớn ăng ten thu và phát
B. Một công nghệ đa truy nhập mới
C. Một kỹ thuật mã hóa kênh
D. Một kiến trúc mạng lõi

Câu 8. So với mô hình OSI, ngăn xếp giao thức 5G có cấu trúc như thế nào?
A. Giống hệt mô hình OSI
*B. Có ít lớp hơn và một số lớp được gộp lại
C. Có nhiều lớp hơn mô hình OSI
D. Không tuân theo bất kỳ cấu trúc lớp nào

Câu 9. Việc mã hóa và giải mã các gói tin của 5G-NR so với 4G như thế nào?
A. Hoàn toàn mới
*B. Kế thừa các tiêu chuẩn 4G và có một số cải tiến
C. Đơn giản hơn 4G
D. Loại bỏ hoàn toàn việc mã hóa

Câu 10. Chức năng của lớp mạng trong ngăn xếp giao thức 5G là gì?
A. Kết hợp chức năng của lớp vận chuyển và lớp phiên
*B. Định tuyến dữ liệu từ nguồn đến đích
C. Đánh dấu dữ liệu theo định dạng
D. Mã hóa và giải mã dữ liệu

Câu 11. Công nghệ đa truy nhập OFDMA được áp dụng cho mạng 4G ở hướng nào?
A. Hướng lên
*B. Hướng xuống
C. Cả hai hướng
D. Không dùng cho 4G

Câu 12. Kiến trúc 5G NR được chuẩn hoá bởi 3GPP vào thời gian nào?
A. 12/2016
B. 12/2017
*C. 06/2018
D. 01/2020

Câu 13. Tình huống sử dụng nào của 5G hướng tới truyền thông tương tác từ xa theo thời gian thực?
A. eMBB
*B. URLLC (Dịch vụ truyền thông tin cậy cao và độ biến động trễ thấp)
C. M-MTC
D. Chỉ các dịch vụ video call

Câu 14. Công nghệ mã hoá kênh được sử dụng cho dữ liệu trong 3GPP 5G NR là gì?
A. Turbo
B. LDPC
*C. NR LDPC
D. Cả Turbo và LDPC

Câu 15. Công nghệ nào sau đây là công nghệ đa truy nhập trực giao?
A. NOMA
B. SCMA
*C. OFDMA
D. Cả 3 công nghệ trên

Câu 16. Giao diện vô tuyến 5G-NR là tiêu chuẩn chính thức của mạng 5G tại quốc gia nào?
A. Trung Quốc
B. Hàn Quốc
C. Mỹ
*D. Toàn cầu / Các quốc gia

Câu 17. Một trong những yêu cầu cơ bản đối với kênh truyền 5G là gì?
A. Kênh vô tuyến băng hẹp
B. Độ rộng kênh tối đa 20MHz
*C. Kênh vô tuyến băng rộng thuộc băng tần từ dưới 1 GHz lên đến 100 GHz
D. Không hỗ trợ tính di động

Câu 18. Theo tài liệu trang 11, giao diện 5G-NR hoạt động trên dải tần nào?
A. 2.4 GHz
B. 5 GHz
C. 50 GHz
*D. Dưới 6 GHz

Câu 19. Trong ngăn xếp giao thức 5G, lớp nào hoạt động như lớp vật lý và lớp liên kết dữ liệu của mô hình OSI?
A. Lớp mạng
B. Lớp ứng dụng
*C. Lớp OWA (Kiến trúc không dây mở)
D. Lớp giao thức truyền tải mở

Câu 20. Công nghệ MO-MIMO (hay MU-MIMO) là sự mở rộng của công nghệ nào?
*A. SU-MIMO
B. OFDMA
C. NOMA
D. SCMA

Câu 21. Công nghệ 5G NR (New Radio) có bị hạn chế bởi việc duy trì khả năng tương thích ngược không?
A. Có, phải tương thích hoàn toàn với 4G
B. Có, nhưng chỉ với một số tính năng
*C. Không bị hạn chế
D. Chỉ tương thích với 3G

Câu 22. 5G NR mang lại lợi ích nào về tốc độ so với LTE?
A. Tốc độ và tốc độ dữ liệu không đổi
*B. Tốc độ và tốc độ dữ liệu nâng cao
C. Tốc độ giảm nhưng ổn định hơn
D. Chỉ tăng tốc độ tải lên

Câu 23. Trong công nghệ NOMA, tín hiệu của mỗi người sử dụng được tách ra bằng công nghệ gì?
A. MIMO
B. OFDM
*C. SIC (Tách nhiễu lần lượt)
D. CDMA

Câu 24. Lợi ích nào của 5G NR liên quan đến việc tiết kiệm năng lượng?
*A. Tăng tiết kiệm năng lượng trên mỗi thiết bị
B. Không có cải tiến về tiết kiệm năng lượng
C. Tiêu thụ nhiều năng lượng hơn nhưng hiệu quả hơn
D. Chỉ tiết kiệm năng lượng ở trạm gốc

Câu 25. Lớp nào trong ngăn xếp 5G kết hợp chức năng của lớp vận chuyển và lớp phiên của mô hình OSI?
A. Lớp mạng dưới
B. Lớp mạng trên
*C. Lớp giao thức truyền tải mở (Open Transport Protocol)
D. Lớp OWA

Câu 26. 5G NR có sử dụng lại các cấu trúc và tính năng của LTE không?
A. Không, 5G NR là một công nghệ hoàn toàn mới.
*B. Có, 5G NR sử dụng lại nhiều cấu trúc và tính năng của LTE.
C. Chỉ sử dụng lại cấu trúc khung vô tuyến.
D. Chỉ sử dụng lại công nghệ MIMO.

Câu 27. Tình huống sử dụng nào của 5G yêu cầu băng thông rất rộng với chất lượng cao theo thời gian thực?
A. URLLC
B. M-MTC
*C. eMBB (Dịch vụ băng rộng di động nâng cao)
D. Tất cả các tình huống trên

Câu 28. Nhược điểm của công nghệ Massive MIMO là gì?
A. Độ phân tập không gian thấp
B. Giảm tốc độ dữ liệu
*C. Độ phức tạp tính toán của các bộ thu và kiến trúc ăng ten phức tạp
D. Không tương thích với 5G NR

Câu 29. Chức năng nào sau đây thuộc về Lớp ứng dụng (Application Layer) trong ngăn xếp 5G?
A. Định tuyến gói tin
B. Điều khiển truy nhập trung bình
*C. Đánh dấu dữ liệu theo định dạng và thực hiện mã hóa/giải mã
D. Quản lý kết nối vật lý

Câu 30. Trong kiến trúc 5G, thành phần nào cho phép các RAN khác nhau sử dụng để giao tiếp?
*A. Aggregator
B. IP Network
C. NanoCore
D. Global Content Providers

Câu 31. Công nghệ đa truy nhập phi trực giao NOMA dựa trên miền nào?
A. Miền tần số
B. Miền thời gian
C. Miền mã
*D. Miền công suất

Câu 32. Kiến trúc 5G sử dụng khái niệm gì để các mạng RAN khác nhau có thể kết nối?
A. Khái niệm phân cấp
*B. Khái niệm IP phẳng
C. Khái niệm chuyển mạch kênh
D. Khái niệm tập trung

Câu 33. Công nghệ SCMA là sự ghép lai giữa hai công nghệ nào?
A. OFDMA và NOMA
*B. OFDM và CDMA
C. CDMA và MIMO
D. NOMA và MIMO

Câu 34. 5G là viết tắt của cụm từ nào?
A. Thế hệ mạng di động thứ 4
B. Hệ thống không dây thứ 4
*C. Thế hệ mạng di động thứ 5
D. Công nghệ mạng không dây mới

Câu 35. Độ rộng kênh truyền 5G có thể lên đến bao nhiêu?
A. 100 MHz
B. 200 MHz
C. Trên 500 MHz
*D. 1 GHz

Câu 36. Theo bảng so sánh, băng thông tối đa của 3GPP 5G NR là bao nhiêu?
A. 100 MHz
B. 20 MHz
*C. Thay đổi tối đa 400 MHz
D. 10 ms

Câu 37. Theo sơ đồ, các công nghệ nào được liên kết với NanoCore?
A. Chỉ có AIPN
B. Chỉ có Cloud Computing
*C. AIPN, Nanotechnology, Cloud Computing
D. Chỉ có GSM và LTE

Câu 38. Một trong những lợi ích của sóng vô tuyến mới 5G so với mạng LTE là gì?
A. Giảm dung lượng vùng không dây
B. Tăng tiêu thụ năng lượng trên mỗi thiết bị
*C. Dung lượng vùng không dây lớn hơn
D. Tăng khoảng thời gian cập nhật

Câu 39. Lớp OWA trong 5G được nhắm mục tiêu đến các lớp nào của thiết bị đầu cuối di động 4G?
A. Lớp mạng / Lớp vận chuyển
B. Lớp phiên / Lớp trình bày
*C. Lớp MAC / Lớp PHY
D. Lớp ứng dụng

Câu 40. Kích thước ăng ten của Massive MIMO có thể từ bao nhiêu?
A. 2x2 đến 4x4
B. 4x4 đến 8x8
*C. Từ 8x8 đến 64x64 hoặc nhiều hơn
D. Chỉ có một ăng ten
                `
            },
            {
                id: "mkd_c4_bai06",
                title: "Bài 06: Chương 4 - Mạng cảm biến không dây (WSN)",
                data: `
Câu 1. Yêu cầu kỹ thuật nào được coi là quan trọng nhất trong WSN?
A. Khả năng mở rộng (Scalability).
*B. Hiệu quả năng lượng (Energy Efficiency).
C. Bảo mật và riêng tư (Security & Privacy).
D. Chất lượng dịch vụ (QoS).

Câu 2. Thách thức lớn nhất trong thiết kế WSN là gì?
A. Tốc độ xử lý.
*B. Năng lượng hạn chế của pin.
C. Kích thước của nút cảm biến.
D. Phạm vi truyền sóng.

Câu 3. Tầng mạng (Network Layer) trong WSN có chức năng chính là gì?
A. Điều chế và giải điều chế tín hiệu.
B. Kiểm soát lỗi và luồng.
*C. Định tuyến dữ liệu.
D. Cung cấp giao diện cho người dùng.

Câu 4. Ứng dụng nào sau đây KHÔNG phải là ứng dụng phổ biến của WSN?
A. Giám sát môi trường.
*B. Chơi game trực tuyến hiệu năng cao.
C. Y tế và chăm sóc sức khỏe.
D. Nông nghiệp thông minh.

Câu 5. Vấn đề "hotspot" trong định tuyến WSN thường xảy ra ở đâu?
A. Các nút ở xa nhất so với trạm gốc.
*B. Các nút gần trạm gốc.
C. Các nút có mức năng lượng thấp nhất.
D. Các nút không hoạt động.

Câu 6. Bộ phận nào của nút cảm biến thường là một vi điều khiển (microcontroller)?
A. Bộ phận cảm biến (Sensing Unit).
*B. Bộ phận xử lý (Processing Unit).
C. Bộ phận thu phát sóng (Transceiver Unit).
D. Bộ phận năng lượng (Power Unit).

Câu 7. Vấn đề "nút ẩn/nút hiện" (Hidden/Exposed Node) gây ra điều gì?
A. Tăng hiệu quả năng lượng.
*B. Các nút không "nghe" thấy nhau có thể gây va chạm.
C. Tăng tốc độ truyền dữ liệu.
D. Giúp đồng bộ thời gian dễ dàng hơn.

Câu 8. Các nút cảm biến trong WSN có khả năng nào sau đây?
A. Chỉ cảm nhận (sensing).
B. Chỉ xử lý (processing).
C. Chỉ truyền dữ liệu (communicating).
*D. Cả ba: cảm nhận, xử lý và truyền dữ liệu.

Câu 9. Bộ phận thu phát sóng (Transceiver Unit) trong WSN thường sử dụng chuẩn nào?
A. Wi-Fi (IEEE 802.11).
B. 4G/5G.
*C. Zigbee, Bluetooth Low Energy, LoRa.
D. Ethernet.

Câu 10. Kiến trúc định tuyến nào tổ chức mạng thành các cụm (clusters)?
A. Định tuyến tập trung (Flat).
*B. Định tuyến phân cấp (Hierarchical).
C. Định tuyến theo vị trí (Location-based).
D. Định tuyến theo dòng chảy (Flow-based).

Câu 11. Giao thức LEACH là ví dụ điển hình cho loại định tuyến nào?
A. Định tuyến tập trung.
*B. Định tuyến phân cấp.
C. Định tuyến theo vị trí.
D. Định tuyến không dùng khoảng cách.

Câu 12. Tầng nào trong kiến trúc WSN chịu trách nhiệm quản lý truy cập kênh (MAC)?
A. Tầng vật lý (Physical Layer).
*B. Tầng liên kết dữ liệu (Data Link Layer).
C. Tầng mạng (Network Layer).
D. Tầng ứng dụng (Application Layer).

Câu 13. Kỹ thuật xác định khoảng cách nào dựa vào sự suy giảm cường độ tín hiệu?
A. Time of Arrival (ToA).
B. Time Difference of Arrival (TDoA).
C. Angle of Arrival (AoA).
*D. Received Signal Strength Indicator (RSSI).

Câu 14. Khối chức năng nào trong một nút cảm biến chịu trách nhiệm chuyển đổi hiện tượng vật lý thành tín hiệu điện?
A. Bộ phận xử lý (Processing Unit).
B. Bộ phận thu phát sóng (Transceiver Unit).
*C. Bộ phận cảm biến (Sensing Unit).
D. Bộ phận năng lượng (Power Unit).

Câu 15. Trong cấu trúc mạng phân cấp (Hierarchical Network), nút nào chịu trách nhiệm thu thập dữ liệu từ các nút thành viên?
A. Nút cổng (Gateway Node).
*B. Nút trưởng cụm (Cluster Head - CH).
C. Nút cảm biến thông thường.
D. Trạm gốc (Base Station).

Câu 16. Thách thức chính trong định tuyến của WSN khác với mạng truyền thống là gì?
A. Tốc độ truyền cao.
*B. Đường đi tối ưu phải tiết kiệm năng lượng nhất, không chỉ ngắn nhất.
C. Không có nút nào bị lỗi.
D. Các nút có địa chỉ IP toàn cục.

Câu 17. Dữ liệu thu thập từ các nút cảm biến sẽ được chuyển về đâu để phân tích?
A. Các nút cảm biến khác.
*B. Trạm gốc (Base Station).
C. Trực tiếp tới người dùng.
D. Lưu trữ tại chỗ trên mỗi nút.

Câu 18. Nhược điểm chính của định tuyến phân cấp là gì?
A. Khả năng mở rộng kém.
*B. Nút trưởng cụm (CH) tiêu thụ năng lượng cao và cần cơ chế bầu chọn phức tạp.
C. Gây tắc nghẽn toàn mạng.
D. Không tiết kiệm năng lượng.

Câu 19. Mô hình cấu trúc mạng nào mà tất cả các nút đều có vai trò như nhau?
A. Mạng phân cấp (Hierarchical).
*B. Mạng phẳng (Flat/Ad-hoc).
C. Mạng dựa trên truy vấn (Query-based).
D. Mạng dựa trên định vị (Location-based).

Câu 20. Tầng quản lý nào là một tầng xuyên suốt, quản lý việc sử dụng năng lượng ở mọi tầng khác?
A. Tầng quản lý di động (Mobility Management Plane).
B. Tầng quản lý tác vụ (Task Management Plane).
*C. Tầng quản lý năng lượng (Power Management Plane).
D. Tầng quản lý bảo mật (Security Management Plane).

Câu 21. Đặc điểm nào KHÔNG phải là của WSN?
A. Số lượng lớn các nút.
*B. Năng lượng không giới hạn.
C. Khả năng tự tổ chức.
D. Phân tán tự trị.

Câu 22. Phương pháp định vị nào thuộc nhóm "định vị không dùng khoảng cách" (Range-free)?
A. Trilateration.
B. Multilateration.
*C. Centroid (Trọng tâm).
D. ToA.

Câu 23. Phương thức đồng bộ nào sử dụng nguồn thời gian chính xác bên ngoài như GPS?
A. Đồng bộ dựa trên cơ chế truyền tin.
*B. Đồng bộ dựa trên tham chiếu bên ngoài.
C. Đồng bộ phân tán.
D. Đồng bộ một chặng.

Câu 24. Mô hình truyền thông phổ biến nhất trong WSN, nơi các nút gửi dữ liệu về một điểm tập trung, được gọi là gì?
A. Broadcast.
B. Multicast.
C. Anycast.
*D. Convergecast.

Câu 25. Mô hình truyền thông "dữ liệu tập trung vào điểm thu" (Data Centric) có nghĩa là gì?
A. Quan tâm đến ID của nút nguồn.
*B. Quan tâm đến dữ liệu thu thập được, không phải ID của nút.
C. Mọi dữ liệu đều phải được mã hóa.
D. Chỉ có một nút duy nhất được phép gửi dữ liệu.

Câu 26. Định vị (Localization) trong WSN nhằm mục đích gì?
A. Xác định mức năng lượng còn lại của nút.
B. Xác định phiên bản phần mềm của nút.
*C. Xác định vị trí địa lý vật lý của các nút cảm biến.
D. Xác định loại cảm biến trên nút.

Câu 27. Ưu điểm của định tuyến phân cấp là gì?
A. Mỗi nút đều phải tham gia định tuyến.
*B. Tiết kiệm năng lượng, khả năng mở rộng tốt.
C. Cấu trúc đơn giản.
D. Nút trưởng cụm tiêu thụ ít năng lượng.

Câu 28. Trong một nút cảm biến, bộ phận nào thường là yếu tố hạn chế tuổi thọ của nút nhất?
A. Bộ phận xử lý.
B. Bộ phận cảm biến.
C. Bộ phận thu phát sóng.
*D. Bộ phận năng lượng (pin).

Câu 29. Giao thức đồng bộ TPSN (Timing-Sync Protocol for Sensor Networks) hoạt động dựa trên nguyên tắc nào?
A. Quảng bá (flooding) thông tin thời gian.
*B. Xây dựng cây đồng bộ phân cấp và trao đổi gói tin hai chiều.
C. Sử dụng tham chiếu từ GPS.
D. Mỗi nút tự đồng bộ độc lập.

Câu 30. Đặc điểm của các giao thức MAC "phân cấp" (Schedule-based) là gì?
A. Dễ xảy ra va chạm.
*B. Không có va chạm, hiệu quả năng lượng cao nhưng yêu cầu đồng bộ.
C. Đơn giản và linh hoạt.
D. Không cần đồng bộ thời gian.

Câu 31. Định tuyến theo vị trí (Location-based routing) yêu cầu điều gì ở các nút?
A. Phải có bộ nhớ lớn.
*B. Phải có khả năng biết vị trí của mình.
C. Phải hoạt động theo lịch trình cố định.
D. Phải có cùng mức năng lượng.

Câu 32. Kỹ thuật xác định khoảng cách nào yêu cầu đồng bộ thời gian rất chính xác giữa các nút?
A. RSSI.
*B. ToA (Time of Arrival).
C. Centroid.
D. DV-Hop.

Câu 33. Giao thức NTP/SNTP không phù hợp với WSN vì lý do nào?
A. Độ chính xác thấp.
*B. Yêu cầu tài nguyên xử lý và bộ nhớ lớn, không thiết kế cho mạng đa chặng.
C. Chỉ hoạt động với mạng có dây.
D. Không hỗ trợ đồng bộ phân tán.

Câu 34. Vai trò chính của tầng MAC (Medium Access Control) là gì?
A. Định tuyến gói tin.
*B. Quản lý việc truy cập chung vào kênh truyền để tránh va chạm.
C. Mã hóa dữ liệu.
D. Quản lý năng lượng.

Câu 35. Phương pháp định vị Trilateration cần ít nhất bao nhiêu nút neo để xác định vị trí 2D?
A. 1 nút neo.
B. 2 nút neo.
*C. 3 nút neo.
D. 4 nút neo.

Câu 36. Các nút có vị trí đã biết được dùng làm tham chiếu để định vị gọi là gì?
A. Nút chủ (Master Nodes).
B. Nút con (Child Nodes).
*C. Nút neo (Anchor Nodes/Beacon Nodes).
D. Nút trung gian (Relay Nodes).

Câu 37. Mô hình truyền thông mà dữ liệu được chuyển tiếp qua nhiều nút trung gian để đến trạm gốc gọi là gì?
A. Truyền dẫn một chặng (Single-hop).
*B. Truyền dẫn đa chặng (Multi-hop).
C. Truyền dẫn quảng bá (Broadcast).
D. Truyền dẫn tập trung (Convergecast)

Câu 38. Nhược điểm chính của kỹ thuật RSSI là gì?
A. Yêu cầu phần cứng phức tạp.
*B. Không chính xác do nhiễu, vật cản và môi trường thay đổi.
C. Cần đồng bộ thời gian rất chính xác.
D. Chi phí cao.

Câu 39. Kỹ thuật nào giúp giảm lượng dữ liệu truyền tải bằng cách xử lý sơ bộ tại các nút trung gian?
*A. Tổng hợp dữ liệu (Data Aggregation).
B. Phân mảnh dữ liệu (Data Fragmentation).
C. Mã hóa dữ liệu (Data Encryption).
D. Nén dữ liệu (Data Compression).

Câu 40. Giao thức truy nhập nào thuộc loại "dựa trên thỏa thuận" (Contention-based)?
A. TDMA (Time Division Multiple Access).
B. FDMA (Frequency Division Multiple Access).
*C. CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance).
D. CDMA (Code Division Multiple Access).

Câu 41. Tại sao cần đồng bộ thời gian trong WSN?
A. Để tăng tốc độ mạng.
B. Để giảm chi phí phần cứng.
*C. Để tổng hợp dữ liệu, theo dõi sự kiện và lập lịch truyền dẫn.
D. Để tăng phạm vi phủ sóng.

Câu 42. Khả năng tự động phát hiện và kết nối với nhau để hình thành mạng của các nút được gọi là gì?
A. Khả năng chịu lỗi.
B. Khả năng mở rộng.
*C. Khả năng tự tổ chức (Self-organizing).
D. Khả năng bảo mật.

Câu 43. Mạng cảm biến không dây (WSN) là gì?
A. Mạng có dây dùng để giám sát môi trường.
*B. Tập hợp các nút cảm biến nhỏ, chi phí thấp, được phân bố tự trị để giám sát điều kiện vật lý hoặc môi trường.
C. Mạng lưới các máy tính cá nhân kết nối không dây.
D. Một hệ thống máy chủ dùng để lưu trữ dữ liệu lớn.

Câu 44. Đặc điểm chính của giao thức đồng bộ FTSP (Flooding Time Synchronization Protocol) là gì?
*A. Sử dụng cơ chế quảng bá (flooding) và stamping thời gian tại tầng MAC.
B. Yêu cầu cấu trúc mạng hình cây.
C. Chỉ đồng bộ giữa các nút lân cận.
D. Dựa vào một máy chủ thời gian trung tâm.

Câu 45. Đồng bộ thời gian (Time Synchronization) trong WSN là gì?
A. Quá trình điều chỉnh tốc độ xử lý của các nút.
*B. Quá trình điều chỉnh đồng hồ của các nút để có cùng tham chiếu thời gian.
C. Quá trình đảm bảo các nút có cùng mức năng lượng.
D. Quá trình khởi động lại tất cả các nút cùng một lúc.

Câu 46. Ưu điểm của định tuyến theo vị trí là gì?
A. Yêu cầu bảng định tuyến lớn.
*B. Không cần bảng định tuyến, tiết kiệm năng lượng, phù hợp với mạng động.
C. Phức tạp trong quản lý.
D. Không bao giờ gặp "hố" (voids).

Câu 47. Ưu điểm của mạng phân cấp so với mạng phẳng là gì?
A. Đơn giản trong triển khai.
*B. Tiết kiệm năng lượng và quản lý hiệu quả hơn.
C. Tất cả các nút đều có vai trò như nhau.
D. Không cần cơ chế bầu chọn phức tạp.

Câu 48. Ưu điểm của các phương pháp định vị không dùng khoảng cách là gì?
A. Độ chính xác rất cao.
*B. Đơn giản về phần cứng, chi phí thấp, tiết kiệm năng lượng hơn.
C. Hoạt động tốt trong mọi môi trường.
D. Không cần nút neo.

Câu 49. CSMA/CA là viết tắt của cụm từ gì?
A. Carrier Sense Multiple Access with Collision Detection.
*B. Carrier Sense Multiple Access with Collision Avoidance.
C. Code Sense Multiple Access with Collision Avoidance.
D. Channel Sense Multiple Access with Collision Allocation.

Câu 50. Nhược điểm của việc dùng GPS để đồng bộ trong WSN là gì?
A. Độ chính xác thấp.
*B. Tốn kém, không hoạt động trong nhà, và nút cảm biến thường không có GPS.
C. Tốc độ đồng bộ chậm.
D. Yêu cầu băng thông lớn.
                `
            },
            {
                id: "mkd_c3_bai07",
                title: "Bài 07: Chương 3 - Các thế hệ mạng di động (Tiếp theo)",
                data: `
Câu 1. Theo lý thuyết, tốc độ tối đa của mạng di động 3G lên tới khoảng:
A. 7,2 Kb/giây
B. 7,2 Gb/giây
*C. 7,2 Mb/giây
D. 7,2 b/giây

Câu 2. Điểm yếu của băng tần mmWave trong 5G là gì?
A. Phạm vi phủ sóng ngắn
B. Dễ bị cản trở bởi vật cản
*C. Cả a và b
D. Không có nhược điểm

Câu 3. 5G SA (Standalone) khác gì với 5G NSA?
A. Không cần phụ thuộc vào 4G
B. Độ trễ thấp hơn
C. Tốc độ cao hơn
*D. Tất cả các đáp án trên

Câu 4. Theo lý thuyết, tốc độ tối đa của mạng di động 5G lên tới khoảng:
A. 10 Kb/giây
*B. 10 Gb/giây
C. 10 Mb/giây
D. 10 G/giây

Câu 5. Hệ thống điện thoại di động MTS (Mobile Telephone System) ra đời ở thời kỳ đầu là:
A. Hệ thống điện thoại số, song công toàn phần
B. Hệ thống điện thoại tương tự, song công toàn phần
*C. Hệ thống điện thoại tương tự, bán song công
D. Hệ thống điện thoại số, bán song công

Câu 6. Dịch vụ điện thoại di động tiên tiến (AMPS) hoạt động trên băng tần nào?
A. Băng tần 900 MHz
B. Băng tần 450 MHz
C. Băng tần 600 MHz
*D. Băng tần 850 MHz

Câu 7. 5G có thể bị ảnh hưởng bởi yếu tố nào?
A. Thời tiết (mưa, sương mù)
B. Vật cản (tường, cây cối)
C. Khoảng cách từ trạm phát
*D. Tất cả các đáp án trên

Câu 8. 5G NSA (Non-Standalone) là gì?
A. 5G độc lập hoàn toàn
*B. 5G dựa trên nền tảng 4G LTE
C. Chỉ dùng cho IoT
D. Một chuẩn Wi-Fi

Câu 9. Tần số nào 5G sử dụng để cân bằng giữa phạm vi và tốc độ?
A. Sub-1 GHz
*B. 1-6 GHz (Mid-band)
C. 24-100 GHz (mmWave)
D. Chỉ băng tần Wi-Fi 6 GHz

Câu 10. Theo lý thuyết, tốc độ tối đa của mạng di động 4G lên tới khoảng:
A. 150 Kb/giây
B. 150 b/giây
*C. 150 Mb/giây
D. 150 Gb/giây

Câu 11. Dịch vụ điện thoại di động tiên tiến (AMPS) phục vụ được bao nhiêu kênh thoại?
A. 600 kênh thoại
*B. 595 kênh thoại
C. 21 kênh thoại
D. 23 kênh thoại

Câu 12. Mục đích của việc tăng cấu hình trạm BTS là
A. Tăng vùng phủ
B. Tăng mức thu
*C. Tăng dung lượng phục vụ
D. Tăng lưu lượng

Câu 13. Tốc độ truyền dữ liệu của công nghệ 3G có thể đạt tốc độ tối đa
A. 50 Mbit/s
B. 100 Mbit/s
*C. 7.2 Mbit/s
D. 150 Mbit/s

Câu 14. Chuẩn kỹ thuật nào được sử dụng chủ yếu trong mạng 4G?
A. WiMAX
*B. LTE
C. LTE-A
D. GSM

Câu 15. Công nghệ EDGE thuộc thế hệ mạng viễn thông nào?
*A. 2.75G
B. 2.5G
C. 2G
D. 3G

Câu 16. 5G có thể tương thích ngược với 4G không?
A. Không
B. Chỉ ở một số quốc gia
*C. Có
D. Chỉ khi dùng SIM 5G

Câu 17. Thách thức lớn nhất khi triển khai 5G là gì?
A. Chi phí đầu tư cao
B. Vấn đề an ninh mạng
C. Thiếu thiết bị hỗ trợ
*D. Tất cả các đáp án trên

Câu 18. Nhà mạng nào ở Việt Nam đầu tiên thử nghiệm 5G?
A. Vinaphone
*B. Viettel
C. Mobifone
D. Vietnamobile

Câu 19. Công nghệ nào giúp 5G tiết kiệm năng lượng?
A. Sleep Mode cho trạm gốc
B. Sử dụng AI để tối ưu mạng
*C. Cả a và b
D. Không có công nghệ nào

Câu 20. 4G LTE sử dụng băng tần chủ yếu nào?
A. Trên 24 GHz
B. Chỉ băng tần mmWave
*C. Dưới 6 GHz
D. Chỉ băng tần 2.4 GHz

Câu 21. IMEI (International Mobile Equipment Identity) chứa các thông tin:
*A. Mã hợp chuẩn kiểu dáng TAC, Mã sản xuất thiết bị FAC, Số nhận diện seri SNR, Dự phòng
B. Mã hợp chuẩn kiểu dáng TAC, Mã sản xuất thiết bị FAC, phần dự phòng
C. Mã hợp chuẩn kiểu dáng TAC, Mã sản xuất thiết bị FAC, Số nhận diện seri SNR
D. Mã hợp chuẩn kiểu dáng TAC, Mã sản xuất thiết bị FAC, 15 con số

Câu 22. Thế hệ di động 2G sử dụng thêm công nghệ hỗ trợ HSCSD nhằm mục đích
A. Làm giảm suy hao của tín hiệu
B. Thay đổi dải tần làm việc
*C. Nâng cao tốc độ truyền dữ liệu
D. Tăng tính bảo mật

Câu 23. Dải tần 3.5 GHz thuộc loại nào trong 5G?
A. Low-band
*B. Mid-band
C. mmWave
D. Chỉ dùng cho vệ tinh

Câu 24. Hệ thống điện thoại di động MTS (Mobile Telephone System) ra đời ở thời kỳ đầu sử dụng chuyển mạch nào?
A. Chuyển mạch số (tự động)
*B. Chuyển mạch thủ công
C. Chuyển mạch tự động
D. Chuyển mạch kênh (tự động)

Câu 25. Việt Nam bắt đầu thử nghiệm 5G vào năm nào?
A. 2018
*B. 2019
C. 2020
D. 2021

Câu 26. Tốc độ truyền dữ liệu của công nghệ GPRS có thể đạt tốc độ tối đa
A. 40 kbps
B. 50 kbps
*C. 171.2 kbps
D. 9.6 kbps

Câu 27. Các phần tử chính trong mạng di động gồm có:
A. BTS, BSC, MSC
B. BTS, BSC, TRAU, PCU, MSC/VLR, HLR
*C. BTS, BSC, TRAU, PCU, MSC/VLR, HLR, Truyền dẫn.
D. BTS, BSC, PCU, HLR, MSC/VLR.

Câu 28. Đặc tả các phần khác nhau của số thuê bao di động:
A. Mã nước CC, mã mạng di động NDC, Số thuê bao SN, IMEI
*B. Mã nước CC, mã mạng di động NDC, Số thuê bao SN
C. Mã nước CC, Số thuê bao SN, IMEI
D. Mã mạng di động NDC, Số thuê bao SN, IMEI

Câu 29. Dịch vụ điện thoại di động tiên tiến (AMPS) hoạt động trên băng tần bao nhiêu?
A. 450 MHz
B. 900 MHz
*C. 850 MHz
D. 1800 MHz

Câu 30. Công nghệ GPRS thuộc thế hệ mạng viễn thông nào?
A. 2G
B. 1G
C. 3G
*D. 2.5G

Câu 31. IMSI (International Mobile Subscriber Identity) gồm những thông tin gì?
A. Mã quốc gia MCC, Mã mạng MNC, Số nhận diện seri SNR
B. Mã quốc gia MCC, Số nhận diện seri SNR, phần dự phòng
*C. Mã quốc gia MCC, Mã mạng MNC, Số nhận dạng trạm di động MSIN
D. Mã quốc gia MCC, Số nhận diện seri SNR, Mã sản xuất thiết bị FAC, phần dự phòng

Câu 32. Kiến trúc Core Network của 5G dựa trên nguyên tắc nào?
A. Dựa hoàn toàn trên kiến trúc 4G EPC
*B. Chia thành các SBA (Service-Based Architecture)
C. Sử dụng cấu trúc phân cấp cứng
D. Không hỗ trợ ảo hóa

Câu 33. 5G có thể thay thế hoàn toàn mạng có dây (FTTH) không?
A. Có
*B. Không
C. Chỉ ở thành phố lớn
D. Chưa rõ

Câu 34. So với 4G, 5G có:
A. Tốc độ cao hơn
B. Độ trễ thấp hơn
C. Hỗ trợ nhiều thiết bị hơn
*D. Tất cả các đáp án trên

Câu 35. Chọn đáp án SAI: Đặc trưng của công nghệ GPRS là gì?
A. Tiết kiệm tài nguyên mạng
B. Khả năng kết nối đồng thời
C. Tốc độ truyền dữ liệu từ 56 kbps đến 114 kbps
*D. Truyền dữ liệu theo dạng bit

Câu 36. Quốc gia nào đi đầu trong triển khai 5G?
A. Mỹ
B. Hàn Quốc
C. Trung Quốc
*D. Cả a, b và c

Câu 37. Dịch vụ điện thoại di động tiên tiến (AMPS) được chia thành bao nhiêu kênh?
A. 23 kênh
B. 48 kênh
*C. 21 kênh điều khiển và 595 kênh thoại
D. 124 kênh

Câu 38. Số nhận dạng thuê bao di động trong hệ thống GSM gồm:
A. MSISDN
B. IMSI
C. IMEI
*D. Cả ba số nhận dạng trên

Câu 39. Hệ thống điện thoại di động của các nước bắc Âu (NMT) có những phiên bản nào?
A. NMT-900
B. NMT-600
*C. NMT-450 & NMT-900
D. NMT-450

Câu 40. Dịch vụ EDGE cung cấp dịch vụ
*A. Truy cập Internet từ MS hoặc máy tính
B. Gọi video call từ MS
C. Kết nối MS vào mạng LAN
D. Tất cả đều đúng
                `
            },
            {
                id: "mkd_c4_bai08",
                title: "Bài 08: Chương 4 - Mạng không dây và cảm biến (Tiếp theo)",
                data: `
Câu 1. Tính năng "Network Slicing" trong mạng 5G làm gì?
A. Tạo ra một mạng riêng ảo cho mỗi người dùng
B. Tăng cường bảo mật
*C. Chia nhỏ mạng thành các phần nhỏ để tăng hiệu suất
D. Mở rộng độ phủ sóng

Câu 2. Giao thức 6LoWPAN được phát triển để làm gì?
A. Thay thế hoàn toàn cho Zigbee.
*B. Cho phép các thiết bị năng lượng thấp sử dụng giao thức IPv6 để kết nối trực tiếp vào Internet.
C. Tăng cường bảo mật cho chuẩn Wi-Fi.
D. Quản lý việc sạc không dây cho các nút cảm biến.

Câu 3. Điều gì là MIMO (Multiple Input, Multiple Output) trong ngữ cảnh của mạng 4G?
A. Chuẩn kết nối mạng di động
B. Phương pháp xác thực người dùng
*C. Kỹ thuật tăng cường tốc độ truyền dẫn
D. Loại thiết bị di động

Câu 4. Tính năng "Handover" trong mạng 4G có ý nghĩa gì?
A. Chuyển giao dữ liệu từ mạng di động sang Wi-Fi
B. Tăng cường mã hóa dữ liệu
*C. Di chuyển người dùng giữa các trạm cơ sở mà không mất kết nối
D. Tự động kết nối đến mạng di động khi rời khỏi mạng Wi-Fi

Câu 5. Đặc điểm của hệ thống sử dụng WiMAX là gì?
A. Dựa trên tiêu chuẩn IEEE 802.16
B. IEEE 820.16-2001 hoạt động ở bằng tần 10-66GHz
*C. Tất cả các đặc điểm
D. Khoảng cách phủ sóng có thể lên tới 50KM, tốc độ tối đa 70Mbps

Câu 6. Bluetooth có thể kết nối một số lượng thiết bị tối đa là bao nhiêu?
A. 2
B. 5
*C. 10
D. 20

Câu 7. Giao thức nào thường được sử dụng cho lớp MAC (Media Access Control) và lớp Vật lý trong các mạng WSN tiêu thụ năng lượng thấp?
A. Wi-Fi (IEEE 802.11)
*B. Zigbee (IEEE 802.15.4)
C. Bluetooth (IEEE 802.15.1)
D. LTE (Long-Term Evolution)

Câu 8. Hiện tượng "tổng hợp dữ liệu" (Data Aggregation) trong WSN nhằm mục đích gì?
A. Tăng kích thước của các gói tin để truyền đi xa hơn.
B. Mã hóa dữ liệu để tăng cường bảo mật.
*C. Kết hợp và xử lý sơ bộ dữ liệu từ nhiều nút để giảm lượng dữ liệu cần truyền về trạm gốc.
D. Sao lưu dữ liệu tại mỗi nút để phòng khi mất mát.

Câu 9. Mạng di động 4G được thiết kế để cung cấp tốc độ truyền dẫn tối đa là bao nhiêu?
A. 50 Mbps
B. 100 Mbps
*C. 1 Gbps
D. 10 Mbps

Câu 10. Ứng dụng nào sau đây là phổ biến nhất đối với mạng cảm biến không dây?
A. Chơi game trực tuyến tốc độ cao.
*B. Giám sát môi trường và nông nghiệp thông minh.
C. Truyền phát video chất lượng 4K.
D. Hệ thống máy tính hiệu năng cao.

Câu 11. Phương pháp nào thường được sử dụng để đo khoảng cách trong mạng cảm biến không dây?
A. Modulation
B. Encryption
*C. Triangulation
D. Firewall

Câu 12. Loss được định nghĩa là?
A. Sự mất mát năng lượng tín hiệu khi truyền sóng radio
B. Đại lượng đo mức độ khuếch đại năng lượng tín hiệu khi truyền sóng radio
*C. Đại lượng đo mức độ mất mát năng lượng tín hiệu khi truyền sóng radio
D. Sự khuếch đại năng lượng tín hiệu khi truyền sóng radio

Câu 13. "Chất lượng dịch vụ" (Quality of Service - QoS) trong WSN thường ưu tiên các yếu tố nào nhất?
A. Băng thông cao và độ trễ cực thấp.
*B. Độ tin cậy trong việc gửi nhận dữ liệu và tuổi thọ mạng.
C. Tốc độ xử lý của CPU và dung lượng bộ nhớ lớn.
D. Khả năng tương thích với mạng Internet tốc độ cao.

Câu 14. Định tuyến dựa trên dữ liệu (Data-Centric Routing) trong WSN có nghĩa là gì?
A. Dữ liệu được gửi đến một địa chỉ nút cụ thể.
*B. Các gói tin được định tuyến dựa trên thuộc tính của dữ liệu mà người dùng yêu cầu.
C. Mỗi nút phải có một địa chỉ IP duy nhất.
D. Dữ liệu luôn được truyền đến nút có năng lượng cao nhất.

Câu 15. Cụm từ "Roaming" trong mạng không dây ám chỉ điều gì?
A. Một loại mã hóa dữ liệu
B. Tần số truyền dẫn
*C. Tính năng kết nối tự động khi di chuyển giữa các điểm truy cập
D. Phương thức xác thực người dùng

Câu 16. Mesh networking trong mạng không dây là gì?
A. Một loại kết nối dựa trên Bluetooth
B. Một loại mã hóa dữ liệu cao cấp
*C. Hệ thống mạng có nhiều điểm truy cập làm việc cùng nhau
D. Tên gọi khác của mạng LAN

Câu 17. Hệ thống điện thoại di động công cộng MTS (Mobile Telephone System) có đặc điểm gì?
A. Số lượng kênh MTS ít 03 kênh
B. Hệ thống tương tự, bán song công
C. Chuyển mạch thủ công
*D. Cả ba đặc điểm

Câu 18. Một hệ thống nâng cao của IMTS có những đặc điểm gì?
A. Hỗ trợ song công
B. Số lượng kênh tăng (23 kênh)
*C. Cả ba đặc điểm
D. Chuyển mạch cuộc gọi tự động

Câu 19. Bluetooth sử dụng sóng vô tuyến dải tần số nào?
A. 2 GHz
B. 5.2 GHz
C. 5 GHz
*D. 2.4 GHz

Câu 20. Giao thức định tuyến LEACH (Low-Energy Adaptive Clustering Hierarchy) trong WSN hoạt động dựa trên nguyên tắc nào là chính?
A. Mỗi nút tự tìm đường đi ngắn nhất đến trạm gốc.
*B. Chia mạng thành các cụm (cluster) và luân phiên vai trò của nút trưởng cụm (cluster head).
C. Sử dụng tọa độ GPS để định tuyến theo vị trí địa lý.
D. Gửi dữ liệu tràn lụt (flooding) ra toàn mạng.

Câu 21. Chuẩn IEEE 802.16 đặc tả công nghệ nào sau đây?
A. wifi
B. Bluetooth
C. NFC
*D. WiMAX

Câu 22. Chức năng chính của "Sink Node" hoặc "Gateway" trong mạng WSN là gì?
A. Chỉ thu thập dữ liệu từ môi trường.
B. Chỉ xử lý dữ liệu tại chỗ.
*C. Thu thập dữ liệu từ các nút cảm biến và chuyển tiếp đến mạng ngoài (ví dụ: Internet).
D. Cung cấp năng lượng cho các nút cảm biến khác.

Câu 23. "Chồng giao thức" (Protocol Stack) của mạng cảm biến không dây có điểm gì khác biệt so với chồng giao thức TCP/IP truyền thống?
A. Không có lớp vật lý và lớp liên kết dữ liệu.
*B. Thường có thêm các mặt phẳng quản lý năng lượng, quản lý di động và quản lý tác vụ.
C. Có số lớp nhiều hơn gấp đôi so với TCP/IP.
D. Chỉ sử dụng duy nhất một giao thức cho tất cả các lớp.

Câu 24. Một nút cảm biến (sensor node) trong mạng cảm biến không dây thường bao gồm bốn thành phần cơ bản nào?
A. Bộ vi xử lý, bộ nhớ, màn hình và pin.
B. Cảm biến, bộ thu phát, ăng-ten và vỏ bảo vệ.
*C. Cảm biến, bộ vi xử lý, bộ thu phát và nguồn năng lượng.
D. GPS, bộ khuếch đại, bộ lọc và nguồn năng lượng.

Câu 25. Trong chuẩn IEEE 802.15.4, thiết bị nào chịu trách nhiệm khởi tạo và quản lý toàn bộ mạng?
A. Thiết bị chức năng đầy đủ (Full-Function Device - FFD).
B. Thiết bị chức năng rút gọn (Reduced-Function Device - RFD).
*C. Bộ điều phối PAN (PAN Coordinator).
D. Nút cuối (End device).

Câu 26. "eNodeB" trong mạng 4G là gì?
A. Loại điện thoại di động
B. Một loại ứng dụng di động
*C. Thiết bị phát sóng trong mạng LTE
D. Router không dây

Câu 27. Công nghệ Bluetooth được sử dụng trong mạng nào sau đây?
A. LAN (mạng cục bộ)
B. WLAN (mạng cục bộ không dây)
C. WAN (mạng diện rộng)
*D. PAN (mạng cá nhân không dây)

Câu 28. Lợi ích chính của việc sử dụng cấu trúc mạng lưới (Mesh) trong WSN là gì?
A. Dễ cài đặt nhất.
*B. Tăng độ tin cậy và khả năng tự phục hồi của mạng.
C. Tiêu thụ ít năng lượng nhất ở mọi nút.
D. Yêu cầu bộ xử lý đơn giản nhất tại mỗi nút.

Câu 29. Kiến trúc mạng nào mà trong đó mỗi nút cảm biến kết nối trực tiếp đến một trạm gốc (Base Station) duy nhất?
A. Mạng lưới (Mesh)
B. Mạng hình cây (Tree)
*C. Mạng hình sao (Star)
D. Mạng Ad-hoc

Câu 30. Nhược điểm của giao thức CSMA/CD là gì?
A. Việc thêm các trạm ảnh hưởng tới các thủ tục của giao thức
B. Việc di chuyển các trạm ảnh hưởng tới các thủ tục của giao thức
*C. Khi số lượng kết nối trao đổi thông tin tăng thì hiệu suất truyền thông càng giảm nhanh chóng
D. Việc bớt các trạm ảnh hưởng tới các thủ tục của giao thức

Câu 31. Chuẩn kỹ thuật nào được sử dụng chủ yếu trong mạng di động 4G?
A. WiMAX
B. CDMA
*C. LTE
D. GSM

Câu 32. Multi-User, Multiple Input, Multiple Output (MU-MIMO) là gì?
A. Cách mã hóa dữ liệu truyền
B. Tần số sử dụng trong mạng Wi-Fi
C. Chuẩn kết nối mạng di động
*D. Khả năng kết nối với nhiều thiết bị cùng một lúc

Câu 33. Tấn công "Sinkhole" trong mạng WSN là hình thức tấn công nào?
A. Kẻ tấn công gửi các gói tin giả mạo để làm cạn kiệt năng lượng của các nút.
B. Kẻ tấn công làm nhiễu kênh truyền để ngăn chặn giao tiếp.
*C. Một nút độc hại quảng bá rằng nó có đường đi tốt nhất đến trạm gốc để thu hút toàn bộ lưu lượng truy cập về phía nó.
D. Kẻ tấn công nghe lén dữ liệu được truyền trên mạng.

Câu 34. Các mạng WiMAX có thể dùng những tần số nào?
A. 5,2 - 5,3 GHz và 2,5 - 2,9 GHz
B. 902 - 903 MHz và 2,5 - 2,9 GHz
C. 5,2 - 5,3 GHz và 902 - 903 MHz
*D. 3,3 - 3,6 GHz và 2,5 - 2,9 GHz

Câu 35. Lý do để mạng cục bộ sử dụng phương thức CSMA/CD là gì?
A. Phạm vi kết nối của mạng cục bộ hẹp
B. Tốc độ truyền thông của mạng cục bộ lớn
*C. Sử dụng chung hệ thống truyền thông
D. Giao thức truyền thông của mạng cục bộ đơn giản

Câu 36. Thuật ngữ Roaming là
A. Chuyển vùng quốc tế
B. Chuyển vùng liên tỉnh trong một quốc gia
*C. Khi một người dùng di động chuyển từ vùng phủ sóng của nhà mạng A sang vùng phủ sóng của nhà mạng B
D. Khi một user di chuyển từ cell này sang cell khác

Câu 37. Phạm vi hoạt động của thiết bị Bluetooth 1.0 là bao nhiêu?
A. Bán kính hoạt động 18m
B. Bán kính hoạt động 12m
*C. Bán kính hoạt động 10m
D. Bán kính hoạt động 20m

Câu 38. Kỹ thuật nào được sử dụng để một nút cảm biến có thể xác định vị trí của chính nó trong không gian?
A. Tổng hợp dữ liệu (Data Aggregation).
*B. Định vị (Localization).
C. Phân cụm (Clustering).
D. Điều khiển truy cập môi trường (MAC).

Câu 39. Đặc điểm nào sau đây KHÔNG phải là một thách thức lớn trong mạng cảm biến không dây?
A. Năng lượng hạn chế.
*B. Băng thông truyền thông cao.
C. Khả năng tự tổ chức.
D. An ninh và bảo mật.

Câu 40. Làm thế nào các nút trong mạng cảm biến không dây xác định khoảng cách từ chúng đến nguồn tín hiệu?
A. Sử dụng GPS
B. Sử dụng biến áp cảm biến
*C. Dựa vào độ mạnh của tín hiệu
D. Gửi yêu cầu đo khoảng cách đến trạm cơ sở
                `
            },
            {
                id: "mkd_c5_bai09",
                title: "Bài 09: Chương 5 - Mạng cục bộ không dây (WLAN)",
                data: `
Câu 1. Chuẩn IEEE 802.11n hoạt động ở bằng tần nào?
A. 2.4 GHz
B. 5 GHz
*C. 2.4 GHz / 5 GHz
D. 900 MHz

Câu 2. Tần số băng tần 5 GHz thường có lợi ích gì so với 2.4 GHz trong mạng Wi-Fi?
A. Phạm vi kết nối xa hơn
B. Tiết kiệm năng lượng
C. Tốc độ truyền dẫn thấp hơn
*D. Băng thông lớn hơn và ít nhiễu

Câu 3. Những thuận lợi khi chọn công nghệ Wireless để thiết lập mạng LAN:
*A. Khắc phục dễ dàng khi các sự cố nghiêm trọng xảy ra, có thể nhanh chóng thiết lập lại hệ thống mạng. Chi phí đầu tư cho mạng rẻ hơn
B. Tăng tính ổn định. Chi phí đầu tư cho mạng rẻ hơn
C. Tăng tính ổn định. Khắc phục dễ dàng khi các sự cố nghiêm trọng xảy ra, có thể nhanh chóng thiết lập lại hệ thống mạng
D. Tăng tính ổn định. Người quản lý có thể điều hành hệ thống dễ dàng hơn

Câu 4. Chuẩn IEEE 802.11b sử dụng dải tần số xung quanh:
A. 5 GHz
B. 1800 MHz
*C. 2.4 GHz
D. 900 MHz

Câu 5. Chuẩn IEEE 802.16 được phát hành năm nào?
A. 1997
B. 1999
*C. 2001
D. 1992

Câu 6. Chuẩn 802.11a và 802.11b được phát hành năm nào?
A. 1997
B. 1992
*C. 1999
D. 2003

Câu 7. Trong mạng không dây, chức năng của thiết bị Firewall là gì?
A. Tăng cường tín hiệu Wi-Fi
B. Tạo các mạng riêng ảo (VLAN)
*C. Kiểm soát việc truy cập Internet
D. Kết nối các thiết bị trong mạng

Câu 8. Trong mạng Wi-Fi, chức năng của thiết bị DHCP là gì?
A. Mã hóa dữ liệu truyền
B. Chuyển tiếp dữ liệu giữa các mạng
*C. Cấp địa chỉ IP tự động cho các thiết bị trong mạng
D. Tăng cường tín hiệu Wi-Fi

Câu 9. Chuẩn IEEE 802.11n có khoảng cách truyền dẫn bao nhiêu?
A. 35m
*B. 70m
C. 50m
D. 30m

Câu 10. Chọn phương án SAI trong các mô hình của Mạng WLAN sau:
A. Mô hình mạng cơ sở (BSSs)
B. Mô hình mạng mở rộng (ESSs)
*C. Mô hình mạng cục bộ
D. Mô hình mạng độc lập (IBSSs)

Câu 11. Địa chỉ MAC được gắn kết với loại thiết bị nào sau đây?
A. Router
B. Access Point
*C. PC
D. Modem

Câu 12. Những thuận lợi khi chọn công nghệ Wireless dùng sóng radio:
*A. Có thể xuyên qua các vật thể phi kim loại. Che phủ được trong bán kính khoảng 90 - 100m
B. Không nhiễu với các tín hiệu truyền thông khác. Che phủ được trong bán kính khoảng 90 - 100m
C. Có thể truyền ở những khoảng cách xa. Có thể xuyên qua các vật thể phi kim loại
D. Che phủ được trong bán kính khoảng 90 - 100m

Câu 13. Chuẩn IEEE 802.11n cho tốc độ tối đa bao nhiêu?
A. 50 Mbps
B. 54 Mbps
*C. 300 Mbps
D. 11 Mbps

Câu 14. Những bất lợi khi chọn công nghệ Wireless để thiết lập mạng LAN:
A. Những nguy cơ tiềm tàng trong bảo mật. Chi phí đầu tư cho mạng cao hơn so với công nghệ Wired. Ảnh hưởng sức khỏe con người do sử dụng sóng radio
B. Ảnh hưởng sức khỏe con người do sử dụng sóng radio. Chi phí đầu tư cho mạng cao hơn so với công nghệ Wired
*C. Khả năng bị nhiễu cao. Những nguy cơ tiềm tàng trong bảo mật. Ảnh hưởng sức khỏe con người do sử dụng sóng radio
D. Chi phí đầu tư cho mạng cao hơn so với công nghệ Wired

Câu 15. Điều gì là "EAP" trong ngữ cảnh của mạng không dây?
A. Một loại mã hóa dữ liệu
B. Tần số truyền dẫn
*C. Phương pháp xác thực người dùng
D. Loại điểm truy cập không dây

Câu 16. Chuẩn 802.11g cho phép truyền nhận thông tin ở giải tầng nào?
A. 900 MHz
B. 2,9 GHz
C. 5 GHz
*D. 2,4 GHz

Câu 17. Chuẩn IEEE 802.11i được triển khai dưới dạng chuẩn nào trong số các chuẩn Wi-Fi sau đây?
A. WPA
*B. WPA2
C. WEP
D. WPA3

Câu 18. Chuẩn bảo mật hiện nay được khuyến cáo dành cho các Wireless Access Point là?
A. WEP
B. ISP
*C. WPA/ WPA2
D. IPSec

Câu 19. Thiết bị nào được sử dụng để mở rộng phạm vi của mạng Wi-Fi và cải thiện tín hiệu?
A. Bridge
B. Modem
*C. Repeater
D. Hub

Câu 20. Thiết bị nào được sử dụng để kiểm soát lưu lượng dữ liệu và ngăn chặn các tấn công mạng?
A. Switch
*B. Firewall
C. Hub
D. Repeater

Câu 21. Một mạng chỉ sử dụng các máy tính với card LAN không dây được gọi là:
A. Bluetooth
B. WiMax
*C. AD-HOC
D. Access Point

Câu 22. Khi một Wireless LAN 802.11a chỉ gồm có các trạm client dùng Wireless, ta nói mạng này hoạt động như một nhóm dịch vụ cơ sở _______
A. Chế độ tiết kiệm năng lượng
B. Bị động
*C. Độc lập
D. Hạ tầng mạng

Câu 23. Thiết bị nào giúp người dùng kết nối nhanh chóng vào mạng Wi-Fi mà không cần nhập mật khẩu bằng cách sử dụng nút nhấn?
A. Access Point
*B. WPS-enabled Router
C. Repeater
D. Modem

Câu 24. Wireless Access Point có mấy chế độ hoạt động?
A. 4
B. 2
*C. 3
D. 1

Câu 25. Chuẩn IEEE 802.11 được phát hành năm nào?
A. 1992
*B. 1997
C. 1990
D. 1999

Câu 26. Công nghệ WEP là gì trong kiến trúc mạng không dây?
A. Một phương pháp xác thực người dùng
B. Một giao thức kết nối
*C. Một loại mã hóa dữ liệu
D. Một loại cổng mạng

Câu 27. Chuẩn 802.11g có phạm vi kết nối bao nhiêu mét?
A. 30m
B. 50m
*C. 35m
D. 70m

Câu 28. Chuẩn 802.11g được phát hành năm nào?
A. 1999
B. 1997
*C. 2003
D. 2010

Câu 29. Trong mô hình mạng WLAN sử dụng cơ chế bảo mật Filtering có những kiểu nào?
A. MAC address filtering
B. Protocol filtering
C. SSID filtering
*D. Cả 3 phương án

Câu 30. Chuẩn 802.11ac được phát hành năm nào?
A. 2003
B. 2009
*C. 2013
D. 1999

Câu 31. Chuẩn 802.11n được phát hành năm nào?
A. 2003
B. 1999
*C. 2009
D. 2013

Câu 32. Chuẩn IEEE 802.11ac cho tốc độ tối đa bao nhiêu?
A. 54 Mbps
*B. 1730 Mbps
C. 600 Mbps
D. 11 Mbps

Câu 33. Thành phần chính trong mạng WLAN sử dụng chuẩn 802.11:
A. Điểm truy cập (Access Point)
B. Tần liên lạc vô tuyến (Wireless Medium)
C. Hệ thống phân phối (DS - Distribution System)
*D. Cả 3 phương án

Câu 34. Mạng WLAN sử dụng chuẩn nào sau đây?
A. IEEE 802.13
B. IEEE 802.10
C. IEEE 802.12
*D. IEEE 802.11

Câu 35. Gain được định nghĩa là?
A. Sự mất mát năng lượng tín hiệu khi truyền sóng radio
B. Sự khuếch đại năng lượng tín hiệu khi truyền sóng radio
*C. Đại lượng đo mức độ khuếch đại năng lượng tín hiệu khi truyền sóng radio
D. Đại lượng đo mức độ mất mát năng lượng tín hiệu khi truyền sóng radio

Câu 36. Chuẩn IEEE 802.11b cho tốc độ tối đa bao nhiêu?
A. 2 Mbps
B. 50 Mbps
*C. 11 Mbps
D. 1 Mbps

Câu 37. Trong mạng Wi-Fi, thiết bị nào phát sóng tín hiệu và cho phép các thiết bị khác kết nối vào mạng?
A. Switch
B. Router
*C. Access Point
D. Modem

Câu 38. Chuẩn 802.11 hoạt động ở tầng nào trong mô hình OSI
A. Tầng liên kết và tầng mạng
*B. Tầng vật lý và tầng liên kết dữ liệu
C. Tầng mạng và tầng phiên
D. Tầng phiên và tầng Ứng dụng

Câu 39. Trong mạng Wi-Fi, SSID là gì?
*A. Tên của mạng Wi-Fi
B. Một loại mã hóa dữ liệu
C. Một địa chỉ IP duy nhất
D. Địa chỉ MAC của thiết bị

Câu 40. Phương pháp "Rogue AP detection" được sử dụng để làm gì trong bảo mật mạng không dây?
A. Ngăn chặn truy cập từ các thiết bị không xác định
*B. Phát hiện và ngăn chặn các điểm truy cập giả mạo
C. Tăng cường mã hóa dữ liệu truyền
D. Tạo ra các điểm truy cập ảo để mở rộng mạng
                `
            }
        ]
    }
];
       
       
