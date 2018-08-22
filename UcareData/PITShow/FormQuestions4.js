//Question type: Choice, MultiChoice
//Answer type: 
//- E (Emergency)
//- U (Urgency)
//- c (Choice)
//- o (Other) => user input, ปุ่มอื่นๆ
//- T (Time) => ระยะเวลา, วว/ดด/ปป (DatePicker) , เวลา(TimePicker), วันเดือน (Picker) , วันเดือนปี (Picker), เป็นช่วงๆ(frequency)
//- PC (Picture choice)
//- V (Vas score)


//1 question per page

const questionSource = {
    chiefQuestion: {
        title: "อาการสำคัญ",
        next: "end",
        emergency: false,
        question: "โปรดระบุอาการสำคัญ",
        type: 'Choice',
        answer: [
            { type: "c", title: "ไอเป็นเลือด", next: "coughBloodQuestions", sex: "MF" },
            { type: "c", title: "ไอ", next: "coughQuestions", sex: "MF" },
            { type: "c", title: "อาเจียนเป็นเลือด", next: "vomitBloodQuestions", sex: "MF" },
            { type: "c", title: "เหนื่อยง่าย", next: "fatigueQuestions", sex: "MF" },
            { type: "c", title: "แสบร้อนกลางอก", next: "heartBurnQuestions", sex: "MF" },
            { type: "c", title: "เวียนหัวบ้านหมุน", next: "vertigoQuestions", sex: "MF" },
            { type: "c", title: "เลือดออกผิดปกติ", next: "bleedingQuestions", sex: "MF" },
            { type: "c", title: "เลือดออกทางช่องคลอด", next: "vaginalBleedingQuestions", sex: "F" },
            { type: "c", title: "ลืมทานยาคุม", next: "birthControlPillQuestions", sex: "F" },
            { type: "c", title: "มึนหัวไม่มีบ้านหมุน", next: "noVertigoQuestions", sex: "MF" },
            { type: "c", title: "มึนหัว", next: "nauseaQuestions", sex: "MF" },
            { type: "c", title: "ผื่นหรือตุ่มผิวหนัง", next: "rashQuestions", sex: "MF" },
            { type: "c", title: "เป็นลม", next: "faintQuestions", sex: "MF" },
            { type: "c", title: "ปัสสาวะแสบขัด", next: "dysuriaQuestions", sex: "MF" },
            { type: "c", title: "ปัสสาวะมาก", next: " polyuriaQuestions", sex: "MF" },
            { type: "c", title: "ปัสสาวะเป็นเลือด", next: "hematuriaQuestions", sex: "MF" },
            { type: "c", title: "ปวดหัว", next: "headacheQuestions", sex: "MF" },
            { type: "c", title: "ปวดเมื่อยกล้ามเนื้อ", next: "musclePainQuestions", sex: "MF" },
            { type: "c", title: "ปวดท้องน้อย/ปวดประจำเดือน", next: "periodCrampsQuestions", sex: "F" },
            { type: "c", title: "ปวดท้อง", next: "stomachAcheQuestions", sex: "MF" },
            { type: "c", title: "ปวดหลัง", next: "backPainQuestions", sex: "MF" },
            { type: "c", title: "ปวดคอ", next: "neckPainQuestions", sex: "MF" },
            { type: "c", title: "ปวดข้อ", next: 148, sex: "MF" },
            { type: "c", title: "บวม", next: 154, sex: "MF" },
            { type: "c", title: "ถ่ายเป็นเลือดสด", next: 161, sex: "MF" },
            { type: "c", title: "ท้องเสีย", next: 170, sex: "MF" },
            { type: "c", title: "ตาแดง", next: 178, sex: "MF" },
            { type: "c", title: "ตัวเหลือง/ตาเหลือง", next: 183, sex: "MF" },
            { type: "c", title: "ตกขาว", next: 189, sex: "F" },
            { type: "c", title: "ซีด", next: 202, sex: "MF" },
            { type: "c", title: "ชัก", next: 207, sex: "MF" },
            { type: "c", title: "ใจสั่น", next: 215, sex: "MF" },
            { type: "c", title: "เจ็บแน่นหน้าอก", next: 221, sex: "MF" },
            { type: "c", title: "เจ็บคอ", next: 232, sex: "MF" },
            { type: "c", title: "จุกเสียดใต้ลิ้นปี่", next: 234, sex: "MF" },
            { type: "c", title: "คลื่นไส้ อาเจียน", next: 238, sex: "MF" },
            { type: "c", title: "ไข้", next: 248, sex: "MF" },
            { type: "c", title: "นอนหลับผิดปกติ", next: "question_7", sex: "MF" },
            { type: "c", title: "ก้อนที่ท้องน้อย", next: 267, sex: "F" },
            { type: "c", title: "ก้อนที่คอ", next: 281, sex: "MF" },
            { type: "c", title: "กล้ามเนื้ออ่อนแรง ", next: 288, sex: "MF" },
            { type: "o", title: "อื่นๆ", next: "end", sex: "MF", category: "description" },

        ]
    },
    //ไอเป็นเลือด
    coughBloodQuestions: {
        question_1: {
            title: "อาการฉุกเฉิน",
            emergency: false,
            question: "มีอาการเหล่านี้หรือไม่ ",
            type: 'MultiChoice',
            answer: [
                { type: "E", title: "ไอออกเลือดมากกว่า 1 แก้ว/ครั้ง ( 100 มล.)", question: "อาการฉุกเฉิน" },
                { type: "E", title: "ไอออกเลือดมากกว่า 1 แก้ว/วัน ( 200 มล.)", question: "อาการฉุกเฉิน" },
                { type: "E", title: "ไอออกเลือดมากกว่า 3 แก้ว/วัน ( 600 มล.)", question: "อาการฉุกเฉิน" },
                { type: "E", title: "นอนราบไม่ได้", question: "อาการฉุกเฉิน" },
                { type: "E", title: "เหนื่อย/เจ็บหน้าอกเฉียบพลัน", question: "อาการฉุกเฉิน" },
                { type: "c", title: "ไม่มี", question: "อาการฉุกเฉิน" }
            ]
        },
        question_2: {
            title: "ระยะเวลาของอาการ",
            emergency: false,
            question: "ระยะเวลาของอาการ",
            type: 'Choice',
            answer: [
                { type: "T", title: "ระยะเวลา", question: "ระยะเวลาของอาการ" }
            ]
        },
        question_3: {
            title: "อาการร่วม",
            emergency: false,
            question: "อาการร่วม",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "ไข้", question: "อาการร่วม" },
                { type: "c", title: "ปวดข้อ", question: "อาการร่วม" },
                { type: "c", title: "ผมร่วง", question: "อาการร่วม" },
                { type: "c", title: "ผื่นแพ้แสง", question: "อาการร่วม" },
                { type: "c", title: "ปัสสาวะเป็นเลือด", question: "อาการร่วม" },
                { type: "c", title: "เบื่ออาหาร/น้ำหนักลด", question: "อาการร่วม" },
                { type: "c", title: "มีเสมหะข้นและมีกลิ่นเหม็น", question: "อาการร่วม" },
                { type: "c", title: "ไม่มี", question: "อาการร่วม" },
                { type: "o", title: "อื่นๆ", question: "อาการร่วม", category: "description" }
            ]
        },
        question_4: {
            title: "ประวัติในอดีต",
            emergency: false,
            question: "ประวัติในอดีต",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "มีเลือดออกง่าย", question: "ประวัติในอดีต" },
                { type: "c", title: "ประวัติโรคเลือด", question: "ประวัติในอดีต" },
                { type: "c", title: "เคยเป็นวัณโรคมาก่อน", question: "ประวัติในอดีต" },
                { type: "c", title: "มะเร็งปอดในครอบครัว", question: "ประวัติในอดีต" },
                { type: "c", title: "ได้รับบาดเจ็บบริเวณทรวงอก", question: "ประวัติในอดีต" },
                { type: "c", title: "ทานยาแก้ปวดกล้ามเนื้อ/ปวดข้อ", question: "ประวัติในอดีต" },
                { type: "c", title: "ใช้ยาต้านการแข็งตัวของเลือด (warfarin)", question: "ประวัติในอดีต" },
                { type: "c", title: "ใช้ยาต้านการจับตัวของเกร็ดเลือด (aspirin)", question: "ประวัติในอดีต" },
                { type: "c", title: "เคยส่องกล้องในทางเดินหายใจ", question: "ประวัติในอดีต" },
                { type: "F", title: "ใช้ยาคุมกำเนิด", question: "ประวัติในอดีต" },
                { type: "c", title: "ไม่มี", question: "ประวัติในอดีต" },

            ]
        }
    }
    ,
    //ไอ
    coughQuestions: {
        question_1: {
            title: "อาการฉุกเฉิน",
            emergency: true,
            question: "มีอาการเหล่านี้หรือไม่",
            type: 'MultiChoice',
            answer: [
                { type: "E", title: "สำลัก", question: "อาการฉุกเฉิน" },
                { type: "E", title: "หายใจเร็วขึ้น", question: "อาการฉุกเฉิน" },
                { type: "E", title: "ตัวเขียว/ปากเขียว", question: "อาการฉุกเฉิน" },
                { type: "E", title: "แน่นหน้าอกเฉียบพลัน", question: "อาการฉุกเฉิน" },
                { type: "c", title: "ไม่มี", question: "อาการฉุกเฉิน" }
            ]
        },
        question_2: {
            title: "ระยะเวลาของอาการ",
            emergency: false,
            question: "ระยะเวลาของอาการ",
            type: 'Choice',
            answer: [
                { type: "T", title: "ระยะเวลา", question: "ระยะเวลาของอาการ" }
            ]
        },
        question_3: {
            title: "ลักษณะอาการไอ",
            emergency: false,
            question: "ลักษณะอาการไอ",
            type: 'Choice',
            answer: [
                { type: "c", title: "ไอแห้ง", question: "ลักษณะอาการไอ" },
                { type: "c", title: "ไอมีเสมหะ", question: "ลักษณะอาการไอ" },
                { type: "c", title: "ไอเป็นชุด", question: "ลักษณะอาการไอ" },
                { type: "c", title: "ไอเสียงแหบ", question: "ลักษณะอาการไอ" },
                { type: "c", title: "ไอมีเลือดปน", question: "ลักษณะอาการไอ" },
                { type: "c", title: "ไอหายใจเสียงหวีด", question: "ลักษณะอาการไอ" },
                { type: "c", title: "ไม่แน่ใจ", question: "ลักษณะอาการไอ" },
                { type: "o", title: "อื่นๆ", question: "ลักษณะอาการไอ", category: "description" },
            ]
        },
        question_4: {
            title: "ความถี่ของอาการ",
            emergency: false,
            question: "ความถี่ของอาการ",
            type: 'Choice',
            answer: [
                { type: "c", title: "บ่อยตลอดวัน", question: "ความถี่ของอาการ" },
                { type: "c", title: "ไอเป็นบางช่วง", question: "ความถี่ของอาการ" },
                { type: "c", title: "เป็นน้อยไม่ไอทุกวัน", question: "ความถี่ของอาการ" },
                { type: "c", title: "เป็นมากขึ้นช่วงกลางคืน/นอนราบ", question: "ความถี่ของอาการ" },
                { type: "o", title: "อื่นๆ", question: "ความถี่ของอาการ", category: "description" }
            ]
        },
        question_5: {
            title: "สิ่งที่กระตุ้นให้ไอ",
            emergency: false,
            question: "สิ่งที่กระตุ้นให้ไอ",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "ฝุ่นควัน", question: "สิ่งที่กระตุ้นให้ไอ" },
                { type: "c", title: "อากาศเย็น", question: "สิ่งที่กระตุ้นให้ไอ" },
                { type: "c", title: "นอนราบแล้วไอ", question: "สิ่งที่กระตุ้นให้ไอ" },
                { type: "c", title: "ไม่มี", question: "สิ่งที่กระตุ้นให้ไอ" },
                { type: "c", title: "ไม่แน่ใจ", question: "สิ่งที่กระตุ้นให้ไอ" },
                { type: "o", title: "อื่นๆ", question: "สิ่งที่กระตุ้นให้ไอ", category: "description" },
            ]
        },
        question_6: {
            title: "อาการดีขึ้นจาก",
            emergency: false,
            question: "อาการดีขึ้นจาก",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "ทานยาแล้วดีขึ้น", question: "อาการดีขึ้นจาก" },
                { type: "c", title: "การรักษาก่อนหน้า", question: "อาการดีขึ้นจาก" },
                { type: "c", title: "ทานยาแล้วอาการลดลง", question: "อาการดีขึ้นจาก" },
                { type: "c", title: "นั่งตัวตรงแล้วอาการลดลง", question: "อาการดีขึ้นจาก" },
                { type: "c", title: "อาการไม่ดีขึ้นเลย", question: "อาการดีขึ้นจาก" },
                { type: "o", title: "อื่นๆ", question: "อาการดีขึ้นจาก", category: "description" }
            ]
        },
        question_7: {
            title: "อาการร่วม",
            emergency: false,
            question: "อาการร่วม",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "ไข้", question: "อาการร่วม" },
                { type: "c", title: "ปวดหู", question: "อาการร่วม" },
                { type: "c", title: "เสียงแหบ", question: "อาการร่วม" },
                { type: "c", title: "เรอเปรี้ยว", question: "อาการร่วม" },
                { type: "c", title: "น้ำมูกลงคอ", question: "อาการร่วม" },
                { type: "c", title: "เสมหะขาวใส", question: "อาการร่วม" },
                { type: "c", title: "เสมหะเขียวเหลือง", question: "อาการร่วม" },
                { type: "c", title: "เสมหะแดง/เลือดปน", question: "อาการร่วม" },
                { type: "c", title: "ปวดโพรงจมูก", question: "อาการร่วม" },
                { type: "c", title: "คัดจมูก เจ็บคอ", question: "อาการร่วม" },
                { type: "c", title: "แสบร้อนหน้าอก", question: "อาการร่วม" },
                { type: "c", title: "ปวดตามใบหน้า", question: "อาการร่วม" },
                { type: "c", title: "น้ำมูกนำมาก่อนไอ", question: "อาการร่วม" },
                { type: "c", title: "เบื่ออาหาร/น้ำหนักลด", question: "อาการร่วม" },
                { type: "c", title: "ไม่มี", question: "อาการร่วม" },
                { type: "o", title: "อื่นๆ", question: "อาการร่วม", category: "description" }
            ]
        },
        question_8: {
            title: "ประวัติในอดีต",
            emergency: false,
            question: "ประวัติในอดีต",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "สูบบุหรี่", question: "ประวัติในอดีต" },
                { type: "c", title: "โรคหอบหืด", question: "ประวัติในอดีต" },
                { type: "c", title: "โรคถุงลมโป่งพอง", question: "ประวัติในอดีต" },
                { type: "c", title: "มีประวัติภูมิแพ้ของตัวเอง/ครอบครัว", question: "ประวัติในอดีต" },
                { type: "c", title: "ประวัติโรคกระเพาะ/กรดไหลย้อน", question: "ประวัติในอดีต" },
                { type: "c", title: "ประวัติวัณโรคของตัวเอง/ครอบครัว", question: "ประวัติในอดีต" },
                { type: "c", title: "กำลังทานยาลดความดัน ", question: "ประวัติในอดีต" },
                { type: "c", title: "หัวใจล้มเหลว", question: "ประวัติในอดีต" },
                { type: "c", title: "ไม่มี", question: "ประวัติในอดีต" }
            ]
        }
    }
    ,
    //อาเจียนเป็นเลือด
    vomitBloodQuestions: {
        question_1: {
            title: "ลักษณะเลือด",
            emergency: false,
            question: "ลักษณะเลือด",
            type: 'Choice',
            answer: [
                { type: "c", title: "ลิ่มเลือดปนเศษอาหาร", question: "ลักษณะเลือด" },
                { type: "c", title: "สีแดงสด", question: "ลักษณะเลือด" },
                { type: "c", title: "สีโอวัลติน", question: "ลักษณะเลือด" },
                { type: "c", title: "มีเลือดปนเล็กน้อย", question: "ลักษณะเลือด" },
            ]
        },
        question_2: {
            title: "อาการฉุกเฉิน",
            emergency: false,
            question: "มีอาการเหล่านี้ไหม",
            type: 'MultiChoice',
            answer: [
                { type: "E", title: "ลุกนั่งแล้วเวียนศีรษะ", question: "อาการฉุกเฉิน" },
                { type: "E", title: "มีอาการซึม เรียกไม่ตื่น", question: "อาการฉุกเฉิน" },
                { type: "E", title: "ปริมาณเลือดสดมากกว่า 2  แก้วน้ำ ", question: "อาการฉุกเฉิน" },
                { type: "E", title: "อาเจียนเป็นเลือดและมีถ่ายเป็นเลือดร่วมด้วย", question: "อาการฉุกเฉิน" },
                { type: "c", title: "ไม่มี", question: "อาการฉุกเฉิน" }
            ]
        },
        question_3: {
            title: "เคยอาเจียนเป็นเลือดมาก่อน",
            emergency: false,
            question: "เคยอาเจียนเป็นเลือดมาก่อนหรือไม่",
            type: 'Choice',
            answer: [
                { type: "c", title: "ใช่", question: "เคยอาเจียนเป็นเลือดมาก่อน" },
                { type: "c", title: "ไม่ใช่", question: "เคยอาเจียนเป็นเลือดมาก่อน" },
            ]
        },
        question_4: {
            title: "ปริมาณเลือดที่ออก",
            emergency: false,
            question: "ปริมาณเลือดที่ออก ", //*****สงสัย ขอรูป ?*******
            type: 'Choice',
            answer: [
                { type: "c", title: "1 แก้วน้ำ", question: "ปริมาณเลือดที่ออก" },
                { type: "c", title: "น้อยกว่า 1 แก้วน้ำ", question: "ปริมาณเลือดที่ออก" },
                { type: "c", title: "มากกว่า 1 แก้วน้ำ", question: "ปริมาณเลือดที่ออก" },
                { type: "c", title: "ไม่แน่ใจ", question: "ปริมาณเลือดที่ออก" }
            ]
        },
        question_5: {
            title: "อาการร่วม",
            emergency: false,
            question: "อาการร่วม",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "ไข้", question: "อาการร่วม" },
                { type: "c", title: "ท้องโต", question: "อาการร่วม" },
                { type: "c", title: "ถ่ายดำ", question: "อาการร่วม" },
                { type: "c", title: "ปวดท้อง", question: "อาการร่วม" },
                { type: "c", title: "แน่นท้อง", question: "อาการร่วม" },
                { type: "c", title: "แสบร้อนหน้าอก", question: "อาการร่วม" },
                { type: "c", title: "คลื่นไส้/อาเจียน", question: "อาการร่วม" },
                { type: "c", title: "ตัวเหลือง/ตาเหลือง", question: "อาการร่วม" },
                { type: "c", title: "กลืนเจ็บ/กลืนลำบาก", question: "อาการร่วม" },
                { type: "c", title: "เบื่ออาหาร/น้ำหนักลด", question: "อาการร่วม" },
                { type: "c", title: "อาเจียนรุนแรงก่อนอาเจียนเป็นเลือด", question: "อาการร่วม" },
                { type: "c", title: "ไม่มี", question: "อาการร่วม" },
                { type: "o", title: "อื่นๆ", question: "อาการร่วม", category: "description" }
            ]
        },
        question_6: {
            title: "ประวัติในอดีต",
            emergency: false,
            question: "เคยมีอาการในอดีตเหล่านี้หรือไม่",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "เป็นโรคตับ", question: "ประวัติในอดีต" },
                { type: "c", title: "เคยเป็นโรคกระเพาะ", question: "ประวัติในอดีต" },
                { type: "c", title: "เคยผ่าตัดหลอดเลือดใหญ่", question: "ประวัติในอดีต" },
                { type: "c", title: "มีประวัติมะเร็งในครอบครัว", question: "ประวัติในอดีต" },
                { type: "c", title: "ทานยาแก้ปวดกล้ามเนื้อ/ปวดข้อ ", question: "ประวัติในอดีต" },
                { type: "c", title: "มีประวัติเลือดออกง่าย หยุดยาก", question: "ประวัติในอดีต" },
                { type: "c", title: "ใช้ยาต้านการแข็งตัวของเลือด (warfarin)", question: "ประวัติในอดีต" },
                { type: "c", title: "เป็นเส้นเลือดหลอดอาหารโป่งพอง", question: "ประวัติในอดีต" },
                { type: "c", title: "ใช้ยาต้านการจับตัวของเกร็ดเลือด (aspirin)", question: "ประวัติในอดีต" },
                { type: "c", title: "ไม่มี", question: "ประวัติในอดีต" }
            ]
        }
    },
    //เหนื่อยง่าย
    fatigueQuestions: {
        question_1: {
            title: "ระยะเวลาของอาการที่เคยเป็นในอดีต",
            emergency: false,
            question: "ระยะเวลาที่เป็นของอาการในอดีต",
            type: 'Choice',
            answer: [
                { type: "T", title: "ระยะเวลา", question: "ระยะเวลาของอาการที่เคยเป็นในอดีต" }
            ]
        },
        question_2: {
            title: "อาการฉุกเฉิน",
            emergency: false,
            question: "มีอาการเหล่านี้ไหม",
            type: 'MultiChoice',
            answer: [
                { type: "E", title: "ซึมลง", question: "อาการฉุกเฉิน" },
                { type: "E", title: "เกิดขึ้นทันทีทันใด", question: "อาการฉุกเฉิน" },
                { type: "E", title: "ตัวเขียว/ปากเขียว", question: "อาการฉุกเฉิน" },
                { type: "E", title: "หายใจเร็ว/หายใจไม่ออก", question: "อาการฉุกเฉิน" },
                { type: "E", title: "มีประวัติสำลักสิ่งแปลกปลอม", question: "อาการฉุกเฉิน" },
                { type: "c", title: "ไม่มี", question: "อาการฉุกเฉิน" }
            ]
        },
        question_3: {
            title: "ลักษณะอาการ",
            emergency: false,
            question: "ลักษณะอาการ",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "หายใจไม่โล่ง/ไม่อิ่ม", question: "ลักษณะอาการ" },
                { type: "c", title: "หายใจถี่มากขึ้น", question: "ลักษณะอาการ" },
                { type: "c", title: "ต้องใช้แรงในการหายใจมากขึ้น", question: "ลักษณะอาการ" },
                { type: "c", title: "ไม่แน่ใจ", question: "ลักษณะอาการ" },
                { type: "o", title: "อื่นๆ", category: "description", question: "ลักษณะอาการ" }
            ]
        },
        question_4: {
            title: "ปัจจัยที่ทำให้ดีขึ้น",
            emergency: false,
            question: "ปัจจัยที่ทำให้ดีขึ้น",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "พ่นยา", question: "ปัจจัยที่ทำให้ดีขึ้น" },
                { type: "c", title: "พักผ่อน", question: "ปัจจัยที่ทำให้ดีขึ้น" },
                { type: "c", title: "ลุกขึ้นนั่ง", question: "ปัจจัยที่ทำให้ดีขึ้น" },
                { type: "c", title: "ไม่มี", question: "ปัจจัยที่ทำให้ดีขึ้น" }
            ]
        },
        question_5: {
            title: "ปัจจัยที่ทำให้อาการแย่ลง",
            emergency: false,
            question: "สื่งที่ทำให้แย่ลง",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "นั่ง", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "c", title: "สูบบุหรี่", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "c", title: "นอนราบ", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "c", title: "ฝุ่นละออง", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "c", title: "หายใจเข้าลึกๆแล้วเจ็บ", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "c", title: "ไม่มี", question: "ปัจจัยที่ทำให้แย่ลง" }
            ]
        },
        question_6: {
            title: "อาการร่วม",
            emergency: false,
            question: "อาการร่วม",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "ไข้", question: "อาการร่วม" },
                { type: "c", title: "ไอ", question: "อาการร่วม" },
                { type: "c", title: "ใจสั่น", question: "อาการร่วม" },
                { type: "c", title: "มือสั่น", question: "อาการร่วม" },
                { type: "c", title: "มีเสมหะ", question: "อาการร่วม" },
                { type: "c", title: "เจ็บหน้าอก", question: "อาการร่วม" },
                { type: "c", title: "ท้องบวมโต", question: "อาการร่วม" },
                { type: "c", title: "ปัสสาวะบ่อย", question: "อาการร่วม" },
                { type: "c", title: "ดื่มน้ำมากขึ้น", question: "อาการร่วม" },
                { type: "c", title: "ขี้ร้อนผิดปกติ", question: "อาการร่วม" },
                { type: "c", title: "ปัสสาวะลดลง", question: "อาการร่วม" },
                { type: "c", title: "มีตุ่มน้ำขึ้นตามผิวหนัง", question: "อาการร่วม" },
                { type: "c", title: "ตัวเหลือง/ตาเหลือง", question: "อาการร่วม" },
                { type: "c", title: "เบื่ออาหาร/น้ำหนักลด", question: "อาการร่วม" },
                { type: "c", title: "บวมที่ขา/แขน/ตัว/หนังตา", question: "อาการร่วม" },
                { type: "c", title: "ไม่มี", question: "อาการร่วม" },
                { type: "o", title: "อื่นๆ", category: "description", question: "อาการร่วม" }
            ]
        },
        question_7: {
            title: "โรคประจำตัว",
            emergency: false,
            question: "โรคประจำตัว",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "ภูมิแพ้", question: "โรคประจำตัว" },
                { type: "c", title: "โรคเลือด", question: "โรคประจำตัว" },
                { type: "c", title: "เบาหวาน", question: "โรคประจำตัว" },
                { type: "c", title: "ไทรอยด์", question: "โรคประจำตัว" },
                { type: "c", title: "โรคหืด/ถุงลมโป่งพอง", question: "โรคประจำตัว" },
                { type: "c", title: "คนในครอบครัวเสียชีวิตกะทันหัน", question: "โรคประจำตัว" },
                { type: "c", title: "ไม่มี", question: "โรคประจำตัว" },
                { type: "o", title: "อื่นๆ", question: "โรคประจำตัว", category: "description" }
            ]
        },
        question_8: {
            title: "ประวัติในอดีต",
            emergency: false,
            question: "ประวัติในอดีต",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "นอนอยู่กับที่นานๆ", question: "ประวัติในอดีต" },
                { type: "c", title: "เคยได้รับบาดเจ็บบริเวณทรวงอก", question: "ประวัติในอดีต" },
                { type: "c", title: "ไม่มี", question: "ประวัติในอดีต" },
            ]
        }
    },
    //แสบร้อนกลางอก
    heartBurnQuestions: {
        question_1: {
            title: "อาการร่วม",
            emergency: false,
            question: "อาการร่วม",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "อาเจียนหรือถ่ายเป็นเลือด", question: "อาการร่วม" },
                { type: "c", title: "น้ำหนักลดโดยไม่ทราบสาเหตุ", question: "อาการร่วม" },
                { type: "c", title: "กลืนลำบาก", question: "อาการร่วม" },
                { type: "c", title: "อาเจียนต่อเนื่อง", question: "อาการร่วม" },
                { type: "c", title: "จุกแน่นบริเวณลำคอ", question: "อาการร่วม" },
                { type: "c", title: "เรอเปรี้ยว", question: "อาการร่วม" },
                { type: "c", title: "เสียงแหบ", question: "อาการร่วม" },
                { type: "c", title: "ไอแห้ง", question: "อาการร่วม" },
                { type: "c", title: "มีอาการเจ็บหน้าอก", question: "อาการร่วม" },
                { type: "o", title: "อื่นๆ", question: "อาการร่วม", category: "description" },
            ]
        }
    },
    //เวียนหัวบ้านหมุน
    vertigoQuestions: {
        question_1: {
            title: "ระยะเวลาของอาการบ้านหมุน",
            emergency: false,
            question: "ระยะเวลาที่มีเฉพาะอาการบ้านหมุน (ไม่รวมมึนหัว)",
            type: 'Choice',
            answer: [
                { type: "T", title: "ระยะเวลา", question: "ระยะเวลาของอาการบ้านหมุน" },
            ]
        },
        question_2: {
            title: "อาการฉุกเฉิน",
            emergency: true,
            question: "มีอาการเหล่านี้ไหม",
            type: 'MultiChoice',
            answer: [
                { type: "E", title: "ปวดศีรษะรุนแรง", question: "อาการฉุกเฉิน" },
                { type: "E", title: "คลื่นไส้/อาเจียน", question: "อาการฉุกเฉิน" },
                { type: "E", title: "อาการเกิดขึ้นทันที", question: "อาการฉุกเฉิน" },
                { type: "c", title: "ไม่มี", question: "อาการฉุกเฉิน" }
            ]
        },
        question_3: {
            title: "มีช่วงเวลาที่อาการหายดี",
            emergency: false,
            question: "มีช่วงเวลาที่อาการหายดี",
            type: 'Choice',
            answer: [
                { type: "c", title: "ใช่", question: "มีช่วงเวลาที่อาการหายดี" },
                { type: "c", title: "ไม่ใช่", question: "มีช่วงเวลาที่อาการหายดี" }
            ]
        },
        question_4: {
            title: "ความรุนแรง",
            emergency: false,
            question: "ความรุนแรง",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "กระทบงานที่ทำ", question: "ความรุนแรง" },
                { type: "c", title: "กระทบกิจวัตรประจำวัน", question: "ความรุนแรง" },
                { type: "c", title: "อาการจะรุนแรงช่วงหนึ่งแล้วค่อยๆทุเลาลง", question: "ความรุนแรง" },
                { type: "c", title: "อาการเป็นค้างอยู่นาน", question: "ความรุนแรง" },
                { type: "o", title: "อื่นๆ", question: "ความรุนแรง", category: "description" }
            ]
        },
        question_5: {
            title: "อาการร่วม",
            emergency: false,
            question: "อาการร่วม",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "คลื่นไส้/อาเจียน", question: "อาการร่วม" },
                { type: "c", title: "ไม่สามารถทรงตัวได้", question: "อาการร่วม" },
                { type: "c", title: "อ่อนเพลีย", question: "อาการร่วม" },
                { type: "c", title: "เหงื่อออก", question: "อาการร่วม" },
                { type: "c", title: "สูญเสียการได้ยิน", question: "อาการร่วม" },
                { type: "c", title: "ปวดหู", question: "อาการร่วม" },
                { type: "c", title: "หูอื้อ", question: "อาการร่วม" },
                { type: "c", title: "น้ำไหลออกจากหู", question: "อาการร่วม" },
                { type: "c", title: "มีเสียงดังในหู", question: "อาการร่วม" },
                { type: "c", title: "ปวดหัว", question: "อาการร่วม" },
                { type: "c", title: "แขนขาอ่อนแรง", question: "อาการร่วม" },
                { type: "c", title: "ชา", question: "อาการร่วม" },
                { type: "c", title: "กล้ามเนื้อใบหน้าอ่อนแรง", question: "อาการร่วม" },
                { type: "c", title: "หน้ามืดหรือหมดสติ", question: "อาการร่วม" },
                { type: "c", title: "เป็นลม", question: "อาการร่วม" },
                { type: "c", title: "ไม่มี", question: "อาการร่วม" },
                { type: "o", title: "อื่นๆ", question: "อาการร่วม", category: "description" }
            ]
        },
        question_6: {
            title: "ปัจจัยที่ทำให้แย่ลง",
            emergency: false,
            question: "สิ่งที่ทำให้อาการแย่ลง",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "เมื่อเปลี่ยนท่าทาง", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "c", title: "ก้มหน้า", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "c", title: "เงยหน้า", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "c", title: "ล้มตัวลงนอน", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "c", title: "หันหน้าไปด้านใดด้านหนึ่ง", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "c", title: "ไอ/จาม/เบ่ง", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "c", title: "ขึ้นเครื่องบิน", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "c", title: "ทานอาหารเค็ม", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "c", title: "เปลี่ยนแว่นตาใหม่", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "c", title: "ไม่มี", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "o", title: "อื่นๆ", question: "ปัจจัยที่ทำให้แย่ลง", category: "description" }
            ]
        }
    },
    //เลือดออกผิดปกติ
    bleedingQuestions: {
        question_1: {
            title: "ระยะเวลาของอาการ",
            emergency: false,
            question: "ระยะเวลาที่มีอาการ",
            type: 'Choice',
            answer: [
                { type: "T", title: "ระยะเวลา", question: "ระยะเวลาของอาการ" }
            ]
        },
        question_2: {
            title: "อาการฉุกเฉิน",
            emergency: true,
            question: "มีอาการเหล่านี้ร่วมด้วยหรือไม่",
            type: 'MultiChoice',
            answer: [
                { type: "E", title: "ซึมลง", question: "อาการฉุกเฉิน" },
                { type: "E", title: "เลือดไหลออกไม่หยุด", question: "อาการฉุกเฉิน" },
                { type: "E", title: "หน้ามืดวิงเวียนโดยเฉพาะตอนลุกนั่ง", question: "อาการฉุกเฉิน" },
                { type: "c", title: "ไม่มี", question: "อาการฉุกเฉิน" }
            ]
        },
        question_3: {
            title: "กดห้ามเลือดแล้วหยุดหรือไม่",
            emergency: false,
            question: "กดห้ามเลือดแล้วหยุดไหม",
            type: 'Choice',
            answer: [
                { type: "c", title: "หยุด", question: "กดห้ามเลือดแล้วหยุดหรือไม่" },
                { type: "c", title: "ไม่หยุด", question: "กดห้ามเลือดแล้วหยุดหรือไม่" },
                { type: "c", title: "กดห้ามไม่ได้", question: "กดห้ามเลือดแล้วหยุดหรือไม่" }
            ]
        },
        question_4: {
            title: "อาการร่วม",
            emergency: false,
            question: "อาการร่วม",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "ไข้", question: "อาการร่วม" },
                { type: "c", title: "เป็นหวัดบ่อยๆ", question: "อาการร่วม" },
                { type: "c", title: "มีจุดเลือดออกเล็กๆ", question: "อาการร่วม" },
                { type: "c", title: "มีจ้ำเลือดผิดปกติ", question: "อาการร่วม" },
                { type: "c", title: "เลือดออกตามไรฟันร่วมด้วย", question: "อาการร่วม" },
                { type: "c", title: "อุจจาระเป็นเลือดร่วมด้วย", question: "อาการร่วม" },
                { type: "c", title: "ปัสสาวะเป็นเลือดร่วมด้วย", question: "อาการร่วม" },
                { type: "c", title: "เคยมีเลือดออกมาก่อน", question: "อาการร่วม" },
                { type: "c", title: "ไม่มี", question: "อาการร่วม" },
                { type: "o", title: "อื่นๆ", question: "อาการร่วม", category: "description" }
            ]
        },
        question_5: {
            title: "ประวัติในอดีต",
            emergency: false,
            question: "ประวัติในอดีต",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "เคยเป็นโรคตับ", question: "ประวัติในอดีต" },
                { type: "c", title: "เคยเป็นโรคไต", question: "ประวัติในอดีต" },
                { type: "c", title: "มีโรคหัวใจอยู่เดิม", question: "ประวัติในอดีต" },
                { type: "c", title: "ทานยาแก้ปวดกล้ามเนื้อ/ปวดข้อ", question: "ประวัติในอดีต" },
                { type: "c", title: "มีประวัติเลือดหยุดยากในครอบครัว", question: "ประวัติในอดีต" },
                { type: "c", title: "บริเวณที่พักอาศัยมีคนเป็นไข้เลือดออก", question: "ประวัติในอดีต" },
                { type: "c", title: "ใช้ยาต้านการแข็งตัวของเลือด (warfarin)", question: "ประวัติในอดีต" },
                { type: "c", title: "ใช้ยาต้านการจับตัวของเกร็ดเลือด (aspirin)", question: "ประวัติในอดีต" },
                { type: "c", title: "ไม่มี", question: "ประวัติในอดีต" },
            ]
        }
    },
    //เลือดออกทางช่องคลอด
    vaginalBleedingQuestions: {
        question_1: {
            title: "ลักษณะของเลือดที่ออก",
            emergency: false,
            question: "ลักษณะของเลือดที่ออก",
            type: 'Choice',
            answer: [
                { type: "c", title: "ประจำเดือนมามาก", question: "ลักษณะของเลือดที่ออก" },
                { type: "c", title: "ประจำเดือนมานาน", question: "ลักษณะของเลือดที่ออก" },
                { type: "c", title: "เลือดออกระหว่างรอบเดือน", question: "ลักษณะของเลือดที่ออก" },
                { type: "c", title: "เลือดออกระหว่างตั้งครรภ์", question: "ลักษณะของเลือดที่ออก" },
                { type: "c", title: "เลือดออกหลังมีเพศสัมพันธ์", question: "ลักษณะของเลือดที่ออก" },
                { type: "c", title: "เลือดออกหลังหยุดมีประจำเดือนมามากกว่า 1 ปี", question: "ลักษณะของเลือดที่ออก" },
                { type: "c", title: "ไม่แน่ใจ", question: "ลักษณะของเลือดที่ออก" }
            ]
        },
        question_2: {
            title: "ระยะเวลาของอาการ",
            emergency: false,
            question: "ระยะเวลาที่มีอาการ",
            type: 'Choice',
            answer: [
                { type: "T", title: "ระยะเวลา", next: "question_3", question: "ระยะเวลาที่มีอาการ" },
            ]
        },
        question_3: {
            title: "อาการฉุกเฉิน",
            emergency: true,
            question: "มีอาการเหล่านี้ไหม",
            type: 'MultiChoice',
            answer: [
                { type: "U", title: "ไข้", question: "อาการฉุกเฉิน" },
                { type: "U", title: "ปวดประจำเดือน", question: "อาการฉุกเฉิน" },
                { type: "U", title: "ปวดท้อง", question: "อาการฉุกเฉิน" },
                { type: "U", title: "ตกขาว", question: "อาการฉุกเฉิน" },
                { type: "U", title: "เจ็บเวลามีเพศสัมพันธ์ ", question: "อาการฉุกเฉิน" },
                { type: "U", title: "เลือดออกหลังมีเพศสัมพันธ์", question: "อาการฉุกเฉิน" },
                { type: "U", title: "ตึงคัดเต้านม", question: "อาการฉุกเฉิน" },
                { type: "U", title: "คลำได้ก้อน", question: "อาการฉุกเฉิน" },
                { type: "U", title: "ท้องโตขึ้น", question: "อาการฉุกเฉิน" },
                { type: "U", title: "เบื่ออาหาร", question: "อาการฉุกเฉิน" },
                { type: "U", title: "อุจจาระหรือปัสสาวะผิดปกติ", question: "อาการฉุกเฉิน" },
                { type: "U", title: "น้ำหนักลด", question: "อาการฉุกเฉิน" },
                { type: "U", title: "คลื่นไส้/อาเจียน", question: "อาการฉุกเฉิน" },
                { type: "c", title: "ไม่มี", question: "อาการฉุกเฉิน" }
            ]
        },
        question_4: {
            title: "เคยมีเลือดออกมาก่อน",
            emergency: false,
            question: "เคยมีเลือดออกมาก่อนไหม",
            type: 'Choice',
            answer: [
                { type: "c", title: "เคย", question: "เคยมีเลือดออกมาก่อน" },
                { type: "c", title: "ไม่เคย", question: "เคยมีเลือดออกมาก่อน" }
            ]
        },
        question_5: {
            title: "ประวัติการตรวจภายในและมะเร็งปากมดลูก",
            emergency: false,
            question: "ประวัติการตรวจภายในและมะเร็งปากมดลูก",
            type: 'Choice',
            answer: [
                { type: "c", title: "ไม่มี", question: "ประวัติการตรวจภายในและมะเร็งปากมดลูด" },
                { type: "o", title: "อื่นๆ", question: "ประวัติการตรวจภายในและมะเร็งปากมดลูด", category: "description" }
            ]
        },
        question_6: {
            title: "การคุมกำเนิด",
            emergency: false,
            question: "การคุมกำเนิด",
            type: 'Choice',
            answer: [
                { type: "c", title: "ไม่มี", question: "การคุมกำเนิด" },
                { type: "o", title: "อื่นๆ", question: "การคุมกำเนิด", category: "description" }
            ]
        },
        question_7: {
            title: "การดูแลเบื้องต้น",
            emergency: false,
            question: "การดูแลเบื้องต้น",
            type: 'Choice',
            answer: [
                { type: "c", title: "ไม่มี", question: "การดูแลเบื้องต้น" },
                { type: "o", title: "อื่นๆ", question: "การดูแลเบื้องต้น", category: "description" }
            ]
        },
        question_8: {
            title: "ประวัติมะเร็งในครอบครัว",
            emergency: false,
            question: "ประวัติมะเร็งในครอบครัว",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "มะเร็งเต้านม", question: "ประวัติมะเร็งในครอบครัว" },
                { type: "c", title: "มะเร็งรังไข่", question: "ประวัติมะเร็งในครอบครัว" },
                { type: "c", title: "มะเร็งลำไส้", question: "ประวัติมะเร็งในครอบครัว" },
                { type: "c", title: "มะเร็งปากมดลูก", question: "ประวัติมะเร็งในครอบครัว" },
                { type: "c", title: "มะเร็งมดลูก", question: "ประวัติมะเร็งในครอบครัว" },
                { type: "c", title: "ไม่แน่ใจ", question: "ประวัติมะเร็งในครอบครัว" },
                { type: "o", title: "อื่นๆ", question: "ประวัติมะเร็งในครอบครัว", category: "description" }
            ]
        },
        question_9: {
            title: "ประวัติในอดีต",
            emergency: false,
            question: "ประวัติในอดีต",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "เบาหวาน", question: "ประวัติในอดีต" },
                { type: "c", title: "ความดัน", question: "ประวัติในอดีต" },
                { type: "c", title: "โรคตับ", question: "ประวัติในอดีต" },
                { type: "c", title: "โรคเลือด", question: "ประวัติในอดีต" },
                { type: "c", title: "โรคติดเชื้อทางเพศสัมพันธ์", question: "ประวัติในอดีต" },
                { type: "c", title: "มีประวัติเลือดหยุดยากในครอบครัว", question: "ประวัติในอดีต" },
                { type: "c", title: "ใช้ยาต้านการแข็งตัวของเลือด (warfarin)", question: "ประวัติในอดีต" },
                { type: "c", title: "ใช้ยาต้านการจับตัวของเกร็ดเลือด (aspirin)", question: "ประวัติในอดีต" },
                { type: "c", title: "ไม่มี", question: "ประวัติในอดีต" },
            ]
        },
        question_10: {
            title: "ลักษณะของประจำเดือนก่อนหน้า (ที่ปกติ)",
            emergency: false,
            question: "ลักษณะของประจำเดือนก่อนหน้า (ที่ปกติ)",
            type: 'Choice',
            answer: [
                { type: "c", title: "มาปกติ", question: "ลักษณะของประจำเดือนก่อนหน้า (ที่ปกติ)" },
                { type: "c", title: "มามากกว่าปกติ", question: "ลักษณะของประจำเดือนก่อนหน้า (ที่ปกติ)" },
                { type: "c", title: "ประจำเดือนหมดแล้ว", question: "ลักษณะของประจำเดือนก่อนหน้า (ที่ปกติ)" },
                { type: "c", title: "ไม่แน่ใจ", question: "ลักษณะของประจำเดือนก่อนหน้า (ที่ปกติ)" },
            ]
        },
        question_11: {
            title: "จำนวนผ้าอนามัยที่ใช้ (แผ่นต่อวัน)",
            emergency: false,
            question: "จำนวนผ้าอนามัย",
            type: 'Choice',
            answer: [
                { type: "o", title: "จำนวน", question: "จำนวนผ้าอนามัยที่ใช้ (แผ่นต่อวัน)", category: "quantity" }
            ]
        },
        question_12: {
            title: "ระยะเวลาประจำเดือน",
            emergency: false,
            question: "ระยะเวลาประจำเดือน",
            type: 'Choice',
            answer: [
                { type: "T", title: "วันเดือนปี", question: "ระยะเวลาประจำเดือน" }
            ]
        },
        question_13: {
            title: "ระยะห่างระหว่างรอบเดือน (วัน)",
            emergency: false,
            question: "ระยะห่างระหว่างรอบเดือน (วัน)",
            type: 'Choice',
            answer: [
                { type: "o", title: "จำนวนวัน", question: "ระยะห่างระหว่างรอบเดือน (วัน)", category: "quantity" }
            ]
        },
        question_14: {
            title: "ประจำเดือนล่าสุด",
            emergency: false,
            question: "ประจำเดือนล่าสุด",
            type: 'Choice',
            answer: [
                { type: "T", title: "วว/ดด/ปปปป", question: "ประจำเดือนล่าสุด" }
            ]
        }
    },

    //ลืมทานยาคุม
    birthControlPillQuestions: {
        question_1: {
            title: "ชื่อยาคุม",
            emergency: false,
            question: "ชื่อยาคุม",
            type: 'Choice',
            answer: [
                { type: "o", title: "ชื่อยาคุม", question: 'ชื่อยาคุม', category: "description" }
            ]
        },
        question_2: {
            title: "ชนิดที่ทาน",
            emergency: false,
            question: "ชนิดที่ทาน",
            type: 'Choice',
            answer: [
                { type: "c", question: 'ชนิดที่ทาน', title: "21 เม็ด" },
                { type: "c", question: 'ชนิดที่ทาน', title: "28 เม็ด" }
            ]
        },
        question_3: {
            title: "จำนวนเม็ดที่ลืมทาน",
            emergency: false,
            question: "จำนวนเม็ดที่ลืมทาน",
            type: 'Choice',
            answer: [
                { type: "o", title: "จำนวนเม็ดที่ลืมทาน", question: 'จำนวนเม็ดที่ลืมทาน', category: "quantity" }
            ]
        },
        question_4: {
            title: "ลืมทานในแถวที่",
            emergency: false,
            question: "ลืมทานในแถวที่",
            type: 'Choice',
            answer: [
                { type: "c", title: "1", question: 'ลืมทานในแถวที่' },
                { type: "c", title: "2", question: 'ลืมทานในแถวที่' },
                { type: "c", title: "3", question: 'ลืมทานในแถวที่' },
                { type: "c", title: "4", question: 'ลืมทานในแถวที่' }
            ]
        },
        question_5: {
            title: "มีเพศสัมพันธ์ล่าสุดกี่วันก่อน",
            emergency: false,
            question: "มีเพศสัมพันธ์ล่าสุดกี่วันก่อน",
            type: 'Choice',
            answer: [
                { type: "T", title: "วันเดือน", question: 'มีเพศสัมพันธ์ล่าสุดกี่วันก่อน' }
            ]
        },
        question_6: {
            title: "เวลาปกติที่ทานยาคุม",
            emergency: false,
            question: "เวลาปกติที่ทานยาคุม",
            type: 'Choice',
            answer: [
                { type: "T", title: "เวลา", question: 'เวลาปกติที่ทานยาคุม' },
                { type: "c", title: "ไม่เป็นเวลา", question: 'เวลาปกติที่ทานยาคุม' }
            ]
        },
        question_7: {
            title: "ลืมทานยาคุมบ่อยเพียงใด",
            emergency: false,
            question: "ลืมทานยาคุมบ่อยเพียงใด",
            type: 'Choice',
            answer: [
                { type: "c", title: "ครั้งแรก", question: 'ลืมทานยาคุมบ่อยเพียงใด' },
                { type: "c", title: "มีบ้าง", question: 'ลืมทานยาคุมบ่อยเพียงใด' },
                { type: "c", title: "เป็นประจำ", question: 'ลืมทานยาคุมบ่อยเพียงใด' }
            ]
        },
        question_8: {
            title: "การคุมกำเนิดร่วม",
            emergency: false,
            question: "การคุมกำเนิดร่วม",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "หลั่งนอก", question: 'การคุมกำเนิดร่วม' },
                { type: "c", title: "ยาคุมฉุกเฉิน", question: 'การคุมกำเนิดร่วม' },
                { type: "c", title: "ถุงยางอนามัย", question: 'การคุมกำเนิดร่วม' },
                { type: "c", title: "ไม่มี", question: 'การคุมกำเนิดร่วม' }
            ]
        }
    },
    //มึนหัวไม่มีบ้านหมุน 
    noVertigoQuestions: {
        question_1: {
            title: "มีกิจกรรมเหล่านี้",
            emergency: false,
            question: "มีกิจกรรมเหล่านี้หรือไม่",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "อดนอน", question: "มีกิจกรรมเหล่านี้" },
                { type: "c", title: "อ่อนเพลีย", question: "มีกิจกรรมเหล่านี้" },
                { type: "c", title: "เครียด/กังวล", question: "มีกิจกรรมเหล่านี้" },
                { type: "c", title: "ซีด", question: "มีกิจกรรมเหล่านี้" },
                { type: "c", title: "ไข้", question: "มีกิจกรรมเหล่านี้" },
                { type: "c", title: "เบื่ออาหาร", question: "มีกิจกรรมเหล่านี้" },
                { type: "c", title: "ซึมเศร้า", question: "มีกิจกรรมเหล่านี้" },
                { type: "c", title: "ตั้งครรภ์", question: "มีกิจกรรมเหล่านี้" },
                { type: "c", title: "เหนื่อย", question: "มีกิจกรรมเหล่านี้" },
                { type: "c", title: "อยู่ในสภาวะช็อก", question: "มีกิจกรรมเหล่านี้" },
                { type: "c", title: "ขาดการออกกำลังกาย", question: "มีกิจกรรมเหล่านี้" },
                { type: "c", title: "ไม่มี", question: "มีกิจกรรมเหล่านี้" }
            ]
        },
        question_2: {
            title: "ภาวะที่เกี่ยวข้อง",
            emergency: false,
            question: "ภาวะที่เกี่ยวข้อง",
            type: 'Choice',
            answer: [
                { type: "c", title: "โลหิตจาง", question: "ภาวะที่เกี่ยวข้อง" },
                { type: "c", title: "น้ำตาลในเลือดต่ำ", question: "ภาวะที่เกี่ยวข้อง" },
                { type: "c", title: "ความดันโลหิตต่ำ", question: "ภาวะที่เกี่ยวข้อง" },
                { type: "c", title: "ไม่มี", question: "ภาวะที่เกี่ยวข้อง" },
                { type: "o", title: "อื่นๆ", question: "ภาวะที่เกี่ยวข้อง", category: "description" }
            ]
        }
    },
    //ผื่นหรือตุ่มผิวหนัง
    rashQuestions: {
        question_1: {
            title: "ระยะเวลาที่เป็น",
            emergency: false,
            question: "ระยะเวลาที่เป็น",
            type: 'Choice',
            answer: [
                { type: "T", title: "ระยะเวลา", question: "ระยะเวลาที่เป็น" }
            ]
        },
        question_2: {
            title: "อาการฉุกเฉิน",
            emergency: true,
            question: "มีอาการเหล่านี้ไหม",
            type: 'MultiChoice',
            answer: [
                { type: "E", title: "หน้ามืด", question: "อาการฉุกเฉิน" },
                { type: "E", title: "หอบเหนื่อย", question: "อาการฉุกเฉิน" },
                { type: "E", title: "ปากบวมหรือหน้าบวม", question: "อาการฉุกเฉิน" },
                { type: "U", title: "หายใจดังวี๊ด", question: "อาการฉุกเฉิน" },
                { type: "U", title: "อาเจียน", question: "อาการฉุกเฉิน" },
                { type: "c", title: "ไม่มี", question: "อาการฉุกเฉิน" }
            ]
        },
        question_3: {
            title: "ลักษณะของผื่น",
            emergency: false,
            question: "ลักษณะของผื่น",
            type: 'Choice',
            answer: [
                { type: "P", title: "ถ่ายรูป", question: "ลักษณะของผื่น" }
            ]
        },
        question_4: {
            title: "ตำแหน่งของผื่น",
            emergency: false,
            question: "ตำแหน่งของผื่น",
            type: 'Choice',
            answer: [
                { type: "o", title: "โปรดระบุ", question: "ตำแหน่งของผื่น", category: "description" }
            ]
        },
        question_5: {
            title: "ปัจจัยที่ทำให้เกิดผื่น",
            emergency: false,
            question: "ปัจจัยที่ทำให้เกิดผื่น",
            type: 'Choice',
            answer: [
                { type: "c", title: "โดนแดดแล้วเป็นมากขึ้น", question: "ปัจจัยที่ทำให้เกิดผื่น" },
                { type: "c", title: "สัมผัสสารเคมี", question: "ปัจจัยที่ทำให้เกิดผื่น" },
                { type: "c", title: "กินยาบางชนิด", question: "ปัจจัยที่ทำให้เกิดผื่น" },
                { type: "o", title: "อื่นๆ", question: "ปัจจัยที่ทำให้เกิดผื่น", category: "description" }
            ]
        },
        question_6: {
            title: "อาการร่วม",
            emergency: false,
            question: "อาการร่วม",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "ไข้", question: "อาการร่วม" },
                { type: "c", title: "ผื่น", question: "อาการร่วม" },
                { type: "c", title: "คันหรือปวด", question: "อาการร่วม" },
                { type: "c", title: "ปวดข้อ	มีคนอื่นในบ้านเป็น", question: "อาการร่วม" },
                { type: "c", title: "มีประวัติโรคผิวหนังในครอบครัว", question: "อาการร่วม" },
                { type: "c", title: "ไม่มี", question: "อาการร่วม" },
                { type: "o", title: "อื่นๆ", question: "อาการร่วม", category: "description" }
            ]
        },
        question_7: {
            title: "การรักษาก่อนหน้า",
            emergency: false,
            question: "การรักษาก่อนหน้า",
            type: 'Choice',
            answer: [
                { type: "c", title: "ไม่มี", question: "การรักษาก่อนหน้า" },
                { type: "o", title: "อื่นๆ", question: "การรักษาก่อนหน้า", category: "description" }
            ]
        }
    },
    //เป็นลม
    faintQuestions: {
        question_1: {
            title: "อาการฉุกเฉิน",
            emergency: true,
            question: "มีอาการเหล่านี้ไหม",
            type: 'MultiChoice',
            answer: [
                { type: "E", title: "ใจสั่น", question: "อาการฉุกเฉิน" },
                { type: "E", title: "แน่นหน้าอก", question: "อาการฉุกเฉิน" },
                { type: "E", title: "ชัก/ชา/อัมพาต/ชักเกร็ง", question: "อาการฉุกเฉิน" },
                { type: "E", title: "หายใจเร็วและตื้น", question: "อาการฉุกเฉิน" },
                { type: "c", title: "ไม่มี", question: "อาการฉุกเฉิน" }
            ]
        },
        question_2: {
            title: "เหตุการณ์ขณะมีอาการ",
            emergency: false,
            question: "เหตุการณ์ขณะมีอาการ",
            type: 'Choice',
            answer: [
                { type: "o", title: " ", question: "เหตุการณ์ขณะมีอาการ", category: "description" }
            ]
        },
        question_3: {
            title: "ระยะเวลาที่เป็น",
            emergency: false,
            question: "ระยะเวลาที่เป็น",
            type: 'Choice',
            answer: [
                { type: "T", title: "ระยะเวลา", question: "ระยะเวลาที่เป็น" }
            ]
        },
        question_4: {
            title: "ท่าทางผู้ป่วยก่อนเป็นลม",
            emergency: false,
            question: "ท่าทางผู้ป่วยก่อนเป็นลม",
            type: 'Choice',
            answer: [
                { type: "c", title: "ยืน", question: "ท่าทางผู้ป่วยก่อนเป็นลม" },
                { type: "c", title: "นั่ง", question: "ท่าทางผู้ป่วยก่อนเป็นลม" },
                { type: "c", title: "นอน", question: "ท่าทางผู้ป่วยก่อนเป็นลม" },
                { type: "o", title: "อื่นๆ", question: "ท่าทางผู้ป่วยก่อนเป็นลม" }
            ]
        },
        question_5: {
            title: "จำนวนครั้งที่เป็นลมครั้งนี้",
            emergency: false,
            question: "จำนวนครั้งที่เป็นลมครั้งนี้",
            type: 'Choice',
            answer: [
                { type: "o", title: " ", question: "จำนวนครั้งที่เป็นลมครั้งนี้", category: "quantity" }
            ]
        },
        question_6: {
            title: "เคยหมดสติก่อนหน้านี้",
            emergency: false,
            question: "เคยหมดสติก่อนหน้านี้",
            type: 'Choice',
            answer: [
                { type: "c", title: "ไม่ใช่", question: "เคยหมดสติก่อนหน้านี้" },
                { type: "c", title: "ใช่", question: "เคยหมดสติก่อนหน้านี้" }
            ]
        },
        question_7: {
            title: "มีคนในครอบครัวเสียชีวิตเฉียบพลันโดยไม่ทราบสาเหตุ",
            emergency: false,
            question: "มีคนในครอบครัวเสียชีวิตเฉียบพลันโดยไม่ทราบสาเหตุ",
            type: 'Choice',
            answer: [
                { type: "c", title: "ไม่ใช่", question: "มีคนในครอบครัวเสียชีวิตเฉียบพลันโดยไม่ทราบสาเหตุ" },
                { type: "c", title: "ใช่", question: "มีคนในครอบครัวเสียชีวิตเฉียบพลันโดยไม่ทราบสาเหตุ" }
            ]
        },
        question_8: {
            title: "ปัจจัยกระตุ้น",
            emergency: false,
            question: "ปัจจัยกระตุ้น",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "อากาศร้อน", question: "ปัจจัยกระตุ้น" },
                { type: "c", title: "ยืนนาน", question: "ปัจจัยกระตุ้น" },
                { type: "c", title: "ขยับคอ/ศีรษะ", question: "ปัจจัยกระตุ้น" },
                { type: "o", title: "อื่นๆ", question: "ปัจจัยกระตุ้น", category: "description" }
            ]
        },
        question_9: {
            title: "อาการร่วม",
            emergency: false,
            question: "อาการร่วม",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "ใจสั่น", question: "อาการร่วม" },
                { type: "c", title: "คลื่นไส้/อาเจียน", question: "อาการร่วม" },
                { type: "c", title: "แน่นหน้าอก", question: "อาการร่วม" },
                { type: "c", title: "อ่อนเพลีย", question: "อาการร่วม" },
                { type: "c", title: "ซีด", question: "อาการร่วม" },
                { type: "c", title: "เหนื่อยง่ายขณะออกแรง", question: "อาการร่วม" },
                { type: "c", title: "นอนราบไม่ได้", question: "อาการร่วม" },
                { type: "c", title: "ขาบวม", question: "อาการร่วม" },
                { type: "c", title: "ใจสั่น", question: "อาการร่วม" },
                { type: "o", title: "ไม่มี", question: "อาการร่วม" },
                { type: "o", title: "อื่นๆ", question: "อาการร่วม", category: "description" }
            ]
        },
        question_10: {
            title: "โรคประจำตัว",
            emergency: false,
            question: "โรคประจำตัว",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "โรคหัวใจ", question: "โรคประจำตัว" },
                { type: "c", title: "โรคประสาท", question: "โรคประจำตัว" },
                { type: "c", title: "โรคเบาหวาน", question: "โรคประจำตัว" },
                { type: "o", title: "ไม่มี", question: "โรคประจำตัว" },
                { type: "o", title: "อื่นๆ", question: "โรคประจำตัว", category: "description" }
            ]
        }
    },
    //มึนหัว
    nauseaQuestions: {
        question_1: {
            title: "test",
            next: 52,
            emergency: false,
            question: "test",
            type: 'Choice',
            answer: [
                // { type: "T", title: "วว/ดด/ปปปป", next: "end" } //TODO:
            ]
        }
    },
    stomachAcheQuestions: {
        question_1: {
            title: "อาการฉุกเฉิน",
            emergency: true,
            question: "มีอาการเหล่านี้ไหม",
            type: 'MultiChoice',
            answer: [
                { type: "E", title: "ถ่ายสีดำ", question: "อาการฉุกเฉิน" },
                { type: "E", title: "ถ่ายเป็นเลือดสดปริมาณมาก", question: "อาการฉุกเฉิน" },
                { type: "E", title: "อาเจียนเป็นเลือด", question: "อาการฉุกเฉิน" },
                { type: "E", title: "เบื่ออาหาร/น้ำหนักลด", question: "อาการฉุกเฉิน" },
                { type: "E", title: "ท้องผูกสลับท้องเสีย", question: "อาการฉุกเฉิน" },
                { type: "E", title: "คลำได้ก้อนในช่องท้อง", question: "อาการฉุกเฉิน" },
                { type: "E", title: "ปัสสาวะเป็นเลือด", question: "อาการฉุกเฉิน" },
                { type: "E", title: "ไข้ร่วมกับอาการปวดท้องเฉียบพลัน ", question: "อาการฉุกเฉิน" },
                { type: "F", title: "เลือดออกทางช่องคลอดหลังมีเพศสัมพันธ์ ", question: "อาการฉุกเฉิน" },
                { type: "c", title: "ไม่มี", question: "อาการฉุกเฉิน" }
            ]
        },
        question_2: {
            title: "ตำแหน่งที่เป็น",
            emergency: false,
            question: "ตำแหน่งที่เป็น",
            type: 'Choice',
            answer: [
                { type: "PC", title: "ตำแหน่ง1", img: require("../../assets/images/borg_good.png"), question: "ตำแหน่งที่เป็น" },
                { type: "PC", title: "ตำแหน่ง2", img: require("../../assets/images/borg_great.png"), question: "ตำแหน่งที่เป็น" },
                { type: "PC", title: "ตำแหน่ง3", img: require("../../assets/images/borg_bad.png"), question: "ตำแหน่งที่เป็น" },
                { type: "PC", title: "ตำแหน่ง4", img: require("../../assets/images/borg_good.png"), question: "ตำแหน่งที่เป็น" },
            ]
        },
        question_3: {
            title: "ลักษณะการปวด",
            emergency: true,
            question: "ลักษณะการปวด",
            type: 'Choice',
            answer: [
                { type: "c", title: "บิดคลายเป็นพักๆ", question: "ลักษณะการปวด" },
                { type: "c", title: "จุกเสียด แสบร้อน", question: "ลักษณะการปวด" },
                { type: "c", title: "ปวดแน่น", question: "ลักษณะการปวด" },
                { type: "c", title: "ไม่แน่ใจ", question: "ลักษณะการปวด" }
            ]
        },
        question_4: {
            title: "การดำเนินของอาการปวด",
            emergency: true,
            question: "การดำเนินของอาการปวด",
            type: 'Choice',
            answer: [
                { type: "c", title: "เป็นๆหายๆ", question: "การดำเนินของอาการปวด" },
                { type: "c", title: "เป็นต่อเนื่อง", question: "การดำเนินของอาการปวด" },
                { type: "c", title: "เป็นหนักขึ้นเรื่อยๆ", question: "การดำเนินของอาการปวด" },
                { type: "c", title: "ไม่แน่ใจ", question: "การดำเนินของอาการปวด" },
                { type: "o", title: "อื่นๆ", question: "การดำเนินของอาการปวด", category: "description" }
            ]
        },
        question_5: {
            title: "ระยะเวลาที่เป็น",
            emergency: false,
            question: "ระยะเวลาที่เป็น",
            type: 'Choice',
            answer: [
                { type: "T", title: "ระยะเวลา", question: "ระยะเวลาที่เป็น" },
            ]
        },
        question_6: {
            title: "ความถี่ของอาการ",
            emergency: false,
            question: "ความถี่ของอาการ",
            type: 'Choice',
            answer: [
                { type: "c", title: "ตลอดเวลา", question: "ความถี่ของอาการ" },
                { type: "T", title: "เป็นช่วงๆ", question: "ความถี่ของอาการ" },
            ]
        },
        question_7: { //TODO: question based on sex
            title: "ประจำเดือนครั้งสุดท้าย",
            emergency: false,
            question: "ประจำเดือนครั้งสุดท้าย",
            type: 'Choice',
            sex: 'F',
            answer: [
                { type: "T", title: "วว/ดด/ปปปป", question: "ประจำเดือนครั้งสุดท้าย" },
            ]
        },
        question_8: {
            title: "ปัจจัยที่ทำให้ดีขึ้น",
            emergency: false,
            question: "ปัจจัยที่ทำให้ดีขึ้น",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "ขับถ่าย", question: "ปัจจัยที่ทำให้ดีขึ้น" },
                { type: "c", title: "พักผ่อน", question: "ปัจจัยที่ทำให้ดีขึ้น" },
                { type: "c", title: "งดอาหาร", question: "ปัจจัยที่ทำให้ดีขึ้น" },
                { type: "c", title: "ทานอาหาร", question: "ปัจจัยที่ทำให้ดีขึ้น" },
                { type: "o", title: "ทานยา", question: "ปัจจัยที่ทำให้ดีขึ้น", category: "description" },
                { type: "c", title: "ไม่มี", question: "ปัจจัยที่ทำให้ดีขึ้น" },
            ]
        },
        question_9: {
            title: "ปัจจัยที่ทำให้แย่ลง",
            emergency: false,
            question: "ปัจจัยที่ทำให้แย่ลง",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "การกลืน", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "c", title: "ทานอาหาร", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "c", title: "ดื่มน้ำอัดลม", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "c", title: "ไม่ได้ขับถ่าย", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "c", title: "ทานอาหารมัน", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "c", title: "ทานรสเผ็ด/เปรี้ยว", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "c", title: "ทานอาหารกากใยเยอะ", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "c", title: "สูบบุหรี่/สูดควัน", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "o", title: "ทานยา", question: "ปัจจัยที่ทำให้แย่ลง", category: "description" },
                { type: "c", title: "ไม่มี", question: "ปัจจัยที่ทำให้แย่ลง" },
            ]
        },
        question_10: {
            title: "ความรุนแรง",
            emergency: false,
            question: "ความรุนแรง",
            type: 'Choice',
            answer: [
                { type: "V", title: "VAS score", question: "ความรุนแรง" }
            ]
        },
        question_11: {
            title: "เคยปวดลักษณะนี้มาก่อน",
            emergency: false,
            question: "เคยปวดลักษณะนี้มาก่อนหรือไม่",
            type: 'Choice',
            answer: [
                { type: "c", title: "ไม่ใช่", question: "เคยปวดลักษณะนี้มาก่อน" },
                { type: "c", title: "ใช่", question: "เคยปวดลักษณะนี้มาก่อน" }
            ]
        },
        question_12: {
            title: "อาการร่วม",
            emergency: false,
            question: "อาการร่วม",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "ไข้", question: "อาการร่วม" },
                { type: "c", title: "ไอ", question: "อาการร่วม" },
                { type: "c", title: "ซีด", question: "อาการร่วม" },
                { type: "c", title: "ตกขาว", question: "อาการร่วม" },
                { type: "c", title: "อ่อนเพลีย", question: "อาการร่วม" },
                { type: "c", title: "ถ่ายเหลว", question: "อาการร่วม" },
                { type: "c", title: "ปัสสาวะแสบขัด", question: "อาการร่วม" },
                { type: "c", title: "คลื่นไส้/อาเจียน", question: "อาการร่วม" },
                { type: "c", title: "ตัวเหลือง/ตาเหลือง", question: "อาการร่วม" },
                { type: "c", title: "เจ็บหน้าอกเวลาหายใจแรง", question: "อาการร่วม" },
                { type: "c", title: "ไม่มี", question: "อาการร่วม" },
            ]
        },
        question_13: {
            title: "ประวัติในอดีต",
            emergency: false,
            question: "ประวัติในอดีต",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "ผ่าตัดช่องท้อง", question: "ประวัติในอดีต" },
                { type: "c", title: "แผลในกระเพาะอาหาร", question: "ประวัติในอดีต" },
                { type: "c", title: "ส่องกล้องทางเดินอาหาร", question: "ประวัติในอดีต" },
                { type: "c", title: "ทานยาแก้ปวดกล้ามเนื้อหรือปวดข้อ", question: "ประวัติในอดีต" },
                { type: "c", title: "ไม่มี", question: "ประวัติในอดีต" },
            ]
        },

    },
    //ปัสสาวะแสบขัด
    dysuriaQuestions: {
        question_1: {
            title: "อาการฉุกเฉิน",
            emergency: true,
            question: "มีอาการเหล่านี้ไหม",
            type: 'MultiChoice',
            answer: [
                { type: "E", title: "หน้ามืด/หมดสติ", question: "อาการฉุกเฉิน" },
                { type: "E", title: "มีอุบัติเหตุรุนแรงที่ศีรษะ", question: "อาการฉุกเฉิน" },
                { type: "U", title: "ไข้สูง", question: "อาการฉุกเฉิน" },
                { type: "U", title: "ปวดหลัง", question: "อาการฉุกเฉิน" },
                { type: "U", title: "ไข้หนาวสั่น", question: "อาการฉุกเฉิน" },
                { type: "U", title: "อาเจียนเป็นเลือดสดปริมาณมาก", question: "อาการฉุกเฉิน" },
                { type: "c", title: "ไม่มี", question: "อาการฉุกเฉิน" }
            ]
        },
        question_2: {
            title: "ระยะเวลา",
            emergency: false,
            question: "ระยะเวลาที่เป็น",
            type: 'Choice',
            answer: [
                { type: "T", title: "ระยะเวลา", question: "ระยะเวลาที่เป็น" }
            ]
        },
        question_3: {
            title: "สีของปัสสาวะ",
            emergency: false,
            question: "สีของปัสสาวะ",
            type: 'Choice',
            answer: [
                { type: "c", title: "สีเหลืองใส", question: "สีของปัสสาวะ" },
                { type: "c", title: "สีมีเลือดปน", question: "สีของปัสสาวะ" },
                { type: "c", title: "สีน้ำล้างเนื้อ", question: "สีของปัสสาวะ" },
                { type: "c", title: "สีขุ่นคล้ายหนอง", question: "สีของปัสสาวะ" },
                { type: "c", title: "ปกติ", question: "สีของปัสสาวะ" },
                { type: "c", title: "ไม่แน่ใจ", question: "สีของปัสสาวะ" },
                { type: "o", title: "อื่นๆ", question: "สีของปัสสาวะ" }
            ]
        },
        question_4: {
            title: "อาการร่วม",
            emergency: false,
            question: "อาการร่วม",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "มีหนองไหล", question: "อาการร่วม" },
                { type: "c", title: "คลื่นไส้/อาเจียน", question: "อาการร่วม" },
                { type: "c", title: "เป็นหลังมีเพศสัมพันธ์", question: "อาการร่วม" },
                { type: "c", title: "คู่นอนมีอาการเดียวกัน", question: "อาการร่วม" },
                { type: "c", title: "ปัสสาวะออกเมื่อเปลี่ยนท่า", question: "อาการร่วม" },
                { type: "c", title: "ไม่มี", question: "อาการร่วม" },
                { type: "o", title: "อื่นๆ", category: "description", question: "อาการร่วม" }
            ]
        },
        question_5: {
            title: "ประวัติในอดีต",
            emergency: false,
            question: "ประวัติในอดีต",
            type: 'MultiChoice',
            sex: "M",
            answer: [
                { type: "c", title: "เคยเป็นนิ่วมาก่อน", question: "ประวัติในอดีต" },
                { type: "c", title: "มีกรวดทรายปนกับปัสสาวะ", question: "ประวัติในอดีต" },
                { type: "c", title: "เคยอัลตราซาวด์มาก่อน", question: "ประวัติในอดีต" },
                { type: "c", title: "มีเพศสัมพันธ์ต่างคู่นอนและไม่ได้ป้องกัน", question: "ประวัติในอดีต" },
                { type: "c", title: "เคยมีอาการเช่นนี้มาก่อน", question: "ประวัติในอดีต" },
                { type: "c", title: "ประวัติเดินลุยน้ำ", question: "ประวัติในอดีต" },
                { type: "c", title: "ได้รับยากดภูมิคุ้มกันมาก่อน", question: "ประวัติในอดีต" },
                { type: "c", title: "ไม่มี", question: "ประวัติในอดีต" }
            ]
        },
        question_6: {
            title: "อาการอื่นๆ",
            emergency: false,
            question: "อาการอื่นๆ",
            type: 'MultiChoice',
            answer: [
                { type: "F", title: "คัน", question: "อาการอื่นๆ" },
                { type: "F", title: "ตกขาวมีกลิ่นเหม็น", question: "อาการอื่นๆ" },
                { type: "F", title: "ปัสสาวะเป็นฟอง", question: "อาการอื่นๆ" },
                { type: "F", title: "มีก้อนที่ขาหนีบ", question: "อาการอื่นๆ" },
                { type: "F", title: "มีแผลบริเวณท่อปัสสาวะ", question: "อาการอื่นๆ" },
                { type: "F", title: "มีแผลกดทับบริเวณช่องคลอด", question: "อาการอื่นๆ" },
                { type: "M", title: "เริม", question: "อาการอื่นๆ" },
                { type: "M", title: "ปัสสาวะไม่ค่อยพุ่ง", question: "อาการอื่นๆ" },
                { type: "M", title: "ปัสสาวะสะดุดต้องเบ่งแรงๆ", question: "อาการอื่นๆ" },
                { type: "M", title: "มีความผิดปกติของลูกอัณฑะ", question: "อาการอื่นๆ" },
                { type: "o", title: "อื่นๆ", category: "description", question: "อาการอื่นๆ" }
            ]
        },
    },

    // ปัสสาวะมาก
    polyuriaQuestions: {
        question_1: {
            title: "ลักษณะของปัสสาวะที่มากขึ้น",
            emergency: false,
            question: "ลักษณะของปัสสาวะที่มากขึ้น",
            type: 'Choice',
            answer: [
                { type: "c", title: "ปัสสาวะเพิ่มขึ้น", question: "ลักษณะของปัสสาวะที่มากขึ้น" },
                { type: "c", title: "จำนวนครั้งในการปัสสาวะมากขึ้น", question: "ลักษณะของปัสสาวะที่มากขึ้น" },
                { type: "c", title: "ปัสสาวะตอนกลางคืนหลังนอนหลับ", question: "ลักษณะของปัสสาวะที่มากขึ้น" },
                { type: "o", title: "อื่นๆ", question: "ลักษณะของปัสสาวะที่มากขึ้น", category: 'description' }
            ]
        },
        question_2: {
            title: "ลักษณะการเกิดของอาการ",
            emergency: false,
            question: "ลักษณะการเกิดของอาการ",
            type: 'Choice',
            answer: [
                { type: "c", title: "เฉียบพลัน", question: "ลักษณะการเกิดของอาการ" },
                { type: "c", title: "ค่อยเป็นค่อยไป", question: "ลักษณะการเกิดของอาการ" },
                { type: "c", title: "ไม่แน่ใจ", question: "ลักษณะการเกิดของอาการ" }
            ]
        },
        question_3: {
            title: "ลักษณะของปัสสาวะ",
            emergency: false,
            question: "ลักษณะของปัสสาวะ",
            type: 'Choice',
            answer: [
                { type: "c", title: "ขุ่น", question: "ลักษณะของปัสสาวะ" },
                { type: "c", title: "เลือดหรือกรวดปนทราย", question: "ลักษณะของปัสสาวะ" },
                { type: "c", title: "ปกติ", question: "ลักษณะของปัสสาวะ" },
                { type: "o", title: "อื่นๆ", question: "ลักษณะของปัสสาวะ", category: 'description' }
            ]
        },
        question_4: {
            title: "อาการร่วม",
            emergency: false,
            question: "อาการร่วม",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "น้ำหนักลดลง", question: "อาการร่วม" },
                { type: "c", title: "ปัสสาวะแสบขัด", question: "อาการร่วม" },
                { type: "c", title: "ปัสสาวะราดกลั้นไม่ได้", question: "อาการร่วม" },
                { type: "c", title: "คอแห้ง	ดื่มน้ำมาก", question: "อาการร่วม" },
                { type: "c", title: "ดื่มสุราหรือกาแฟมาก", question: "อาการร่วม" },
                { type: "o", title: "อื่นๆ", question: "อาการร่วม", category: 'description' },
                { type: "c", title: "ไม่มี", question: "อาการร่วม" }
            ]
        },
        question_5: {
            title: "ประวัติในอดีต",
            emergency: false,
            question: "ประวัติในอดีต",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "อุบัติเหตุที่สมอง/ผ่าตัดสมอง", question: "ประวัติในอดีต" },
                { type: "c", title: "นิ่วที่ไต", question: "ประวัติในอดีต" },
                { type: "c", title: "ผ่าตัดระบบทางเดินปัสสาวะ", question: "ประวัติในอดีต" },
                { type: "c", title: "ไม่มี", question: "ประวัติในอดีต" }
            ]
        },
    },

    // ปัสสาวะเป็นเลือด
    hematuriaQuestions: {
        question_1: {
            title: "มีอาการเหล่านี้ไหม",
            emergency: true,
            question: "อาการฉุกเฉิน",
            type: 'MultiChoice',
            answer: [
                { type: "E", title: "ไข้", question: "อาการฉุกเฉิน" },
                { type: "E", title: "ปวดบั้นเอว", question: "อาการฉุกเฉิน" },
                { type: "E", title: "ปัสสาวะขัด/ไม่สุด", question: "อาการฉุกเฉิน" },
                { type: "U", title: "ปัสสาวะเป็นเลือดสด", question: "อาการฉุกเฉิน" },
                { type: "U", title: "ปัสสาวะเป็นลิ่มเลือด", question: "อาการฉุกเฉิน" },
                { type: "c", title: "ไม่มี", question: "อาการฉุกเฉิน" }
            ]
        },
        question_2: {
            title: "ระยะเวลาที่มีอาการ",
            emergency: false,
            question: "ระยะเวลาที่มีอาการ",
            type: 'Choice',
            answer: [
                { type: "T", title: "ระยะเวลา", question: "ระยะเวลา" }
            ]
        },
        question_3: {
            title: "สีของปัสสาวะ",
            emergency: false,
            question: "สีของปัสสาวะ",
            type: 'Choice',
            answer: [
                { type: "c", title: "สีเลือดสด", question: "สีของปัสสาวะ" },
                { type: "c", title: "สีน้ำล้างเนื้อ", question: "สีของปัสสาวะ" },
                { type: "c", title: "ปีเหลืองเข้ม", question: "สีของปัสสาวะ" },
                { type: "c", title: "ปกติ", question: "สีของปัสสาวะ" },
                { type: "o", title: "อื่นๆ", question: "สีของปัสสาวะ", category: "description" }
            ]
        },
        question_4: {
            title: "ช่วงที่ปัสสาวะเป็นเลือด",
            emergency: false,
            question: "ช่วงที่ปัสสาวะเป็นเลือด",
            type: 'Choice',
            answer: [
                { type: "c", title: "ช่วงแรกของปัสสาวะ", question: "ช่วงที่ปัสสาวะเป็นเลือด" },
                { type: "c", title: "ช่วงกลางของปัสสาวะ", question: "ช่วงที่ปัสสาวะเป็นเลือด" },
                { type: "c", title: "ช่วงท้ายของปัสสาวะ", question: "ช่วงที่ปัสสาวะเป็นเลือด" },
                { type: "c", title: "ทุกช่วง", question: "ช่วงที่ปัสสาวะเป็นเลือด" },
                { type: "c", title: "ไม่แน่ใจ", question: "ช่วงที่ปัสสาวะเป็นเลือด" },
                { type: "o", title: "อื่นๆ", question: "ช่วงที่ปัสสาวะเป็นเลือด", category: "description" }
            ]
        },
        question_5: {
            title: "ประวัติในอดีต",
            emergency: false,
            question: "ประวัติในอดีต",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "เคยเป็นนิ่วมาก่อน", question: "ประวัติในอดีต" },
                { type: "c", title: "มีก้อนกรวดทรายปนกับปัสสาวะ", question: "ประวัติในอดีต" },
                { type: "c", title: "ทานยาแก้ปวดกล้ามเนื้อ/ปวดข้อ ", question: "ประวัติในอดีต" },
                { type: "c", title: "ใช้ยาต้านการแข็งตัวของเลือด (warfarin)", question: "ประวัติในอดีต" },
                { type: "c", title: "ใช้ยาต้านการจับตัวของเกร็ดเลือด (aspirin)  ", question: "ประวัติในอดีต" },
                { type: "c", title: "เคยได้รับอุบัติเหตุบริเวณหลังช่องท้อง เช่น กระแทกรุนแรง", question: "ประวัติในอดีต" },
                { type: "c", title: "เคยมีการรักษาที่ท่อทางเดินปัสสาวะ เช่น เจาะไต ผ่าตัด", question: "ประวัติในอดีต" },
                { type: "c", title: "ไม่มี", question: "ประวัติในอดีต" }
            ]
        },
    },

    // ปวดหัว
    headacheQuestions: {
        question_1: {
            title: "ตำแหน่งที่เป็น",
            emergency: false,
            question: "ตำแหน่งที่เป็น",
            type: 'Choice',
            answer: [
                { type: "PC", title: "ซ้าย", img: require("../../assets/images/borg_good.png"), question: "ตำแหน่งที่เป็น" },
                { type: "PC", title: "ขวา", img: require("../../assets/images/borg_great.png"), question: "ตำแหน่งที่เป็น" },
                { type: "PC", title: "ทั่วๆ", img: require("../../assets/images/borg_bad.png"), question: "ตำแหน่งที่เป็น" }
            ]
        },
        question_2: {
            title: "มีอาการเหล่านี้ไหม",
            emergency: true,
            question: "อาการฉุกเฉิน",
            type: 'MultiChoice',
            answer: [
                { type: "E", title: "ชักเกร็ง", question: "อาการฉุกเฉิน" },
                { type: "E", title: "อาเจียนพุ่ง", question: "อาการฉุกเฉิน" },
                { type: "E", title: "กำลังตั้งครรภ์", question: "อาการฉุกเฉิน", sex: "F" },
                { type: "E", title: "ซึมลงไม่รู้สึกตัว", question: "อาการฉุกเฉิน" },
                { type: "E", title: "อาเจียนตลอดเวลา", question: "อาการฉุกเฉิน" },
                { type: "E", title: "มีแขนขาอ่อนแรง", question: "อาการฉุกเฉิน" },
                { type: "E", title: "ตาพร่ามัวตามองไม่เห็น", question: "อาการฉุกเฉิน" },
                { type: "E", title: "ประวัติอุบัติเหตุบริเวณศีรษะ", question: "อาการฉุกเฉิน" },
                { type: "E", title: "ปวดจนต้องตื่นตอนกลางคืน", question: "อาการฉุกเฉิน" },
                { type: "E", title: "อาการปวดรุนแรงเกิดขึ้นทันที", question: "อาการฉุกเฉิน" },
                { type: "c", title: "ไม่มี", question: "อาการฉุกเฉิน" }
            ]
        },
        question_3: {
            title: "ระยะเวลาที่มีอาการ",
            emergency: false,
            question: "ระยะเวลาที่มีอาการ",
            type: 'Choice',
            answer: [
                { type: "T", title: "ระยะเวลา", question: "ระยะเวลา" }
            ]
        },
        question_4: {
            title: "ลักษณะการปวด",
            emergency: false,
            question: "ลักษณะการปวด",
            type: 'Choice',
            answer: [
                { type: "c", title: "ตื้อๆ", question: "ลักษณะการปวด" },
                { type: "c", title: "ตุ๊บๆ", question: "ลักษณะการปวด" },
                { type: "c", title: "ตึงๆ", question: "ลักษณะการปวด" },
                { type: "o", title: "อื่นๆ", question: "ลักษณะการปวด", category: "description" }
            ]
        },
        question_5: {
            title: "อาการร่วม",
            emergency: false,
            question: "อาการร่วม",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "อาเจียน", question: "อาการร่วม" },
                { type: "c", title: "กลัวแสง", question: "อาการร่วม" },
                { type: "c", title: "เป็นทุกเดือน", question: "อาการร่วม" },
                { type: "F", title: "สัมพันธ์กับประจำเดือน", question: "อาการร่วม", sex: "F" }
            ]
        },
        question_6: {
            title: "ร้าวไปยังคอ",
            emergency: false,
            question: "ปวดร้าวไปยังคอ",
            type: 'Choice',
            answer: [
                { type: "c", title: "ใช่", question: "ปวดร้าวไปยังคอ" },
                { type: "c", title: "ไม่ใช่", question: "ปวดร้าวไปยังคอ" }
            ]
        },
        question_7: {
            title: "ความถี่ของการปวด",
            emergency: false,
            question: "ความถี่ของการปวด",
            type: 'Choice',
            answer: [
                { type: "c", title: "ตลอดเวลา", question: "ความถี่ของการปวด" },
                { type: "T", title: "เป็นช่วงๆ", question: "ความถี่ของการปวด" },
            ]
        },
        question_8: {
            title: "ปัจจัยที่ทำให้ดีขึ้น",
            emergency: false,
            question: "ปัจจัยที่ทำให้ดีขึ้น",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "นอนพักผ่อน", question: "ปัจจัยที่ทำให้ดีขึ้น" },
                { type: "c", title: "บีบนวด", question: "ปัจจัยที่ทำให้ดีขึ้น" },
                { type: "c", title: "ความมืด", question: "ปัจจัยที่ทำให้ดีขึ้น" },
                { type: "c", title: "ประคบเย็น", question: "ปัจจัยที่ทำให้ดีขึ้น" },
                { type: "o", title: "ทานยา", question: "ปัจจัยที่ทำให้ดีขึ้น", category: "description" },
                { type: "o", title: "อื่นๆ", question: "ปัจจัยที่ทำให้ดีขึ้น", category: "description" },
                { type: "c", title: "ไม่มี", question: "ปัจจัยที่ทำให้ดีขึ้น" }
            ]
        },
        question_9: {
            title: "ปัจจัยที่ทำให้แย่ลง",
            emergency: false,
            question: "ปัจจัยที่ทำให้แย่ลง",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "แสงจ้า/เสียงดัง", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "c", title: "ความหิว", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "c", title: "ออกแรง", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "c", title: "ดื่มสุรา", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "c", title: "แตะที่ขมับ", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "c", title: "ไอ/จาม/เบ่ง", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "c", title: "อากาศร้อน", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "c", title: "ความเครียด", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "c", title: "ทานคาเฟอีน", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "c", title: "มีเพศสัมพันธ์", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "o", title: "ทานยา", question: "ปัจจัยที่ทำให้แย่ลง", category: "description" },
                { type: "o", title: "อื่นๆ", question: "ปัจจัยที่ทำให้แย่ลง", category: "description" },
                { type: "c", title: "ไม่มี", question: "ปัจจัยที่ทำให้แย่ลง" }
            ]
        },
        question_10: {
            title: "ความรุนแรง",
            emergency: false,
            question: "ความรุนแรง",
            type: 'Choice',
            answer: [
                { type: "V", title: "VAS score", question: "ความรุนแรง" }
            ]
        },
        question_11: {
            title: "อาการอื่นๆ",
            emergency: false,
            question: "อาการอื่นๆ",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "ปวดตา/ตามัวลง", question: "อาการอื่นๆ" },
                { type: "c", title: "บ้านหมุน", question: "อาการอื่นๆ" },
                { type: "c", title: "ถ่ายเหลว", question: "อาการอื่นๆ" },
                { type: "c", title: "กลัวแสง", question: "อาการอื่นๆ" },
                { type: "c", title: "มีน้ำตาไหล", question: "อาการอื่นๆ" },
                { type: "c", title: "ปวดโหนกแก้ม", question: "อาการอื่นๆ" },
                { type: "c", title: "ปวดเมื่อยตามตัว", question: "อาการอื่นๆ" },
                { type: "c", title: "ชารอบปากและแขน", question: "อาการอื่นๆ" },
                { type: "c", title: "เห็นแสงวูบวาบ", question: "อาการอื่นๆ" },
                { type: "c", title: "มีประวัติครอบครัวเป็นไมเกรน", question: "อาการอื่นๆ" },
                { type: "c", title: "ไม่มี", question: "อาการอื่นๆ" }
            ]
        },
    },

    //ปวดหลัง
    backPainQuestions: {
        question_1: {
            title: "ตำแหน่งที่เป็น",
            emergency: false,
            question: "ตำแหน่งที่เป็น",
            type: 'Choice',
            answer: [
                { type: "PC", title: "1", img: require("../../assets/images/borg_good.png"), question: "ตำแหน่งที่เป็น" },
                { type: "PC", title: "2", img: require("../../assets/images/borg_great.png"), question: "ตำแหน่งที่เป็น" },
                { type: "PC", title: "3", img: require("../../assets/images/borg_bad.png"), question: "ตำแหน่งที่เป็น" }
            ]
        },
        question_2: {
            title: "มีอาการเหล่านี้ไหม",
            emergency: true,
            question: "มีอาการเหล่านี้ไหม",
            type: 'Choice',
            answer: [
                { type: "c", title: "ไข้", question: "มีอาการเหล่านี้ไหม" },
                { type: "c", title: "ปวดตอนกลางคืน", question: "มีอาการเหล่านี้ไหม" },
                { type: "c", title: "เบื่ออาหาร/น้ำหนักลด", question: "มีอาการเหล่านี้ไหม" },
                { type: "c", title: "ปัสสาวะเป็นเลือด", question: "มีอาการเหล่านี้ไหม" },
                { type: "c", title: "ปัสสาวะไม่ได้", question: "มีอาการเหล่านี้ไหม" },
                { type: "c", title: "เคยเป็นมะเร็งมาก่อน", question: "มีอาการเหล่านี้ไหม" },
                { type: "c", title: "เพิ่งได้รับการผ่าตัดกระดูกสันหลัง", question: "มีอาการเหล่านี้ไหม" },
                { type: "c", title: "ไม่มี", question: "มีอาการเหล่านี้ไหม" }
            ]
        },
        question_3: {
            title: "ระยะเวลาที่มีอาการ",
            emergency: false,
            question: "ระยะเวลาที่มีอาการ",
            type: 'Choice',
            answer: [
                { type: "T", title: "ระยะเวลา", question: "ระยะเวลา" }
            ]
        },
        question_4: {
            title: "ลักษณะการปวด",
            emergency: false,
            question: "ลักษณะการปวด",
            type: 'Choice',
            answer: [
                { type: "c", title: "ปวดร้าวลงขาหนีบหรือต้นขาด้านหน้า", question: "ลักษณะการปวด" },
                { type: "c", title: "ปวดกึ่งกลางสันหลังส่วนล่างร้าวลงสะโพกหรือต้นขาด้านหลัง", question: "ลักษณะการปวด" },
                { type: "c", title: "ปวดหลังส่วนล่างร่วมกับร้าวลงขา", question: "ลักษณะการปวด" },
                { type: "o", title: "อื่นๆ", question: "ลักษณะการปวด", category: "description" }
            ]
        },
        question_5: {
            title: "การแสดงอาการ",
            emergency: false,
            question: "ลักษณะของอาการ",
            type: 'Choice',
            answer: [
                { type: "c", title: "ค่อยเป็นค่อยไป", question: "ลักษณะของอาการ" },
                { type: "c", title: "เฉียบพลัน", question: "ลักษณะของอาการ" },
            ]
        },
        question_6: {
            title: "ปัจจัยที่ทำให้ดีขึ้น",
            emergency: false,
            question: "ปัจจัยที่ทำให้ดีขึ้น",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "พักการใช้งาน", question: "ปัจจัยที่ทำให้ดีขึ้น" },
                { type: "c", title: "เคลื่อนไหวหรือออกกำลังกาย", question: "ปัจจัยที่ทำให้ดีขึ้น" },
                { type: "o", title: "ทานยา", question: "ปัจจัยที่ทำให้ดีขึ้น", category: "description" },
                { type: "o", title: "อื่นๆ", question: "ปัจจัยที่ทำให้ดีขึ้น", category: "description" },
                { type: "c", title: "ไม่มี", question: "ปัจจัยที่ทำให้ดีขึ้น" }
            ]
        },
        question_7: {
            title: "ปัจจัยที่ทำให้แย่ลง",
            emergency: false,
            question: "ปัจจัยที่ทำให้แย่ลง",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "พักการใช้งาน", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "c", title: "เคลื่อนไหวหรือออกกำลังกาย", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "o", title: "ทานยา", question: "ปัจจัยที่ทำให้แย่ลง", category: "description" },
                { type: "o", title: "อื่นๆ", question: "ปัจจัยที่ทำให้แย่ลง", category: "description" },
                { type: "c", title: "ไม่มี", question: "ปัจจัยที่ทำให้แย่ลง" }
            ]
        },
        question_8: {
            title: "อาการร่วม",
            emergency: false,
            question: "อาการร่วม",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "ขาอ่อนกำลัง", question: "อาการร่วม" },
                { type: "c", title: "แขนอ่อนกำลัง", question: "อาการร่วม" },
                { type: "c", title: "ปวดร้าวลงขา", question: "อาการร่วม" },
                { type: "c", title: "ชาบริเวณลำตัว", question: "อาการร่วม" },
                { type: "c", title: "ไข้", question: "อาการร่วม" },
                { type: "c", title: "ซีด", question: "อาการร่วม" },
                { type: "c", title: "อาการปวดหลังร้าวมาจากที่อื่น", question: "อาการร่วม" },
                { type: "c", title: "ปวดตอนเช้า", question: "อาการร่วม" },
                { type: "o", title: "อื่นๆ", question: "อาการร่วม" },
                { type: "c", title: "ไม่มี", question: "อาการร่วม" },
            ]
        },
        question_9: {
            title: "ประวัติในอดีต",
            emergency: false,
            question: "ประวัติในอดีต",
            type: 'Choice',
            answer: [
                { type: "c", title: "อุบัติเหตุรุนแรง", question: "ประวัติในอดีต" },
                { type: "c", title: "เคยมีประวัติแบบเดียวกันในครอบครัว", question: "ประวัติในอดีต" },
                { type: "c", title: "เคยมีอาการแบบนี้มาก่อน	", question: "ประวัติในอดีต" },
                { type: "c", title: "เคยได้รับการผ่าตัดบริเวณหลัง", question: "ประวัติในอดีต" },
                { type: "c", title: "ได้รับอุบัติเหตุกระทบหลังรุนแรง", question: "ประวัติในอดีต" },
                { type: "c", title: "ไม่มี", question: "ประวัติในอดีต" },
            ]
        },
    },

    //ปวดเมื่อยกล้ามเนื้อ
    musclePainQuestions: {
        question_1: {
            title: "ตำแหน่งที่เป็น",
            emergency: false,
            question: "ตำแหน่งที่เป็น",
            type: 'Choice',
            answer: [
                { type: "PC", title: "1", img: require("../../assets/images/borg_good.png"), question: "ตำแหน่งที่เป็น" },
                { type: "PC", title: "2", img: require("../../assets/images/borg_great.png"), question: "ตำแหน่งที่เป็น" },
                { type: "PC", title: "3", img: require("../../assets/images/borg_bad.png"), question: "ตำแหน่งที่เป็น" }
            ]
        },
        question_2: {
            title: "ลักษณะการปวด",
            emergency: false,
            question: "ลักษณะการปวด",
            type: 'Choice',
            answer: [
                { type: "c", title: "เฉียบพลัน", question: "ลักษณะการปวด" },
                { type: "c", title: "กึ่งเฉียบพลัน", question: "ลักษณะการปวด" },
                { type: "c", title: "ค่อยเป็นค่อยไป", question: "ลักษณะการปวด" },
                { type: "c", title: "ไม่แน่ใจ", question: "ลักษณะการปวด" },
            ]
        },
        question_3: {
            title: "กิจกรรมที่ทำให้เกิดอาการปวด",
            emergency: false,
            question: "กิจกรรมที่ทำให้เกิดอาการปวด",
            type: 'Choice',
            answer: [
                { type: "c", title: "หลังได้รับบาดเจ็บ", question: "กิจกรรมที่ทำให้เกิดอาการปวด" },
                { type: "c", title: "การทำงาน", question: "กิจกรรมที่ทำให้เกิดอาการปวด" },
                { type: "c", title: "ออกกำลังกายอย่างหนัก", question: "กิจกรรมที่ทำให้เกิดอาการปวด" },
                { type: "o", title: "อื่นๆ", question: "กิจกรรมที่ทำให้เกิดอาการปวด" },
                { type: "o", title: "ไม่มี", question: "กิจกรรมที่ทำให้เกิดอาการปวด" },
            ]
        },
        question_4: {
            title: "ลักษณะการปวด",
            emergency: false,
            question: "ลักษณะการปวด",
            type: 'Choice',
            answer: [
                { type: "c", title: "ปวดร้าวลงขาหนีบหรือต้นขาด้านหน้า", question: "ลักษณะการปวด" },
                { type: "c", title: "ปวดกึ่งกลางสันหลังส่วนล่างร้าวลงสะโพกหรือต้นขาด้านหลัง", question: "ลักษณะการปวด" },
                { type: "c", title: "ปวดหลังส่วนล่างร่วมกับร้าวลงขา", question: "ลักษณะการปวด" },
                { type: "o", title: "อื่นๆ", question: "ลักษณะการปวด", category: "description" }
            ]
        },
        question_5: {
            title: "อาการปวดตำแหน่งอื่นๆ",
            emergency: false,
            question: "อาการปวดตำแหน่งอื่นๆ",
            type: 'Choice',
            answer: [
                { type: "c", title: "ปวดข้อ", question: "อาการปวดตำแหน่งอื่นๆ" },
                { type: "c", title: "ปวดหลัง", question: "อาการปวดตำแหน่งอื่นๆ" },
                { type: "c", title: "ปวดหัวไหล่", question: "อาการปวดตำแหน่งอื่นๆ" },
                { type: "c", title: "ปวดตะโพก", question: "อาการปวดตำแหน่งอื่นๆ" },
                { type: "c", title: "ปวดต้นแขนต้นขาทั้งสองข้าง", question: "อาการปวดตำแหน่งอื่นๆ" },
                { type: "c", title: "ไม่มี", question: "อาการปวดตำแหน่งอื่นๆ" },
            ]
        },
        question_6: {
            title: "อาการร่วม",
            emergency: false,
            question: "อาการร่วม",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "อาการบวม/แดง/ร้อนบริเวณที่ปวด", question: "อาการร่วม" },
                { type: "c", title: "อาการปวดเมื่อสัมผัส", question: "อาการร่วม" },
                { type: "c", title: "อาการกล้ามเนื้ออ่อนแรง", question: "อาการร่วม" },
                { type: "c", title: "ตะคริว", question: "อาการร่วม" },
                { type: "c", title: "ท้องผูก/อ่อนเพลีย/น้ำหนักตัวเพิ่ม", question: "อาการร่วม" },
                { type: "c", title: "อาการชา", question: "อาการร่วม" },
                { type: "o", title: "อื่นๆ", question: "อาการร่วม" },
                { type: "c", title: "ไม่มี", question: "อาการร่วม" }
            ]
        },

    },

    //ปวดท้องน้อย ประจำเดือน
    periodCrampsQuestions: {
        question_1: {
            title: "ลักษณะการปวด",
            emergency: false,
            question: "ลักษณะการปวด",
            type: 'Choice',
            answer: [
                { type: "c", title: "ปวดทุกเดือน", question: "ลักษณะการปวด" },
                { type: "c", title: "ปวดเพียงบางรอบเดือน", question: "ลักษณะการปวด" },
                { type: "c", title: "ไม่แน่ใจ", question: "ลักษณะการปวด" },
            ]
        },
        question_2: {
            title: "ความรุนแรง",
            emergency: false,
            question: "ความรุนแรง",
            type: 'Choice',
            answer: [
                { type: "V", title: "VAS score", question: "ความรุนแรง" }
            ]
        },
        question_3: {
            title: "การใช้ยาเพื่อลดอาการปวด",
            emergency: false,
            question: "การใช้ยาเพื่อลดอาการปวด",
            type: 'Choice',
            answer: [
                { type: "o", title: "ชื่อยา", question: "การใช้ยาเพื่อลดอาการปวด", category: "description" },
                { type: "c", title: "ไม่มี", question: "การใช้ยาเพื่อลดอาการปวด" },
            ]
        },
        question_4: {
            title: "กระทบต่อชีวิตประจำวัน",
            emergency: false,
            question: "กระทบต่อชีวิตประจำวัน",
            type: 'Choice',
            answer: [
                { type: "c", title: "ใช่", question: "กระทบต่อชีวิตประจำวัน" },
                { type: "c", title: "ไม่ใช่", question: "กระทบต่อชีวิตประจำวัน" }
            ]
        },
        question_5: {
            title: "อาการร่วม",
            emergency: false,
            question: "อาการร่วม",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "ไข้", question: "อาการร่วม" },
                { type: "c", title: "ประจำเดือนมามาก", question: "อาการร่วม" },
                { type: "c", title: "ก้อนในท้อง", question: "อาการร่วม" },
                { type: "c", title: "เจ็บขณะมีเพศสัมพันธ์", question: "อาการร่วม" },
                { type: "c", title: "ความถี่ของการถ่ายอุจจาระเปลี่ยนแปลง", question: "อาการร่วม" },
                { type: "c", title: "มีบุตรยาก", question: "อาการร่วม" },
                { type: "c", title: "ท้องโตขึ้น", question: "อาการร่วม" },
                { type: "c", title: "อุจจาระหรือปัสสาวะผิดปกติ", question: "อาการร่วม" },
                { type: "o", title: "อื่นๆ", question: "อาการร่วม", category: "description" },
                { type: "c", title: "ไม่มี", question: "อาการร่วม" }
            ]
        },
        question_6: {
            title: "การคุมกำเนิด",
            emergency: false,
            question: "การคุมกำเนิด",
            type: 'Choice',
            answer: [
                { type: "c", title: "ไม่ใช้", question: "การคุมกำเนิด" },
                { type: "o", title: "อื่นๆ", question: "การคุมกำเนิด", category: "description" }
            ]
        },
        question_7: {
            title: "ประวัติการตรวจภายในและมะเร็งปากมดลูก",
            emergency: false,
            question: "ประวัติการตรวจภายในและมะเร็งปากมดลูก",
            type: 'Choice',
            answer: [
                { type: "c", title: "ไม่มี", question: "ประวัติการตรวจภายในและมะเร็งปากมดลูก" },
                { type: "o", title: "อื่นๆ", question: "ประวัติการตรวจภายในและมะเร็งปากมดลูก", category: "description" },
            ]
        },
        question_8: {
            title: "ประวัติมะเร็งในครอบครัว",
            emergency: false,
            question: "ประวัติมะเร็งในครอบครัว",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "มะเร็งเต้านม", question: "ประวัติมะเร็งในครอบครัว" },
                { type: "c", title: "มะเร็งรังไข่", question: "ประวัติมะเร็งในครอบครัว" },
                { type: "c", title: "มะเร็งลำไส้", question: "ประวัติมะเร็งในครอบครัว" },
                { type: "o", title: "อื่นๆ", question: "ประวัติมะเร็งในครอบครัว", category: "description" },
                { type: "c", title: "ไม่แน่ใจ", question: "ประวัติมะเร็งในครอบครัว" },
                { type: "c", title: "ไม่มี", question: "ประวัติมะเร็งในครอบครัว" }
            ]
        },
        question_9: {
            title: "ประวัติโรคติดเชื้อทางเพศสัมพันธุ์",
            emergency: false,
            question: "ประวัติโรคติดเชื้อทางเพศสัมพันธุ์",
            type: 'Choice',
            answer: [
                { type: "c", title: "ใช่", question: "ประวัติโรคติดเชื้อทางเพศสัมพันธุ์" },
                { type: "c", title: "ไม่ใช่", question: "ประวัติโรคติดเชื้อทางเพศสัมพันธุ์" },
            ]
        },
        question_10: {
            title: "ลักษณะของประจำเดือนก่อนหน้า (ที่ปกติ)",
            emergency: false,
            question: "ลักษณะของประจำเดือนก่อนหน้า (ที่ปกติ)",
            type: 'Choice',
            answer: [
                { type: "c", title: "มาปกติ", question: "ลักษณะของประจำเดือนก่อนหน้า (ที่ปกติ)" },
                { type: "c", title: "มามากกว่าปกติ", question: "ลักษณะของประจำเดือนก่อนหน้า (ที่ปกติ)" },
                { type: "c", title: "ประจำเดือนหมดแล้ว", question: "ลักษณะของประจำเดือนก่อนหน้า (ที่ปกติ)" },
                { type: "c", title: "ไม่แน่ใจ", question: "ลักษณะของประจำเดือนก่อนหน้า (ที่ปกติ)" }
            ]
        },
        question_11: {
            title: "จำนวนผ้าอนามัยที่ใช้ (แผ่นต่อวัน)",
            emergency: false,
            question: "จำนวนผ้าอนามัย",
            type: 'Choice',
            answer: [
                { type: "o", title: "จำนวน", question: "จำนวนผ้าอนามัยที่ใช้ (แผ่นต่อวัน)", category: "quantity" }
            ]
        },
        question_12: {
            title: "ระยะเวลาประจำเดือน",
            emergency: false,
            question: "ระยะเวลาประจำเดือน",
            type: 'Choice',
            answer: [
                { type: "T", title: "วันเดือนปี", question: "ระยะเวลาประจำเดือน" }
            ]
        },
        question_13: {
            title: "ระยะห่างระหว่างรอบเดือน (วัน)",
            emergency: false,
            question: "ระยะห่างระหว่างรอบเดือน (วัน)",
            type: 'Choice',
            answer: [
                { type: "o", title: "จำนวนวัน", question: "ระยะห่างระหว่างรอบเดือน (วัน)", category: "quantity" }
            ]
        },
        question_14: {
            title: "ประจำเดือนล่าสุด",
            emergency: false,
            question: "ประจำเดือนล่าสุด",
            type: 'Choice',
            answer: [
                { type: "T", title: "วว/ดด/ปปปป", question: "ประจำเดือนล่าสุด" },
            ]
        },
    },

    //ปวดคอ
    neckPainQuestions: {
        question_1: {
            title: "อาการฉุกเฉิน",
            emergency: true,
            question: "อาการฉุกเฉิน",
            type: 'MultiChoice',
            answer: [
                { type: "E", title: "ได้รับอุบัติเหตุบริเวณคอเมื่อไม่นาน", question: "อาการฉุกเฉิน" },
                { type: "E", title: "มีอาการชาหรือสูญเสียความรู้สึก", question: "อาการฉุกเฉิน" },
                { type: "c", title: "ไม่มี", question: "อาการฉุกเฉิน" }
            ]
        },
        question_2: {
            title: "ตำแหน่งที่เป็น",
            emergency: false,
            question: "ตำแหน่งที่เป็น",
            type: 'Choice',
            answer: [
                { type: "PC", title: "1", img: require("../../assets/images/borg_good.png"), question: "ตำแหน่งที่เป็น" },
                { type: "PC", title: "2", img: require("../../assets/images/borg_great.png"), question: "ตำแหน่งที่เป็น" },
                { type: "PC", title: "3", img: require("../../assets/images/borg_bad.png"), question: "ตำแหน่งที่เป็น" }
            ]
        },
        question_3: {
            title: "ลักษณะอาการปวด",
            emergency: false,
            question: "ลักษณะอาการปวด",
            type: "Choice",
            answer: [
                { type: "c", title: "ตึงๆ", question: "ลักษณะอาการปวด" },
                { type: "c", title: "ตื้อๆ", question: "ลักษณะอาการปวด" },
                { type: "c", title: "ลึกๆเวลาขยับคอ", question: "ลักษณะอาการปวด" },
                { type: "c", title: "ปวดแปล๊บๆ/แสบร้อน", question: "ลักษณะอาการปวด" },
                { type: "o", title: "อื่นๆ", question: "ลักษณะอาการปวด", category: "description" },
                { type: "c", title: "ไม่แน่ใจ", question: "ลักษณะอาการปวด" }
            ]
        },
        question_4: {
            title: "มีประวัติได้รับบาดเจ็บที่ต้นคอ",
            emergency: false,
            question: "เคยได้รับบาดเจ็บที่ต้นคอหรือไม่?",
            type: "Choice",
            answer: [
                { type: "c", title: "มี", question: "เคยได้รับบาดเจ็บที่ต้นคอหรือไม่?" },
                { type: "c", title: "ไม่มี", question: "เคยได้รับบาดเจ็บที่ต้นคอหรือไม่?" }
            ]
        },
        question_5: {
            title: "ช่วงเวลาที่ปวด",
            emergency: false,
            question: "ช่วงเวลาที่ปวด",
            type: "Choice",
            answer: [
                { type: "c", title: "หลังตื่นนอน", question: "ช่วงเวลาที่ปวด" },
                { type: "c", title: "เช้า", question: "ช่วงเวลาที่ปวด" },
                { type: "c", title: "กลางวัน", question: "ช่วงเวลาที่ปวด" },
                { type: "c", title: "เย็น", question: "ช่วงเวลาที่ปวด" },
                { type: "c", title: "กลางดึก", question: "ช่วงเวลาที่ปวด" },
                { type: "c", title: "ไม่จำเพาะเวลา", question: "ช่วงเวลาที่ปวด" },
                { type: "c", title: "ตลอดเวลา", question: "ช่วงเวลาที่ปวด" }
            ]
        },
        question_6: {
            title: "การดำเนินของอาการ",
            emergency: false,
            question: "การดำเนินของอาการ",
            type: "Choice",
            answer: [
                { type: "c", title: "ค่อยเป็นค่อยไป", question: "การดำเนินของอาการ" },
                { type: "c", title: "เป็นๆหายๆ", question: "การดำเนินของอาการ" },
                { type: "c", title: "เฉียบพลัน", question: "การดำเนินของอาการ" },
            ]
        },
        question_7: {
            title: "อาการร้าว",
            emergency: false,
            question: "อาการปวดร้าวไหม?",
            type: "Choice",
            answer: [
                { type: "c", title: "ร้าวลงแขน",  question: "อาการปวดร้าวไหม?" },
                { type: "c", title: "ร้าวเป็นแถบ ๆ",  question: "อาการปวดร้าวไหม?" },
                { type: "c", title: "ร้าวเป็นแถบ ๆ",  question: "อาการปวดร้าวไหม?" },
                { type: "o", title: "อื่นๆ",  question: "อาการปวดร้าวไหม?" },
                { type: "c", title: "ไม่มี",  question: "อาการปวดร้าวไหม?" }
            ]
        },
        question_8: {
            title: "ปัจจัยที่ทำให้ดีขึ้น",
            emergency: false,
            question: "ปัจจัยที่ทำให้ดีขึ้น",
            type: "MultiChoice", 
            answer: [
                { type: "c", title: "พักการใช้งาน", question: "ปัจจัยที่ทำให้ดีขึ้น" },
                { type: "c", title: "เคลื่อนไหว", question: "ปัจจัยที่ทำให้ดีขึ้น" },
                { type: "c", title: "ทานยา", question: "ปัจจัยที่ทำให้ดีขึ้น" },
                { type: "o", title: "อื่นๆ", question: "ปัจจัยที่ทำให้ดีขึ้น", category: "description" },
                { type: "c", title: "ไม่มี", question: "ปัจจัยที่ทำให้ดีขึ้น" }
            ]
        },
        question_9: {
            title: "ปัจจัยที่ทำให้แย่ลง",
            emergency: false,
            question: "ปัจจัยที่ทำให้แย่ลง",
            type: "MultiChoice", ///////////////////////////////////////////// Check
            answer: [
                { type: "c", title: "พักการใช้งาน", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "c", title: "เคลื่อนไหว", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "o", title: "อื่นๆ", question: "ปัจจัยที่ทำให้แย่ลง", category: "description" },
                { type: "c", title: "ไม่มี", question: "ปัจจัยที่ทำให้แย่ลง" }
            ]
        },
        question_10: {
            title: "อาการร่วม",
            emergency: false,
            question: "อาการร่วม",
            type: "MultiChoice", 
            answer: [
                { type: "c", title: "ไข้", question: "อาการร่วม" },
                { type: "c", title: "เบื่ออาหาร/น้ำหนักลด", question: "อาการร่วม" },
                { type: "c", title: "อ่อนเพลีย", question: "อาการร่วม" },
                { type: "c", title: "ขาอ่อนกำลัง", question: "อาการร่วม" },
                { type: "c", title: "แขนอ่อนกำลัง", question: "อาการร่วม" },
                { type: "c", title: "ชาตามแขนขา", question: "อาการร่วม" },
                { type: "o", title: "อื่นๆ", question: "อาการร่วม", category: "description" },
                { type: "c", title: "ไม่มี", question: "อาการร่วม" }
            ]
        },
    },

}

















