const subjectsData = [
      
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
A. 1990
*B. 1991
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
A. Hỗ trợ nhiều công nghệ vô tuyến khác nhau
B. Không cần liên kết điều khiển
C. Hỗ trợ tính di động tốt
*D. Cả ba phương án trên

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
B. Mã nhà sản xuất
*C. Mã kiểu dáng thiết bị
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
*B. BSC
C. BTS
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
*A. 2600 MHz
B. 1800 MHz
C. 900 MHz
D. Cả ba phương án

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
*B. 12/2017
C. 06/2018
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
*A. 100 MHz
B. 200 MHz
C. Trên 500 MHz
D. 1 GHz

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
*B. 2
C. 3
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
*B. 50m
C. 35m
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
       
       