//2 questions per page

// const questionSource = {
//     chiefQuestion: {
//         title: "อาการสำคัญ",
//         next: "end",
//         emergency: false,
//         question: "โปรดระบุอาการสำคัญ",
//         type: 'Choice',
//         answer: [
//             { type: "c", title: "ไอเป็นเลือด", next: "coughBloodQuestions", sex: "MF" },
//             { type: "c", title: "ไอ", next: "coughQuestions", sex: "MF" },
//             { type: "c", title: "อาเจียนเป็นเลือด", next: "vomitBloodQuestions", sex: "MF" },
//             { type: "c", title: "เหนื่อยง่าย", next: "fatigueQuestions", sex: "MF" },
//             { type: "c", title: "แสบร้อนกลางอก", next: "heartBurnQuestions", sex: "MF" },
//             { type: "c", title: "เวียนหัวบ้านหมุน", next: "vertigoQuestions", sex: "MF" },
//             { type: "c", title: "เลือดออกผิดปกติ", next: "bleedingQuestions", sex: "MF" },
//             { type: "c", title: "เลือดออกทางช่องคลอด", next: "vaginalBleedingQuestions", sex: "F" },
//             { type: "c", title: "ลืมทานยาคุม", next: 54, sex: "F" },
//             { type: "c", title: "มึนหัว", next: "nauseaQuestions", sex: "MF" },
//             { type: "c", title: "ผื่นหรือตุ่มผิวหนัง", next: 64, sex: "MF" },
//             { type: "c", title: "เป็นลม", next: 71, sex: "MF" },
//             { type: "c", title: "ปัสสาวะแสบขัด", next: 82, sex: "MF" },
//             { type: "c", title: "ปัสสาวะมาก", next: 87, sex: "MF" },
//             { type: "c", title: "ปัสสาวะเป็นเลือด", next: 92, sex: "MF" },
//             { type: "c", title: "ปวดหัว", next: 97, sex: "MF" },
//             { type: "c", title: "ปวดเมื่อยกล้ามเนื้อ", next: 119, sex: "MF" },
//             { type: "c", title: "ปวดท้องน้อย/ปวดประจำเดือน", next: 124, sex: "F" },
//             { type: "c", title: "ปวดท้อง", next: 294, sex: "MF" },
//             { type: "c", title: "ปวดคอ", next: 138, sex: "MF" },
//             { type: "c", title: "ปวดข้อ", next: 148, sex: "MF" },
//             { type: "c", title: "บวม", next: 154, sex: "MF" },
//             { type: "c", title: "ถ่ายเป็นเลือดสด", next: 161, sex: "MF" },
//             { type: "c", title: "ท้องเสีย", next: 170, sex: "MF" },
//             { type: "c", title: "ตาแดง", next: 178, sex: "MF" },
//             { type: "c", title: "ตัวเหลือง/ตาเหลือง", next: 183, sex: "MF" },
//             { type: "c", title: "ตกขาว", next: 189, sex: "F" },
//             { type: "c", title: "ซีด", next: 202, sex: "MF" },
//             { type: "c", title: "ชัก", next: 207, sex: "MF" },
//             { type: "c", title: "ใจสั่น", next: 215, sex: "MF" },
//             { type: "c", title: "เจ็บแน่นหน้าอก", next: 221, sex: "MF" },
//             { type: "c", title: "เจ็บคอ", next: 232, sex: "MF" },
//             { type: "c", title: "จุกเสียดใต้ลิ้นปี่", next: 234, sex: "MF" },
//             { type: "c", title: "คลื่นไส้ อาเจียน", next: 238, sex: "MF" },
//             { type: "c", title: "ไข้", next: 248, sex: "MF" },
//             { type: "c", title: "นอนหลับผิดปกติ", next: "question_7", sex: "MF" },
//             { type: "c", title: "ก้อนที่ท้องน้อย", next: 267, sex: "F" },
//             { type: "c", title: "ก้อนที่คอ", next: 281, sex: "MF" },
//             { type: "c", title: "กล้ามเนื้ออ่อนแรง ", next: 288, sex: "MF" },
//             { type: "o", title: "อื่นๆ", next: "end", sex: "MF" },

//         ]
//     },
//     //ไอเป็นเลือด
//     coughBloodQuestions: {
//         question_1: [
//             {
//                 title: "อาการฉุกเฉิน",
//                 next: "question_2",
//                 emergency: false,
//                 question: "มีอาการเหล่านี้หรือไม่ ",
//                 type: 'MultiChoice',
//                 answer: [
//                     { type: "E", title: "ไอออกเลือดมากกว่า 1 แก้ว/ครั้ง ( 100 มล.)", next: "question_2" },
//                     { type: "E", title: "ไอออกเลือดมากกว่า 3 แก้ว/วัน ( 600 มล.)", next: "question_2" },
//                     { type: "E", title: "ไอออกเลือดมากกว่า 1 แก้ว/วัน ( 200 มล.)", next: "question_2" },
//                     { type: "E", title: "นอนราบไม่ได้", next: "question_2" },
//                     { type: "E", title: "เหนื่อย/เจ็บหน้าอกเฉียบพลัน", next: "question_2" },
//                     { type: "c", title: "ไม่มี", next: "question_2" }
//                 ]
//             }
//         ],
//         question_2_3: [
//             {
//                 title: "ระยะเวลาของอาการ",
//                 next: "question_3",
//                 emergency: false,
//                 question: "ระยะเวลาของอาการ",
//                 type: 'Choice',
//                 answer: [
//                     { type: "T", title: "time", next: "question_3" }
//                 ]
//             },
//             {
//                 title: "อาการร่วม",
//                 next: "question_4",
//                 emergency: false,
//                 question: "อาการร่วม",
//                 type: 'MultiChoice',
//                 answer: [
//                     { type: "c", title: "มีเสมหะข้นและมีกลิ่นเหม็น", next: "question_4" },
//                     { type: "c", title: "เบื่ออาหาร/น้ำหนักลด ", next: "question_4" },
//                     { type: "c", title: "ไข้ ", next: "question_4" },
//                     { type: "c", title: "ปวดข้อ", next: "question_4" },
//                     { type: "c", title: "ผมร่วง", next: "question_4" },
//                     { type: "c", title: "ผื่นแพ้แสง", next: "question_4" },
//                     { type: "c", title: "ปัสสาวะเป็นเลือด", next: "question_4" },
//                     { type: "c", title: "ไม่มี", next: "question_4" },
//                     { type: "o", title: "อื่นๆ", next: "question_4", category: "description" }
//                 ]
//             }
//         ],
//         question_4: [
//             {
//                 title: "ประวัติในอดีต",
//                 next: "end",
//                 emergency: false,
//                 question: "ประวัติในอดีต",
//                 type: 'MultiChoice',
//                 answer: [
//                     { type: "c", title: "มีเลือดออกง่าย", next: "end" },
//                     { type: "c", title: "ประวัติโรคเลือด", next: "end" },
//                     { type: "c", title: "เคยเป็นวัณโรคมาก่อน", next: "end" },
//                     { type: "c", title: "มะเร็งปอดในครอบครัว", next: "end" },
//                     { type: "c", title: "ได้รับบาดเจ็บบริเวณทรวงอก", next: "end" },
//                     { type: "c", title: "ทานยาแก้ปวดกล้ามเนื้อ/ปวดข้อ", next: "end" },
//                     { type: "c", title: "ใช้ยาต้านการแข็งตัวของเลือด (warfarin)", next: "end" },
//                     { type: "c", title: "ใช้ยาต้านการจับตัวของเกร็ดเลือด (aspirin)", next: "end" },
//                     { type: "c", title: "เคยส่องกล้องในทางเดินหายใจ", next: "end" },
//                     { type: "F", title: "ใช้ยาคุมกำเนิด ", next: "end" },
//                     { type: "c", title: "ไม่มี", next: "end" },

//                 ]
//             }
//         ]
//     }
//     ,





//ไอ
// coughQuestions: {
//     question_1: {
//         title: "อาการฉุกเฉิน",
//         next: "question_2",
//         emergency: true,
//         question: "มีอาการเหล่านี้หรือไม่",
//         type: 'MultiChoice',
//         answer: [
//             { type: "E", title: "หายใจเร็วขึ้น", next: "end" },
//             { type: "E", title: "สำลัก ", next: "end" },
//             { type: "E", title: "ตัวเขียว/ปากเขียว ", next: "end" },
//             { type: "E", title: "แน่นหน้าอกเฉียบพลัน", next: "end" },
//             { type: "c", title: "ไม่มี", next: "question_2" }
//         ]
//     },
//     question_2: {
//         title: "ระยะเวลาของอาการ",
//         next: "question_3",
//         emergency: false,
//         question: "ระยะเวลาของอาการ",
//         type: 'Choice',
//         answer: [
//             { type: "T", title: "time", next: "question_3" }
//         ]
//     },
//     question_3: {
//         title: "ลักษณะอาการไอ",
//         next: "question_4",
//         emergency: false,
//         question: "ลักษณะอาการไอ",
//         type: 'Choice',
//         answer: [
//             { type: "c", title: "ไอแห้ง", next: "question_4" },
//             { type: "c", title: "ไอมีเสมหะ", next: "question_4" },
//             { type: "c", title: "ไอเป็นชุด", next: "question_4" },
//             { type: "c", title: "ไอหายใจเสียงหวีด", next: "question_4" },
//             { type: "c", title: "ไอเสียงแหบ", next: "question_4" },
//             { type: "c", title: "ไอมีเลือดปน", next: "question_4" },
//             { type: "c", title: "ไม่แน่ใจ", next: "question_4" },
//             { type: "o", title: "อื่นๆ", next: "question_4", category: "description" },
//         ]
//     },
//     question_4: {
//         title: "ความถี่ของอาการ",
//         next: "question_5",
//         emergency: false,
//         question: "ความถี่ของอาการ",
//         type: 'Choice',
//         answer: [
//             { type: "c", title: "บ่อยตลอดวัน", next: "question_5" },
//             { type: "c", title: "ไอเป็นบางช่วง", next: "question_5" },
//             { type: "c", title: "เป็นน้อยไม่ไอทุกวัน", next: "question_5" },
//             { type: "c", title: "เป็นมากขึ้นช่วงกลางคืน/นอนราบ", next: "question_5" },
//             { type: "o", title: "อื่นๆ", next: "question_5", category: "description" }
//         ]
//     },
//     question_5: {
//         title: "สิ่งที่กระตุ้นให้ไอ",
//         next: "question_6",
//         emergency: false,
//         question: "สิ่งที่กระตุ้นให้ไอ",
//         type: 'MultiChoice',
//         answer: [
//             { type: "c", title: "ฝุ่นควัน", next: "question_6" },
//             { type: "c", title: "อากาศเย็น", next: "question_6" },
//             { type: "c", title: "นอนราบแล้วไอ", next: "question_6" },
//             { type: "c", title: "ไม่มี", next: "question_6" },
//             { type: "c", title: "ไม่แน่ใจ", next: "question_6" },
//             { type: "o", title: "อื่นๆ", next: "question_6", category: "description" },
//         ]
//     },
//     question_6: {
//         title: "อาการดีขึ้นจาก",
//         next: "question_7",
//         emergency: false,
//         question: "อาการดีขึ้นจาก",
//         type: 'MultiChoice',
//         answer: [
//             { type: "c", title: "ทานยาแล้วดีขึ้น", next: "question_7" },
//             { type: "c", title: "การรักษาก่อนหน้า", next: "question_7" },
//             { type: "c", title: "ทานยาแล้วอาการลดลง", next: "question_7" },
//             { type: "c", title: "นั่งตัวตรงแล้วอาการลดลง", next: "question_7" },
//             { type: "c", title: "อาการไม่ดีขึ้นเลย", next: "question_7" },
//             { type: "o", title: "อื่นๆ", next: "question_7", category: "description" }
//         ]
//     },
//     question_7: {
//         title: "อาการร่วม",
//         next: "question_8",
//         emergency: false,
//         question: "อาการร่วม",
//         type: 'MultiChoice',
//         answer: [
//             { type: "c", title: "ไข้", next: "question_8" },
//             { type: "c", title: "ปวดหู", next: "question_8" },
//             { type: "c", title: "คัดจมูก เจ็บคอ", next: "question_8" },
//             { type: "c", title: "เสียงแหบ", next: "question_8" },
//             { type: "c", title: "น้ำมูกลงคอ", next: "question_8" },
//             { type: "c", title: "เรอเปรี้ยว", next: "question_8" },
//             { type: "c", title: "เสมหะขาวใส ", next: "question_8" },
//             { type: "c", title: "เสมหะเขียวเหลือง", next: "question_8" },
//             { type: "c", title: "เสมหะแดง/เลือดปน", next: "question_8" },
//             { type: "c", title: "ปวดโพรงจมูก", next: "question_8" },
//             { type: "c", title: "ปวดตามใบหน้า", next: "question_8" },
//             { type: "c", title: "น้ำมูกนำมาก่อนไอ", next: "question_8" },
//             { type: "c", title: "แสบร้อนหน้าอก", next: "question_8" },
//             { type: "c", title: "เบื่ออาหาร/น้ำหนักลด", next: "question_8" },
//             { type: "c", title: "ไม่มี", next: "question_8" },
//             { type: "o", title: "อื่นๆ", next: "question_8", category: "description" }
//         ]
//     },
//     question_8: {
//         title: "ประวัติในอดีต",
//         next: "end",
//         emergency: false,
//         question: "ประวัติในอดีต",
//         type: 'MultiChoice',
//         answer: [
//             { type: "c", title: "โรคหอบหืด", next: "end" },
//             { type: "c", title: "โรคถุงลมโป่งพอง", next: "end" },
//             { type: "c", title: "มีประวัติภูมิแพ้ของตัวเอง/ครอบครัว", next: "end" },
//             { type: "c", title: "ประวัติโรคกระเพาะ/กรดไหลย้อน", next: "end" },
//             { type: "c", title: "ประวัติวัณโรคของตัวเอง/ครอบครัว", next: "end" },
//             { type: "c", title: "กำลังทานยาลดความดัน ", next: "end" },
//             { type: "c", title: "สูบบุหรี่", next: "end" },
//             { type: "c", title: "หัวใจล้มเหลว", next: "end" },
//             { type: "c", title: "ไม่มี", next: "end" }
//         ]
//     }
// }
// ,
// //อาเจียนเป็นเลือด
// vomitBloodQuestions: {
//     question_1: {
//         title: "ลักษณะเลือด",
//         next: "question_2",
//         emergency: false,
//         question: "ลักษณะเลือด",
//         type: 'Choice',
//         answer: [
//             { type: "c", title: "ลิ่มเลือดปนเศษอาหาร", next: "question_2" },
//             { type: "c", title: "สีแดงสด", next: "question_2" },
//             { type: "c", title: "สีโอวัลติน", next: "question_2" },
//             { type: "c", title: "มีเลือดปนเล็กน้อย", next: "question_2" },
//         ]
//     },
//     question_2: {
//         title: "อาการฉุกเฉิน",
//         next: "question_3",
//         emergency: false,
//         question: "มีอาการเหล่านี้ไหม",
//         type: 'MultiChoice',
//         answer: [
//             { type: "E", title: "ลุกนั่งแล้วเวียนศีรษะ", next: "question_3" },
//             { type: "E", title: "มีอาการซึม เรียกไม่ตื่น", next: "question_3" },
//             { type: "E", title: "ปริมาณเลือดสดมากกว่า 2  แก้วน้ำ ", next: "question_3" },
//             { type: "E", title: "อาเจียนเป็นเลือดและมีถ่ายเป็นเลือดร่วมด้วย ", next: "question_3" },
//             { type: "c", title: "ไม่มี", next: "question_3" }
//         ]
//     },
//     question_3: {
//         title: "เคยอาเจียนเป็นเลือดมาก่อน",
//         next: "question_4",
//         emergency: false,
//         question: "เคยอาเจียนเป็นเลือดมาก่อนหรือไม่",
//         type: 'Choice',
//         answer: [
//             { type: "c", title: "ใช่", next: "question_4" },
//             { type: "c", title: "ไม่ใช่", next: "question_4" },
//         ]
//     },
//     question_4: {
//         title: "ปริมาณเลือดที่ออก",
//         next: "question_5",
//         emergency: false,
//         question: "ปริมาณเลือดที่ออก ", //*****สงสัย ขอรูป ?*******
//         type: 'Choice',
//         answer: [
//             { type: "c", title: "1 แก้วน้ำ", next: "question_5" },
//             { type: "c", title: "น้อยกว่า 1 แก้วน้ำ", next: "question_5" },
//             { type: "c", title: "มากกว่า 1 แก้วน้ำ", next: "question_5" },
//             { type: "c", title: "ไม่แน่ใจ", next: "question_5" }
//         ]
//     },
//     question_5: {
//         title: "อาการร่วม",
//         next: "question_6",
//         emergency: false,
//         question: "อาการร่วม",
//         type: 'MultiChoice',
//         answer: [
//             { type: "c", title: "ไข้", next: "question_6" },
//             { type: "c", title: "ท้องโต", next: "question_6" },
//             { type: "c", title: "ถ่ายดำ", next: "question_6" },
//             { type: "c", title: "ปวดท้อง", next: "question_6" },
//             { type: "c", title: "แน่นท้อง", next: "question_6" },
//             { type: "c", title: "แสบร้อนหน้าอก", next: "question_6" },
//             { type: "c", title: "คลื่นไส้/อาเจียน", next: "question_6" },
//             { type: "c", title: "ตัวเหลือง/ตาเหลือง", next: "question_6" },
//             { type: "c", title: "กลืนเจ็บ/กลืนลำบาก", next: "question_6" },
//             { type: "c", title: "เบื่ออาหาร/น้ำหนักลด", next: "question_6" },
//             { type: "c", title: "อาเจียนรุนแรงก่อนอาเจียนเป็นเลือด", next: "question_6" },
//             { type: "c", title: "ไม่มี", next: "question_6" },
//             { type: "o", title: "อื่นๆ", next: "question_6", category: "description" }
//         ]
//     },
//     question_6: {
//         title: "ประวัติในอดีต",
//         next: "end",
//         emergency: false,
//         question: "เคยมีอาการในอดีตเหล่านี้หรือไม่",
//         type: 'MultiChoice',
//         answer: [
//             { type: "c", title: "เป็นโรคตับ", next: "end" },
//             { type: "c", title: "เคยเป็นโรคกระเพาะ", next: "end" },
//             { type: "c", title: "เคยผ่าตัดหลอดเลือดใหญ่", next: "end" },
//             { type: "c", title: "มีประวัติมะเร็งในครอบครัว", next: "end" },
//             { type: "c", title: "ทานยาแก้ปวดกล้ามเนื้อ/ปวดข้อ ", next: "end" },
//             { type: "c", title: "มีประวัติเลือดออกง่าย หยุดยาก", next: "end" },
//             { type: "c", title: "ใช้ยาต้านการแข็งตัวของเลือด (warfarin)", next: "end" },
//             { type: "c", title: "เป็นเส้นเลือดหลอดอาหารโป่งพอง", next: "end" },
//             { type: "c", title: "ใช้ยาต้านการจับตัวของเกร็ดเลือด (aspirin)", next: "end" },
//             { type: "c", title: "ไม่มี", next: "end" }
//         ]
//     }
// },
// //เหนื่อยง่าย
// fatigueQuestions: {
//     question_1: {
//         title: "ระยะเวลาของอาการที่เคยเป็นในอดีต",
//         next: "question_2",
//         emergency: false,
//         question: "ระยะเวลาที่เป็นของอาการในอดีต",
//         type: 'Choice',
//         answer: [
//             { type: "T", title: "time", next: "question_2" }
//         ]
//     },
//     question_2: {
//         title: "อาการฉุกเฉิน",
//         next: "question_3",
//         emergency: false,
//         question: "มีอาการเหล่านี้ไหม",
//         type: 'MultiChoice',
//         answer: [
//             { type: "E", title: "ซึมลง", next: "end" },
//             { type: "E", title: "เกิดขึ้นทันทีทันใด", next: "end" },
//             { type: "E", title: "ตัวเขียว/ปากเขียว", next: "end" },
//             { type: "E", title: "หายใจเร็ว/หายใจไม่ออก", next: "end" },
//             { type: "E", title: "มีประวัติสำลักสิ่งแปลกปลอม", next: "end" },
//             { type: "c", title: "ไม่มี", next: "question_3" }
//         ]
//     },
//     question_3: {
//         title: "ลักษณะอาการ",
//         next: "question_4",
//         emergency: false,
//         question: "ลักษณะอาการ",
//         type: 'MultiChoice',
//         answer: [
//             { type: "c", title: "หายใจไม่โล่ง/ไม่อิ่ม", next: "question_4" },
//             { type: "c", title: "หายใจถี่มากขึ้น", next: "question_4" },
//             { type: "c", title: "ต้องใช้แรงในการหายใจมากขึ้น", next: "question_4" },
//             { type: "c", title: "ไม่แน่ใจ", next: "question_4" },
//             { type: "o", title: "อื่นๆ", next: "question_4", category: "description" }
//         ]
//     },
//     question_4: {
//         title: "ปัจจัยที่ทำให้ดีขึ้น",
//         next: "question_5",
//         emergency: false,
//         question: "ปัจจัยที่ทำให้ดีขึ้น",
//         type: 'MultiChoice',
//         answer: [
//             { type: "c", title: "พ่นยา", next: "question_5" },
//             { type: "c", title: "พักผ่อน", next: "question_5" },
//             { type: "c", title: "ลุกขึ้นนั่ง", next: "question_5" },
//             { type: "c", title: "ไม่มี", next: "question_5" }
//         ]
//     },
//     question_5: {
//         title: "ปัจจัยที่ทำให้อาการแย่ลง",
//         next: "question_6",
//         emergency: false,
//         question: "สื่งที่ทำให้แย่ลง",
//         type: 'MultiChoice',
//         answer: [
//             { type: "c", title: "สูบบุหรี่", next: "question_6" },
//             { type: "c", title: "นอนราบ", next: "question_6" },
//             { type: "c", title: "ฝุ่นละออง", next: "question_6" },
//             { type: "c", title: "นั่ง", next: "question_6" },
//             { type: "c", title: "หายใจเข้าลึกๆแล้วเจ็บ", next: "question_6" },
//             { type: "c", title: "ไม่มี", next: "question_6" }
//         ]
//     },
//     question_6: {
//         title: "อาการร่วม",
//         next: "question_7",
//         emergency: false,
//         question: "อาการร่วม",
//         type: 'MultiChoice',
//         answer: [
//             { type: "c", title: "ไข้", next: "question_7" },
//             { type: "c", title: "ไอ", next: "question_7" },
//             { type: "c", title: "ใจสั่น", next: "question_7" },
//             { type: "c", title: "มือสั่น", next: "question_7" },
//             { type: "c", title: "มีเสมหะ", next: "question_7" },
//             { type: "c", title: "เจ็บหน้าอก", next: "question_7" },
//             { type: "c", title: "ท้องบวมโต", next: "question_7" },
//             { type: "c", title: "ปัสสาวะบ่อย", next: "question_7" },
//             { type: "c", title: "ดื่มน้ำมากขึ้น", next: "question_7" },
//             { type: "c", title: "ขี้ร้อนผิดปกติ", next: "question_7" },
//             { type: "c", title: "ปัสสาวะลดลง", next: "question_7" },
//             { type: "c", title: "มีตุ่มน้ำขึ้นตามผิวหนัง", next: "question_7" },
//             { type: "c", title: "ตัวเหลือง/ตาเหลือง", next: "question_7" },
//             { type: "c", title: "เบื่ออาหาร/น้ำหนักลด", next: "question_7" },
//             { type: "c", title: "บวมที่ขา/แขน/ตัว/หนังตา", next: "question_7" },
//             { type: "c", title: "ไม่มี", next: "question_7" },
//             { type: "o", title: "อื่นๆ", next: "question_7", category: "description" }
//         ]
//     },
//     question_7: {
//         title: "โรคประจำตัว",
//         next: "question_8",
//         emergency: false,
//         question: "โรคประจำตัว",
//         type: 'MultiChoice',
//         answer: [
//             { type: "c", title: "ภูมิแพ้", next: "question_8" },
//             { type: "c", title: "โรคหืด/ถุงลมโป่งพอง", next: "question_8" },
//             { type: "c", title: "โรคเลือด", next: "question_8" },
//             { type: "c", title: "เบาหวาน", next: "question_8" },
//             { type: "c", title: "ไทรอยด์", next: "question_8" },
//             { type: "c", title: "คนในครอบครัวเสียชีวิตกะทันหัน ", next: "question_8" },
//             { type: "c", title: "ไม่มี", next: "question_8" },
//             { type: "o", title: "อื่นๆ", next: "question_8", category: "description" }
//         ]
//     },
//     question_8: {
//         title: "ประวัติในอดีต",
//         next: "end",
//         emergency: false,
//         question: "ประวัติในอดีต",
//         type: 'MultiChoice',
//         answer: [
//             { type: "c", title: "นอนอยู่กับที่นานๆ", next: "end" },
//             { type: "c", title: "เคยได้รับบาดเจ็บบริเวณทรวงอก", next: "end" },
//             { type: "c", title: "ไม่มี", next: "end" },
//         ]
//     }
// },
// //แสบร้อนกลางอก
// heartBurnQuestions: {
//     question_1: {
//         title: "อาการร่วม",
//         next: "end",
//         emergency: false,
//         question: "อาการร่วม",
//         type: 'MultiChoice',
//         answer: [
//             { type: "c", title: "อาเจียนหรือถ่ายเป็นเลือด", next: "end" },
//             { type: "c", title: "น้ำหนักลดโดยไม่ทราบสาเหตุ", next: "end" },
//             { type: "c", title: "กลืนลำบาก", next: "end" },
//             { type: "c", title: "อาเจียนต่อเนื่อง", next: "end" },
//             { type: "c", title: "จุกแน่นบริเวณลำคอ", next: "end" },
//             { type: "c", title: "เรอเปรี้ยว", next: "end" },
//             { type: "c", title: "เสียงแหบ", next: "end" },
//             { type: "c", title: "ไอแห้ง", next: "end" },
//             { type: "c", title: "มีอาการเจ็บหน้าอก", next: "end" },
//             { type: "o", title: "อื่นๆ", next: "end", category: "description" },
//         ]
//     }
// },
// //เวียนหัวบ้านหมุน
// vertigoQuestions: {
//     question_1: {
//         title: "ระยะเวลาของอาการบ้านหมุน",
//         next: "question_2",
//         emergency: false,
//         question: "ระยะเวลาที่มีเฉพาะอาการบ้านหมุน (ไม่รวมมึนหัว)",
//         type: 'Choice',
//         answer: [
//             { type: "T", title: "time", next: "question_2" },
//         ]
//     },
//     question_2: {
//         title: "อาการฉุกเฉิน",
//         next: "question_3",
//         emergency: true,
//         question: "มีอาการเหล่านี้ไหม",
//         type: 'MultiChoice',
//         answer: [
//             { type: "E", title: "ปวดศรีษะรุนแรง", next: "end" },
//             { type: "E", title: "คลื่นไส้/อาเจียน", next: "end" },
//             { type: "E", title: "อาการเกิดขึ้นทันที", next: "end" },
//             { type: "c", title: "ไม่มี", next: "question_3" }
//         ]
//     },
//     question_3: {
//         title: "มีช่วงเวลาที่อาการหายดี",
//         next: "question_4",
//         emergency: false,
//         question: "มีช่วงเวลาที่อาการหายดี",
//         type: 'Choice',
//         answer: [
//             { type: "c", title: "ใช่", next: "question_4" },
//             { type: "c", title: "ไม่ใช่", next: "question_4" }
//         ]
//     },
//     question_4: {
//         title: "ความรุนแรง",
//         next: "question_5",
//         emergency: false,
//         question: "ความรุนแรง",
//         type: 'MultiChoice',
//         answer: [
//             { type: "c", title: "กระทบงานที่ทำ", next: "question_5" },
//             { type: "c", title: "กระทบกิจวัตรประจำวัน", next: "question_5" },
//             { type: "c", title: "อาการจะรุนแรงช่วงหนึ่งแล้วค่อยๆทุเลาลง", next: "question_5" },
//             { type: "c", title: "อาการเป็นค้างอยู่นาน", next: "question_5" },
//             { type: "o", title: "อื่นๆ", next: "question_5", category: "description" }
//         ]
//     },
//     question_5: {
//         title: "อาการร่วม",
//         next: "question_6",
//         emergency: false,
//         question: "อาการร่วม",
//         type: 'MultiChoice',
//         answer: [
//             { type: "c", title: "คลื่นไส้/อาเจียน", next: "question_6" },
//             { type: "c", title: "ไม่สามารถทรงตัวได้", next: "question_6" },
//             { type: "c", title: "อ่อนเพลีย", next: "question_6" },
//             { type: "c", title: "เหงื่อออก", next: "question_6" },
//             { type: "c", title: "สูญเสียการได้ยิน", next: "question_6" },
//             { type: "c", title: "ปวดหู", next: "question_6" },
//             { type: "c", title: "หูอื้อ", next: "question_6" },
//             { type: "c", title: "น้ำไหลออกจากหู", next: "question_6" },
//             { type: "c", title: "มีเสียงดังในหู", next: "question_6" },
//             { type: "c", title: "ปวดหัว", next: "question_6" },
//             { type: "c", title: "แขนขาอ่อนแรง", next: "question_6" },
//             { type: "c", title: "ชา", next: "question_6" },
//             { type: "c", title: "กล้ามเนื้อใบหน้าอ่อนแรง", next: "question_6" },
//             { type: "c", title: "หน้ามืดหรือหมดสติ", next: "question_6" },
//             { type: "c", title: "เป็นลม", next: "question_6" },
//             { type: "c", title: "ไม่มี", next: "question_6" },
//             { type: "o", title: "อื่นๆ", next: "question_6", category: "description" }
//         ]
//     },
//     question_6: {
//         title: "ปัจจัยที่ทำให้แย่ลง",
//         next: "end",
//         emergency: false,
//         question: "อาการร่วม",
//         type: 'สื่งที่ทำให้แย่ลง',
//         answer: [
//             { type: "c", title: "เมื่อเปลี่ยนท่าทาง", next: "end" },
//             { type: "c", title: "ก้มหน้า", next: "end" },
//             { type: "c", title: "เงยหน้า", next: "end" },
//             { type: "c", title: "ล้มตัวลงนอน", next: "end" },
//             { type: "c", title: "หันหน้าไปด้านใดด้านหนึ่ง", next: "end" },
//             { type: "c", title: "ไอ/จาม/เบ่ง", next: "end" },
//             { type: "c", title: "ขึ้นเครื่องบิน", next: "end" },
//             { type: "c", title: "ทานอาหารเค็ม", next: "end" },
//             { type: "c", title: "เปลี่ยนแว่นตาใหม่", next: "end" },
//             { type: "c", title: "ไม่มี", next: "end" },
//             { type: "o", title: "อื่นๆ", next: "end", category: "description" }
//         ]
//     }
// },
// //เลือดออกผิดปกติ
// bleedingQuestions: {
//     question_1: {
//         title: "ระยะเวลาของอาการ",
//         next: "question_2",
//         emergency: false,
//         question: "ระยะเวลาที่มีอาการ",
//         type: 'Choice',
//         answer: [
//             { type: "T", title: "time", next: "question_2" }
//         ]
//     },
//     question_2: {
//         title: "อาการฉุกเฉิน",
//         next: "question_3",
//         emergency: true,
//         question: "มีอาการเหล่านี้ร่วมด้วยหรือไม่",
//         type: 'MultiChoice',
//         answer: [
//             { type: "E", title: "ซึมลง", next: "end" },
//             { type: "E", title: "เลือดไหลออกไม่หยุด", next: "end" },
//             { type: "E", title: "หน้ามืดวิงเวียนโดยเฉพาะตอนลุกนั่ง", next: "end" },
//             { type: "c", title: "ไม่มี", next: "question_3" }
//         ]
//     },
//     question_3: {
//         title: "กดห้ามเลือดแล้วหยุดหรือไม่",
//         next: "question_4",
//         emergency: false,
//         question: "กดห้ามเลือดแล้วหยุดไหม",
//         type: 'Choice',
//         answer: [
//             { type: "c", title: "หยุด", next: "question_4" },
//             { type: "c", title: "ไม่หยุด", next: "question_4" },
//             { type: "c", title: "กดห้ามไม่ได้", next: "question_4" }
//         ]
//     },
//     question_4: {
//         title: "อาการร่วม",
//         next: "question_5",
//         emergency: false,
//         question: "อาการร่วม",
//         type: 'MultiChoice',
//         answer: [
//             { type: "c", title: "ไข้", next: "question_5" },
//             { type: "c", title: "เป็นหวัดบ่อยๆ", next: "question_5" },
//             { type: "c", title: "มีจุดเลือดออกเล็กๆ", next: "question_5" },
//             { type: "c", title: "มีจ้ำเลือดผิดปกติ", next: "question_5" },
//             { type: "c", title: "เลือดออกตามไรฟันร่วมด้วย", next: "question_5" },
//             { type: "c", title: "อุจจาระเป็นเลือดร่วมด้วย", next: "question_5" },
//             { type: "c", title: "ปัสสาวะเป็นเลือดร่วมด้วย", next: "question_5" },
//             { type: "c", title: "เคยมีเลือดออกมาก่อน", next: "question_5" },
//             { type: "c", title: "ไม่มี", next: "question_3" },
//             { type: "o", title: "อื่นๆ", next: "question_5", category: "description" }
//         ]
//     },
//     question_5: {
//         title: "ประวัติในอดีต",
//         next: "end",
//         emergency: false,
//         question: "ประวัติในอดีต",
//         type: 'MultiChoice',
//         answer: [
//             { type: "c", title: "เคยเป็นโรคตับ", next: "end" },
//             { type: "c", title: "เคยเป็นโรคไต", next: "end" },
//             { type: "c", title: "มีโรคหัวใจอยู่เดิม", next: "end" },
//             { type: "c", title: "ทานยาแก้ปวดกล้ามเนื้อ/ปวดข้อ", next: "end" },
//             { type: "c", title: "มีประวัติเลือดหยุดยากในครอบครัว", next: "end" },
//             { type: "c", title: "บริเวณที่พักอาศัยมีคนเป็นไข้เลือดออก", next: "end" },
//             { type: "c", title: "ใช้ยาต้านการแข็งตัวของเลือด (warfarin)", next: "end" },
//             { type: "c", title: "ใช้ยาต้านการจับตัวของเกร็ดเลือด (aspirin)", next: "end" },
//             { type: "c", title: "ไม่มี", next: "end" },
//         ]
//     }
// },
// //เลือดออกทางช่องคลอด
// vaginalBleedingQuestions: {
//     question_1: {
//         title: "ลักษณะของเลือดที่ออก",
//         next: "question_2",
//         emergency: false,
//         question: "ลักษณะของเลือดที่ออก",
//         type: 'Choice',
//         answer: [
//             { type: "c", title: "ประจำเดือนมามาก", next: "question_2" },
//             { type: "c", title: "ประจำเดือนมานาน", next: "question_2" },
//             { type: "c", title: "เลือดออกระหว่างรอบเดือน", next: "question_2" },
//             { type: "c", title: "เลือดออกระหว่างตั้งครรภ์", next: "question_2" },
//             { type: "c", title: "เลือดออกหลังมีเพศสัมพันธ์", next: "question_2" },
//             { type: "c", title: "เลือดออกหลังหยุดมีประจำเดือนมามากกว่า 1 ปี", next: "question_2" },
//             { type: "c", title: "ไม่แน่ใจ", next: "question_2" }
//         ]
//     },
//     question_2: {
//         title: "ระยะเวลาของอาการ",
//         next: "question_3",
//         emergency: false,
//         question: "ระยะเวลาที่มีอาการ",
//         type: 'Choice',
//         answer: [
//             { type: "T", title: "time", next: "question_3" },
//         ]
//     },
//     question_3: {
//         title: "อาการร่วม",
//         next: "question_4",
//         emergency: true,
//         question: "มีอาการเหล่านี้ไหม",
//         type: 'MultiChoice',
//         answer: [
//             { type: "U", title: "ไข้", next: "end" },
//             { type: "U", title: "ปวดประจำเดือน", next: "end" },
//             { type: "U", title: "ปวดท้อง", next: "end" },
//             { type: "U", title: "ตกขาว", next: "end" },
//             { type: "U", title: "เจ็บเวลามีเพศสัมพันธ์ ", next: "end" },
//             { type: "U", title: "เลือดออกหลังมีเพศสัมพันธ์ ", next: "end" },
//             { type: "U", title: "ตึงคัดเต้านม", next: "end" },
//             { type: "U", title: "คลำได้ก้อน", next: "end" },
//             { type: "U", title: "ท้องโตขึ้น", next: "end" },
//             { type: "U", title: "เบื่ออาหาร", next: "end" },
//             { type: "U", title: "อุจจาระหรือปัสสาวะผิดปกติ", next: "end" },
//             { type: "U", title: "น้ำหนักลด", next: "end" },
//             { type: "U", title: "คลื่นไส้/อาเจียน", next: "end" },
//             { type: "c", title: "ไม่มี", next: "question_4" }
//         ]
//     },
//     question_4: {
//         title: "เคยมีเลือดออกมาก่อน",
//         next: "question_5",
//         emergency: false,
//         question: "เคยมีเลือดออกมาก่อนไหม",
//         type: 'Choice',
//         answer: [
//             { type: "c", title: "เคย", next: "question_5" },
//             { type: "c", title: "ไม่เคย", next: "question_5" }
//         ]
//     },
//     question_5: {
//         title: "ประวัติการตรวจภายในและมะเร็งปากมดลูก",
//         next: "question_6",
//         emergency: false,
//         question: "ประวัติการตรวจภายในและมะเร็งปากมดลูก",
//         type: 'Choice',
//         answer: [
//             { type: "c", title: "ไม่มี", next: "question_6" },
//             { type: "o", title: "อื่นๆ", next: "question_6", category: "description" }
//         ]
//     },
//     question_6: {
//         title: "การคุมกำเนิด",
//         next: "question_7",
//         emergency: false,
//         question: "การคุมกำเนิด",
//         type: 'Choice',
//         answer: [
//             { type: "c", title: "ไม่มี", next: "question_7" },
//             { type: "o", title: "อื่นๆ", next: "question_7", category: "description" }
//         ]
//     },
//     question_7: {
//         title: "การดูแลเบื้องต้น",
//         next: "question_8",
//         emergency: false,
//         question: "การดูแลเบื้องต้น",
//         type: 'Choice',
//         answer: [
//             { type: "c", title: "ไม่มี", next: "question_8" },
//             { type: "o", title: "อื่นๆ", next: "question_8", category: "description" }
//         ]
//     },
//     question_8: {
//         title: "ประวัติมะเร็งในครอบครัว",
//         next: "question_9",
//         emergency: false,
//         question: "ประวัติมะเร็งในครอบครัว",
//         type: 'MultiChoice',
//         answer: [
//             { type: "c", title: "มะเร็งเต้านม", next: "question_9" },
//             { type: "c", title: "มะเร็งรังไข่", next: "question_9" },
//             { type: "c", title: "มะเร็งลำไส้", next: "question_9" },
//             { type: "c", title: "มะเร็งปากมดลูก", next: "question_9" },
//             { type: "c", title: "มะเร็งมดลูก", next: "question_9" },
//             { type: "c", title: "ไม่แน่ใจ", next: "question_9" },
//             { type: "o", title: "อื่นๆ", next: "question_9", category: "description" }
//         ]
//     },
//     question_9: {
//         title: "ประวัติในอดีต",
//         next: "question_10",
//         emergency: false,
//         question: "ประวัติในอดีต",
//         type: 'MultiChoice',
//         answer: [
//             { type: "c", title: "โรคตับ", next: "question_10" },
//             { type: "c", title: "โรคเลือด", next: "question_10" },
//             { type: "c", title: "โรคติดเชื้อทางเพศสัมพันธ์", next: "question_10" },
//             { type: "c", title: "มีประวัติเลือดหยุดยากในครอบครัว", next: "question_10" },
//             { type: "c", title: "ใช้ยาต้านการแข็งตัวของเลือด (warfarin)", next: "question_10" },
//             { type: "c", title: "ใช้ยาต้านการจับตัวของเกร็ดเลือด (aspirin)", next: "question_10" },
//             { type: "c", title: "เบาหวาน", next: "question_10" },
//             { type: "c", title: "ความดัน", next: "question_10" },
//             { type: "c", title: "ไม่มี", next: "question_10" },
//         ]
//     },
//     question_10: {
//         title: "ลักษณะของประจำเดือนก่อนหน้า (ที่ปกติ)",
//         next: "question_11",
//         emergency: false,
//         question: "ลักษณะของประจำเดือนก่อนหน้า (ที่ปกติ)",
//         type: 'Choice',
//         answer: [
//             { type: "c", title: "มาปกติ", next: "question_11" },
//             { type: "c", title: "มามากกว่าปกติ", next: "end" },
//             { type: "c", title: "ประจำเดือนหมดแล้ว", next: "end" },
//             { type: "c", title: "ไม่แน่ใจ", next: "end" },
//         ]
//     },
//     question_11: {
//         title: "ปริมาณผ้าอนามัยที่ใช้ (แผ่นต่อวัน)",
//         next: "question_12",
//         emergency: false,
//         question: "ปริมาณ",
//         type: 'Choice',
//         answer: [
//             { type: "o", title: "จำนวนผ้าอนามัยที่ใช้ (แผ่นต่อวัน)", next: "question_12", category: "quantity" }
//         ]
//     },
//     question_12: {
//         title: "ระยะเวลาประจำเดือน",
//         next: "question_13",
//         emergency: false,
//         question: "ระยะเวลาประจำเดือน",
//         type: 'Choice',
//         answer: [
//             { type: "T", title: "วันเดือนปี", next: "question_13" }
//         ]
//     },
//     question_13: {
//         title: "ระยะห่างระหว่างรอบเดือน (วัน)",
//         next: "question_14",
//         emergency: false,
//         question: "ระยะห่างระหว่างรอบเดือน",
//         type: 'Choice',
//         answer: [
//             { type: "o", title: "จำนวนวัน", next: "question_14", category: "quantity" }
//         ]
//     },
//     question_14: {
//         title: "ประจำเดือนล่าสุด",
//         next: "end",
//         emergency: false,
//         question: "ประจำเดือนล่าสุด",
//         type: 'Choice',
//         answer: [
//             { type: "T", title: "วว/ดด/ปปปป", next: "end" }
//         ]
//     }
// },

//มึนหัว
// nauseaQuestions: {
//     question_1: {
//         title: "test",
//         next: 52,
//         emergency: false,
//         question: "test",
//         type: 'Choice',
//         answer: [
//             { type: "T", title: "วว/ดด/ปปปป", next: "end" }
//         ]
//     }


// }

export default questionSource 