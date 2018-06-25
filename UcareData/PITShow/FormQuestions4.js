//Question type: Choice, MultiChoice
//Answer type: 
//- E (Emergency)
//- U (Urgency)
//- c (Choice)
//- o (Other) => user input
//- T (Time) => Time, วว/ดด/ปป, วันเดือน


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
            { type: "c", title: "เป็นลม", next: 71, sex: "MF" },
            { type: "c", title: "ปัสสาวะแสบขัด", next: 82, sex: "MF" },
            { type: "c", title: "ปัสสาวะมาก", next: 87, sex: "MF" },
            { type: "c", title: "ปัสสาวะเป็นเลือด", next: 92, sex: "MF" },
            { type: "c", title: "ปวดหัว", next: 97, sex: "MF" },
            { type: "c", title: "ปวดเมื่อยกล้ามเนื้อ", next: 119, sex: "MF" },
            { type: "c", title: "ปวดท้องน้อย/ปวดประจำเดือน", next: 124, sex: "F" },
            { type: "c", title: "ปวดท้อง", next: "stomachAcheQuestions", sex: "MF" },
            { type: "c", title: "ปวดคอ", next: 138, sex: "MF" },
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
                { type: "c", title: "มีเสมหะข้นและมีกลิ่นเหม็น", question: "อาการร่วม" },
                { type: "c", title: "เบื่ออาหาร/น้ำหนักลด", question: "อาการร่วม" },
                { type: "c", title: "ไข้", question: "อาการร่วม" },
                { type: "c", title: "ปวดข้อ", question: "อาการร่วม"},
                { type: "c", title: "ผมร่วง", question: "อาการร่วม"},
                { type: "c", title: "ผื่นแพ้แสง", question: "อาการร่วม"},
                { type: "c", title: "ปัสสาวะเป็นเลือด", question: "อาการร่วม" },
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
                { type: "c", title: "มีเลือดออกง่าย", question: "ประวัติในอดีต"},
                { type: "c", title: "ประวัติโรคเลือด", question: "ประวัติในอดีต"},
                { type: "c", title: "เคยเป็นวัณโรคมาก่อน", question: "ประวัติในอดีต"},
                { type: "c", title: "มะเร็งปอดในครอบครัว", question: "ประวัติในอดีต"},
                { type: "c", title: "ได้รับบาดเจ็บบริเวณทรวงอก", question: "ประวัติในอดีต" },
                { type: "c", title: "ทานยาแก้ปวดกล้ามเนื้อ/ปวดข้อ", question: "ประวัติในอดีต"},
                { type: "c", title: "ใช้ยาต้านการแข็งตัวของเลือด (warfarin)", question: "ประวัติในอดีต" },
                { type: "c", title: "ใช้ยาต้านการจับตัวของเกร็ดเลือด (aspirin)", question: "ประวัติในอดีต" },
                { type: "c", title: "เคยส่องกล้องในทางเดินหายใจ", question: "ประวัติในอดีต" },
                { type: "F", title: "ใช้ยาคุมกำเนิด", question: "ประวัติในอดีต"},
                { type: "c", title: "ไม่มี", question: "ประวัติในอดีต" },

            ]
        }
    }
    ,
    //ไอ
    coughQuestions: {
        question_1: {
            title: "อาการฉุกเฉิน",
            next: "question_2",
            emergency: true,
            question: "มีอาการเหล่านี้หรือไม่",
            type: 'MultiChoice',
            answer: [
                { type: "E", title: "หายใจเร็วขึ้น", next: "end" },
                { type: "E", title: "สำลัก ", next: "end" },
                { type: "E", title: "ตัวเขียว/ปากเขียว ", next: "end" },
                { type: "E", title: "แน่นหน้าอกเฉียบพลัน", next: "end" },
                { type: "c", title: "ไม่มี", next: "question_2" }
            ]
        },
        question_2: {
            title: "ระยะเวลาของอาการ",
            next: "question_3",
            emergency: false,
            question: "ระยะเวลาของอาการ",
            type: 'Choice',
            answer: [
                { type: "T", title: "time", next: "question_3" }
            ]
        },
        question_3: {
            title: "ลักษณะอาการไอ",
            next: "question_4",
            emergency: false,
            question: "ลักษณะอาการไอ",
            type: 'Choice',
            answer: [
                { type: "c", title: "ไอแห้ง", next: "question_4" },
                { type: "c", title: "ไอมีเสมหะ", next: "question_4" },
                { type: "c", title: "ไอเป็นชุด", next: "question_4" },
                { type: "c", title: "ไอหายใจเสียงหวีด", next: "question_4" },
                { type: "c", title: "ไอเสียงแหบ", next: "question_4" },
                { type: "c", title: "ไอมีเลือดปน", next: "question_4" },
                { type: "c", title: "ไม่แน่ใจ", next: "question_4" },
                { type: "o", title: "อื่นๆ", next: "question_4", category: "description" },
            ]
        },
        question_4: {
            title: "ความถี่ของอาการ",
            next: "question_5",
            emergency: false,
            question: "ความถี่ของอาการ",
            type: 'Choice',
            answer: [
                { type: "c", title: "บ่อยตลอดวัน", next: "question_5" },
                { type: "c", title: "ไอเป็นบางช่วง", next: "question_5" },
                { type: "c", title: "เป็นน้อยไม่ไอทุกวัน", next: "question_5" },
                { type: "c", title: "เป็นมากขึ้นช่วงกลางคืน/นอนราบ", next: "question_5" },
                { type: "o", title: "อื่นๆ", next: "question_5", category: "description" }
            ]
        },
        question_5: {
            title: "สิ่งที่กระตุ้นให้ไอ",
            next: "question_6",
            emergency: false,
            question: "สิ่งที่กระตุ้นให้ไอ",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "ฝุ่นควัน", next: "question_6" },
                { type: "c", title: "อากาศเย็น", next: "question_6" },
                { type: "c", title: "นอนราบแล้วไอ", next: "question_6" },
                { type: "c", title: "ไม่มี", next: "question_6" },
                { type: "c", title: "ไม่แน่ใจ", next: "question_6" },
                { type: "o", title: "อื่นๆ", next: "question_6", category: "description" },
            ]
        },
        question_6: {
            title: "อาการดีขึ้นจาก",
            next: "question_7",
            emergency: false,
            question: "อาการดีขึ้นจาก",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "ทานยาแล้วดีขึ้น", next: "question_7" },
                { type: "c", title: "การรักษาก่อนหน้า", next: "question_7" },
                { type: "c", title: "ทานยาแล้วอาการลดลง", next: "question_7" },
                { type: "c", title: "นั่งตัวตรงแล้วอาการลดลง", next: "question_7" },
                { type: "c", title: "อาการไม่ดีขึ้นเลย", next: "question_7" },
                { type: "o", title: "อื่นๆ", next: "question_7", category: "description" }
            ]
        },
        question_7: {
            title: "อาการร่วม",
            next: "question_8",
            emergency: false,
            question: "อาการร่วม",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "ไข้", next: "question_8" },
                { type: "c", title: "ปวดหู", next: "question_8" },
                { type: "c", title: "คัดจมูก เจ็บคอ", next: "question_8" },
                { type: "c", title: "เสียงแหบ", next: "question_8" },
                { type: "c", title: "น้ำมูกลงคอ", next: "question_8" },
                { type: "c", title: "เรอเปรี้ยว", next: "question_8" },
                { type: "c", title: "เสมหะขาวใส ", next: "question_8" },
                { type: "c", title: "เสมหะเขียวเหลือง", next: "question_8" },
                { type: "c", title: "เสมหะแดง/เลือดปน", next: "question_8" },
                { type: "c", title: "ปวดโพรงจมูก", next: "question_8" },
                { type: "c", title: "ปวดตามใบหน้า", next: "question_8" },
                { type: "c", title: "น้ำมูกนำมาก่อนไอ", next: "question_8" },
                { type: "c", title: "แสบร้อนหน้าอก", next: "question_8" },
                { type: "c", title: "เบื่ออาหาร/น้ำหนักลด", next: "question_8" },
                { type: "c", title: "ไม่มี", next: "question_8" },
                { type: "o", title: "อื่นๆ", next: "question_8", category: "description" }
            ]
        },
        question_8: {
            title: "ประวัติในอดีต",
            next: "end",
            emergency: false,
            question: "ประวัติในอดีต",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "โรคหอบหืด", next: "end" },
                { type: "c", title: "โรคถุงลมโป่งพอง", next: "end" },
                { type: "c", title: "มีประวัติภูมิแพ้ของตัวเอง/ครอบครัว", next: "end" },
                { type: "c", title: "ประวัติโรคกระเพาะ/กรดไหลย้อน", next: "end" },
                { type: "c", title: "ประวัติวัณโรคของตัวเอง/ครอบครัว", next: "end" },
                { type: "c", title: "กำลังทานยาลดความดัน ", next: "end" },
                { type: "c", title: "สูบบุหรี่", next: "end" },
                { type: "c", title: "หัวใจล้มเหลว", next: "end" },
                { type: "c", title: "ไม่มี", next: "end" }
            ]
        }
    }
    ,
    //อาเจียนเป็นเลือด
    vomitBloodQuestions: {
        question_1: {
            title: "ลักษณะเลือด",
            next: "question_2",
            emergency: false,
            question: "ลักษณะเลือด",
            type: 'Choice',
            answer: [
                { type: "c", title: "ลิ่มเลือดปนเศษอาหาร", next: "question_2" },
                { type: "c", title: "สีแดงสด", next: "question_2" },
                { type: "c", title: "สีโอวัลติน", next: "question_2" },
                { type: "c", title: "มีเลือดปนเล็กน้อย", next: "question_2" },
            ]
        },
        question_2: {
            title: "อาการฉุกเฉิน",
            next: "question_3",
            emergency: false,
            question: "มีอาการเหล่านี้ไหม",
            type: 'MultiChoice',
            answer: [
                { type: "E", title: "ลุกนั่งแล้วเวียนศีรษะ", next: "question_3" },
                { type: "E", title: "มีอาการซึม เรียกไม่ตื่น", next: "question_3" },
                { type: "E", title: "ปริมาณเลือดสดมากกว่า 2  แก้วน้ำ ", next: "question_3" },
                { type: "E", title: "อาเจียนเป็นเลือดและมีถ่ายเป็นเลือดร่วมด้วย ", next: "question_3" },
                { type: "c", title: "ไม่มี", next: "question_3" }
            ]
        },
        question_3: {
            title: "เคยอาเจียนเป็นเลือดมาก่อน",
            next: "question_4",
            emergency: false,
            question: "เคยอาเจียนเป็นเลือดมาก่อนหรือไม่",
            type: 'Choice',
            answer: [
                { type: "c", title: "ใช่", next: "question_4" },
                { type: "c", title: "ไม่ใช่", next: "question_4" },
            ]
        },
        question_4: {
            title: "ปริมาณเลือดที่ออก",
            next: "question_5",
            emergency: false,
            question: "ปริมาณเลือดที่ออก ", //*****สงสัย ขอรูป ?*******
            type: 'Choice',
            answer: [
                { type: "c", title: "1 แก้วน้ำ", next: "question_5" },
                { type: "c", title: "น้อยกว่า 1 แก้วน้ำ", next: "question_5" },
                { type: "c", title: "มากกว่า 1 แก้วน้ำ", next: "question_5" },
                { type: "c", title: "ไม่แน่ใจ", next: "question_5" }
            ]
        },
        question_5: {
            title: "อาการร่วม",
            next: "question_6",
            emergency: false,
            question: "อาการร่วม",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "ไข้", next: "question_6" },
                { type: "c", title: "ท้องโต", next: "question_6" },
                { type: "c", title: "ถ่ายดำ", next: "question_6" },
                { type: "c", title: "ปวดท้อง", next: "question_6" },
                { type: "c", title: "แน่นท้อง", next: "question_6" },
                { type: "c", title: "แสบร้อนหน้าอก", next: "question_6" },
                { type: "c", title: "คลื่นไส้/อาเจียน", next: "question_6" },
                { type: "c", title: "ตัวเหลือง/ตาเหลือง", next: "question_6" },
                { type: "c", title: "กลืนเจ็บ/กลืนลำบาก", next: "question_6" },
                { type: "c", title: "เบื่ออาหาร/น้ำหนักลด", next: "question_6" },
                { type: "c", title: "อาเจียนรุนแรงก่อนอาเจียนเป็นเลือด", next: "question_6" },
                { type: "c", title: "ไม่มี", next: "question_6" },
                { type: "o", title: "อื่นๆ", next: "question_6", category: "description" }
            ]
        },
        question_6: {
            title: "ประวัติในอดีต",
            next: "end",
            emergency: false,
            question: "เคยมีอาการในอดีตเหล่านี้หรือไม่",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "เป็นโรคตับ", next: "end" },
                { type: "c", title: "เคยเป็นโรคกระเพาะ", next: "end" },
                { type: "c", title: "เคยผ่าตัดหลอดเลือดใหญ่", next: "end" },
                { type: "c", title: "มีประวัติมะเร็งในครอบครัว", next: "end" },
                { type: "c", title: "ทานยาแก้ปวดกล้ามเนื้อ/ปวดข้อ ", next: "end" },
                { type: "c", title: "มีประวัติเลือดออกง่าย หยุดยาก", next: "end" },
                { type: "c", title: "ใช้ยาต้านการแข็งตัวของเลือด (warfarin)", next: "end" },
                { type: "c", title: "เป็นเส้นเลือดหลอดอาหารโป่งพอง", next: "end" },
                { type: "c", title: "ใช้ยาต้านการจับตัวของเกร็ดเลือด (aspirin)", next: "end" },
                { type: "c", title: "ไม่มี", next: "end" }
            ]
        }
    },
    //เหนื่อยง่าย
    fatigueQuestions: {
        question_1: {
            title: "ระยะเวลาของอาการที่เคยเป็นในอดีต",
            next: "question_2",
            emergency: false,
            question: "ระยะเวลาที่เป็นของอาการในอดีต",
            type: 'Choice',
            answer: [
                { type: "T", title: "time", next: "question_2" }
            ]
        },
        question_2: {
            title: "อาการฉุกเฉิน",
            next: "question_3",
            emergency: false,
            question: "มีอาการเหล่านี้ไหม",
            type: 'MultiChoice',
            answer: [
                { type: "E", title: "ซึมลง", next: "end" },
                { type: "E", title: "เกิดขึ้นทันทีทันใด", next: "end" },
                { type: "E", title: "ตัวเขียว/ปากเขียว", next: "end" },
                { type: "E", title: "หายใจเร็ว/หายใจไม่ออก", next: "end" },
                { type: "E", title: "มีประวัติสำลักสิ่งแปลกปลอม", next: "end" },
                { type: "c", title: "ไม่มี", next: "question_3" }
            ]
        },
        question_3: {
            title: "ลักษณะอาการ",
            next: "question_4",
            emergency: false,
            question: "ลักษณะอาการ",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "หายใจไม่โล่ง/ไม่อิ่ม", next: "question_4" },
                { type: "c", title: "หายใจถี่มากขึ้น", next: "question_4" },
                { type: "c", title: "ต้องใช้แรงในการหายใจมากขึ้น", next: "question_4" },
                { type: "c", title: "ไม่แน่ใจ", next: "question_4" },
                { type: "o", title: "อื่นๆ", next: "question_4", category: "description" }
            ]
        },
        question_4: {
            title: "ปัจจัยที่ทำให้ดีขึ้น",
            next: "question_5",
            emergency: false,
            question: "ปัจจัยที่ทำให้ดีขึ้น",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "พ่นยา", next: "question_5" },
                { type: "c", title: "พักผ่อน", next: "question_5" },
                { type: "c", title: "ลุกขึ้นนั่ง", next: "question_5" },
                { type: "c", title: "ไม่มี", next: "question_5" }
            ]
        },
        question_5: {
            title: "ปัจจัยที่ทำให้อาการแย่ลง",
            next: "question_6",
            emergency: false,
            question: "สื่งที่ทำให้แย่ลง",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "สูบบุหรี่", next: "question_6" },
                { type: "c", title: "นอนราบ", next: "question_6" },
                { type: "c", title: "ฝุ่นละออง", next: "question_6" },
                { type: "c", title: "นั่ง", next: "question_6" },
                { type: "c", title: "หายใจเข้าลึกๆแล้วเจ็บ", next: "question_6" },
                { type: "c", title: "ไม่มี", next: "question_6" }
            ]
        },
        question_6: {
            title: "อาการร่วม",
            next: "question_7",
            emergency: false,
            question: "อาการร่วม",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "ไข้", next: "question_7" },
                { type: "c", title: "ไอ", next: "question_7" },
                { type: "c", title: "ใจสั่น", next: "question_7" },
                { type: "c", title: "มือสั่น", next: "question_7" },
                { type: "c", title: "มีเสมหะ", next: "question_7" },
                { type: "c", title: "เจ็บหน้าอก", next: "question_7" },
                { type: "c", title: "ท้องบวมโต", next: "question_7" },
                { type: "c", title: "ปัสสาวะบ่อย", next: "question_7" },
                { type: "c", title: "ดื่มน้ำมากขึ้น", next: "question_7" },
                { type: "c", title: "ขี้ร้อนผิดปกติ", next: "question_7" },
                { type: "c", title: "ปัสสาวะลดลง", next: "question_7" },
                { type: "c", title: "มีตุ่มน้ำขึ้นตามผิวหนัง", next: "question_7" },
                { type: "c", title: "ตัวเหลือง/ตาเหลือง", next: "question_7" },
                { type: "c", title: "เบื่ออาหาร/น้ำหนักลด", next: "question_7" },
                { type: "c", title: "บวมที่ขา/แขน/ตัว/หนังตา", next: "question_7" },
                { type: "c", title: "ไม่มี", next: "question_7" },
                { type: "o", title: "อื่นๆ", next: "question_7", category: "description" }
            ]
        },
        question_7: {
            title: "โรคประจำตัว",
            next: "question_8",
            emergency: false,
            question: "โรคประจำตัว",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "ภูมิแพ้", next: "question_8" },
                { type: "c", title: "โรคหืด/ถุงลมโป่งพอง", next: "question_8" },
                { type: "c", title: "โรคเลือด", next: "question_8" },
                { type: "c", title: "เบาหวาน", next: "question_8" },
                { type: "c", title: "ไทรอยด์", next: "question_8" },
                { type: "c", title: "คนในครอบครัวเสียชีวิตกะทันหัน ", next: "question_8" },
                { type: "c", title: "ไม่มี", next: "question_8" },
                { type: "o", title: "อื่นๆ", next: "question_8", category: "description" }
            ]
        },
        question_8: {
            title: "ประวัติในอดีต",
            next: "end",
            emergency: false,
            question: "ประวัติในอดีต",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "นอนอยู่กับที่นานๆ", next: "end" },
                { type: "c", title: "เคยได้รับบาดเจ็บบริเวณทรวงอก", next: "end" },
                { type: "c", title: "ไม่มี", next: "end" },
            ]
        }
    },
    //แสบร้อนกลางอก
    heartBurnQuestions: {
        question_1: {
            title: "อาการร่วม",
            next: "end",
            emergency: false,
            question: "อาการร่วม",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "อาเจียนหรือถ่ายเป็นเลือด", next: "end" },
                { type: "c", title: "น้ำหนักลดโดยไม่ทราบสาเหตุ", next: "end" },
                { type: "c", title: "กลืนลำบาก", next: "end" },
                { type: "c", title: "อาเจียนต่อเนื่อง", next: "end" },
                { type: "c", title: "จุกแน่นบริเวณลำคอ", next: "end" },
                { type: "c", title: "เรอเปรี้ยว", next: "end" },
                { type: "c", title: "เสียงแหบ", next: "end" },
                { type: "c", title: "ไอแห้ง", next: "end" },
                { type: "c", title: "มีอาการเจ็บหน้าอก", next: "end" },
                { type: "o", title: "อื่นๆ", next: "end", category: "description" },
            ]
        }
    },
    //เวียนหัวบ้านหมุน
    vertigoQuestions: {
        question_1: {
            title: "ระยะเวลาของอาการบ้านหมุน",
            next: "question_2",
            emergency: false,
            question: "ระยะเวลาที่มีเฉพาะอาการบ้านหมุน (ไม่รวมมึนหัว)",
            type: 'Choice',
            answer: [
                { type: "T", title: "time", next: "question_2" },
            ]
        },
        question_2: {
            title: "อาการฉุกเฉิน",
            next: "question_3",
            emergency: true,
            question: "มีอาการเหล่านี้ไหม",
            type: 'MultiChoice',
            answer: [
                { type: "E", title: "ปวดศรีษะรุนแรง", next: "end" },
                { type: "E", title: "คลื่นไส้/อาเจียน", next: "end" },
                { type: "E", title: "อาการเกิดขึ้นทันที", next: "end" },
                { type: "c", title: "ไม่มี", next: "question_3" }
            ]
        },
        question_3: {
            title: "มีช่วงเวลาที่อาการหายดี",
            next: "question_4",
            emergency: false,
            question: "มีช่วงเวลาที่อาการหายดี",
            type: 'Choice',
            answer: [
                { type: "c", title: "ใช่", next: "question_4" },
                { type: "c", title: "ไม่ใช่", next: "question_4" }
            ]
        },
        question_4: {
            title: "ความรุนแรง",
            next: "question_5",
            emergency: false,
            question: "ความรุนแรง",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "กระทบงานที่ทำ", next: "question_5" },
                { type: "c", title: "กระทบกิจวัตรประจำวัน", next: "question_5" },
                { type: "c", title: "อาการจะรุนแรงช่วงหนึ่งแล้วค่อยๆทุเลาลง", next: "question_5" },
                { type: "c", title: "อาการเป็นค้างอยู่นาน", next: "question_5" },
                { type: "o", title: "อื่นๆ", next: "question_5", category: "description" }
            ]
        },
        question_5: {
            title: "อาการร่วม",
            next: "question_6",
            emergency: false,
            question: "อาการร่วม",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "คลื่นไส้/อาเจียน", next: "question_6" },
                { type: "c", title: "ไม่สามารถทรงตัวได้", next: "question_6" },
                { type: "c", title: "อ่อนเพลีย", next: "question_6" },
                { type: "c", title: "เหงื่อออก", next: "question_6" },
                { type: "c", title: "สูญเสียการได้ยิน", next: "question_6" },
                { type: "c", title: "ปวดหู", next: "question_6" },
                { type: "c", title: "หูอื้อ", next: "question_6" },
                { type: "c", title: "น้ำไหลออกจากหู", next: "question_6" },
                { type: "c", title: "มีเสียงดังในหู", next: "question_6" },
                { type: "c", title: "ปวดหัว", next: "question_6" },
                { type: "c", title: "แขนขาอ่อนแรง", next: "question_6" },
                { type: "c", title: "ชา", next: "question_6" },
                { type: "c", title: "กล้ามเนื้อใบหน้าอ่อนแรง", next: "question_6" },
                { type: "c", title: "หน้ามืดหรือหมดสติ", next: "question_6" },
                { type: "c", title: "เป็นลม", next: "question_6" },
                { type: "c", title: "ไม่มี", next: "question_6" },
                { type: "o", title: "อื่นๆ", next: "question_6", category: "description" }
            ]
        },
        question_6: {
            title: "ปัจจัยที่ทำให้แย่ลง",
            next: "end",
            emergency: false,
            question: "อาการร่วม",
            type: 'สื่งที่ทำให้แย่ลง',
            answer: [
                { type: "c", title: "เมื่อเปลี่ยนท่าทาง", next: "end" },
                { type: "c", title: "ก้มหน้า", next: "end" },
                { type: "c", title: "เงยหน้า", next: "end" },
                { type: "c", title: "ล้มตัวลงนอน", next: "end" },
                { type: "c", title: "หันหน้าไปด้านใดด้านหนึ่ง", next: "end" },
                { type: "c", title: "ไอ/จาม/เบ่ง", next: "end" },
                { type: "c", title: "ขึ้นเครื่องบิน", next: "end" },
                { type: "c", title: "ทานอาหารเค็ม", next: "end" },
                { type: "c", title: "เปลี่ยนแว่นตาใหม่", next: "end" },
                { type: "c", title: "ไม่มี", next: "end" },
                { type: "o", title: "อื่นๆ", next: "end", category: "description" }
            ]
        }
    },
    //เลือดออกผิดปกติ
    bleedingQuestions: {
        question_1: {
            title: "ระยะเวลาของอาการ",
            next: "question_2",
            emergency: false,
            question: "ระยะเวลาที่มีอาการ",
            type: 'Choice',
            answer: [
                { type: "T", title: "time", next: "question_2" }
            ]
        },
        question_2: {
            title: "อาการฉุกเฉิน",
            next: "question_3",
            emergency: true,
            question: "มีอาการเหล่านี้ร่วมด้วยหรือไม่",
            type: 'MultiChoice',
            answer: [
                { type: "E", title: "ซึมลง", next: "end" },
                { type: "E", title: "เลือดไหลออกไม่หยุด", next: "end" },
                { type: "E", title: "หน้ามืดวิงเวียนโดยเฉพาะตอนลุกนั่ง", next: "end" },
                { type: "c", title: "ไม่มี", next: "question_3" }
            ]
        },
        question_3: {
            title: "กดห้ามเลือดแล้วหยุดหรือไม่",
            next: "question_4",
            emergency: false,
            question: "กดห้ามเลือดแล้วหยุดไหม",
            type: 'Choice',
            answer: [
                { type: "c", title: "หยุด", next: "question_4" },
                { type: "c", title: "ไม่หยุด", next: "question_4" },
                { type: "c", title: "กดห้ามไม่ได้", next: "question_4" }
            ]
        },
        question_4: {
            title: "อาการร่วม",
            next: "question_5",
            emergency: false,
            question: "อาการร่วม",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "ไข้", next: "question_5" },
                { type: "c", title: "เป็นหวัดบ่อยๆ", next: "question_5" },
                { type: "c", title: "มีจุดเลือดออกเล็กๆ", next: "question_5" },
                { type: "c", title: "มีจ้ำเลือดผิดปกติ", next: "question_5" },
                { type: "c", title: "เลือดออกตามไรฟันร่วมด้วย", next: "question_5" },
                { type: "c", title: "อุจจาระเป็นเลือดร่วมด้วย", next: "question_5" },
                { type: "c", title: "ปัสสาวะเป็นเลือดร่วมด้วย", next: "question_5" },
                { type: "c", title: "เคยมีเลือดออกมาก่อน", next: "question_5" },
                { type: "c", title: "ไม่มี", next: "question_3" },
                { type: "o", title: "อื่นๆ", next: "question_5", category: "description" }
            ]
        },
        question_5: {
            title: "ประวัติในอดีต",
            next: "end",
            emergency: false,
            question: "ประวัติในอดีต",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "เคยเป็นโรคตับ", next: "end" },
                { type: "c", title: "เคยเป็นโรคไต", next: "end" },
                { type: "c", title: "มีโรคหัวใจอยู่เดิม", next: "end" },
                { type: "c", title: "ทานยาแก้ปวดกล้ามเนื้อ/ปวดข้อ", next: "end" },
                { type: "c", title: "มีประวัติเลือดหยุดยากในครอบครัว", next: "end" },
                { type: "c", title: "บริเวณที่พักอาศัยมีคนเป็นไข้เลือดออก", next: "end" },
                { type: "c", title: "ใช้ยาต้านการแข็งตัวของเลือด (warfarin)", next: "end" },
                { type: "c", title: "ใช้ยาต้านการจับตัวของเกร็ดเลือด (aspirin)", next: "end" },
                { type: "c", title: "ไม่มี", next: "end" },
            ]
        }
    },
    //เลือดออกทางช่องคลอด
    vaginalBleedingQuestions: {
        question_1: {
            title: "ลักษณะของเลือดที่ออก",
            next: "question_2",
            emergency: false,
            question: "ลักษณะของเลือดที่ออก",
            type: 'Choice',
            answer: [
                { type: "c", title: "ประจำเดือนมามาก", next: "question_2" },
                { type: "c", title: "ประจำเดือนมานาน", next: "question_2" },
                { type: "c", title: "เลือดออกระหว่างรอบเดือน", next: "question_2" },
                { type: "c", title: "เลือดออกระหว่างตั้งครรภ์", next: "question_2" },
                { type: "c", title: "เลือดออกหลังมีเพศสัมพันธ์", next: "question_2" },
                { type: "c", title: "เลือดออกหลังหยุดมีประจำเดือนมามากกว่า 1 ปี", next: "question_2" },
                { type: "c", title: "ไม่แน่ใจ", next: "question_2" }
            ]
        },
        question_2: {
            title: "ระยะเวลาของอาการ",
            next: "question_3",
            emergency: false,
            question: "ระยะเวลาที่มีอาการ",
            type: 'Choice',
            answer: [
                { type: "T", title: "time", next: "question_3" },
            ]
        },
        question_3: {
            title: "อาการร่วม",
            next: "question_4",
            emergency: true,
            question: "มีอาการเหล่านี้ไหม",
            type: 'MultiChoice',
            answer: [
                { type: "U", title: "ไข้", next: "end" },
                { type: "U", title: "ปวดประจำเดือน", next: "end" },
                { type: "U", title: "ปวดท้อง", next: "end" },
                { type: "U", title: "ตกขาว", next: "end" },
                { type: "U", title: "เจ็บเวลามีเพศสัมพันธ์ ", next: "end" },
                { type: "U", title: "เลือดออกหลังมีเพศสัมพันธ์ ", next: "end" },
                { type: "U", title: "ตึงคัดเต้านม", next: "end" },
                { type: "U", title: "คลำได้ก้อน", next: "end" },
                { type: "U", title: "ท้องโตขึ้น", next: "end" },
                { type: "U", title: "เบื่ออาหาร", next: "end" },
                { type: "U", title: "อุจจาระหรือปัสสาวะผิดปกติ", next: "end" },
                { type: "U", title: "น้ำหนักลด", next: "end" },
                { type: "U", title: "คลื่นไส้/อาเจียน", next: "end" },
                { type: "c", title: "ไม่มี", next: "question_4" }
            ]
        },
        question_4: {
            title: "เคยมีเลือดออกมาก่อน",
            next: "question_5",
            emergency: false,
            question: "เคยมีเลือดออกมาก่อนไหม",
            type: 'Choice',
            answer: [
                { type: "c", title: "เคย", next: "question_5" },
                { type: "c", title: "ไม่เคย", next: "question_5" }
            ]
        },
        question_5: {
            title: "ประวัติการตรวจภายในและมะเร็งปากมดลูก",
            next: "question_6",
            emergency: false,
            question: "ประวัติการตรวจภายในและมะเร็งปากมดลูก",
            type: 'Choice',
            answer: [
                { type: "c", title: "ไม่มี", next: "question_6" },
                { type: "o", title: "อื่นๆ", next: "question_6", category: "description" }
            ]
        },
        question_6: {
            title: "การคุมกำเนิด",
            next: "question_7",
            emergency: false,
            question: "การคุมกำเนิด",
            type: 'Choice',
            answer: [
                { type: "c", title: "ไม่มี", next: "question_7" },
                { type: "o", title: "อื่นๆ", next: "question_7", category: "description" }
            ]
        },
        question_7: {
            title: "การดูแลเบื้องต้น",
            next: "question_8",
            emergency: false,
            question: "การดูแลเบื้องต้น",
            type: 'Choice',
            answer: [
                { type: "c", title: "ไม่มี", next: "question_8" },
                { type: "o", title: "อื่นๆ", next: "question_8", category: "description" }
            ]
        },
        question_8: {
            title: "ประวัติมะเร็งในครอบครัว",
            next: "question_9",
            emergency: false,
            question: "ประวัติมะเร็งในครอบครัว",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "มะเร็งเต้านม", next: "question_9" },
                { type: "c", title: "มะเร็งรังไข่", next: "question_9" },
                { type: "c", title: "มะเร็งลำไส้", next: "question_9" },
                { type: "c", title: "มะเร็งปากมดลูก", next: "question_9" },
                { type: "c", title: "มะเร็งมดลูก", next: "question_9" },
                { type: "c", title: "ไม่แน่ใจ", next: "question_9" },
                { type: "o", title: "อื่นๆ", next: "question_9", category: "description" }
            ]
        },
        question_9: {
            title: "ประวัติในอดีต",
            next: "question_10",
            emergency: false,
            question: "ประวัติในอดีต",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "โรคตับ", next: "question_10" },
                { type: "c", title: "โรคเลือด", next: "question_10" },
                { type: "c", title: "โรคติดเชื้อทางเพศสัมพันธ์", next: "question_10" },
                { type: "c", title: "มีประวัติเลือดหยุดยากในครอบครัว", next: "question_10" },
                { type: "c", title: "ใช้ยาต้านการแข็งตัวของเลือด (warfarin)", next: "question_10" },
                { type: "c", title: "ใช้ยาต้านการจับตัวของเกร็ดเลือด (aspirin)", next: "question_10" },
                { type: "c", title: "เบาหวาน", next: "question_10" },
                { type: "c", title: "ความดัน", next: "question_10" },
                { type: "c", title: "ไม่มี", next: "question_10" },
            ]
        },
        question_10: {
            title: "ลักษณะของประจำเดือนก่อนหน้า (ที่ปกติ)",
            next: "question_11",
            emergency: false,
            question: "ลักษณะของประจำเดือนก่อนหน้า (ที่ปกติ)",
            type: 'Choice',
            answer: [
                { type: "c", title: "มาปกติ", next: "question_11" },
                { type: "c", title: "มามากกว่าปกติ", next: "end" },
                { type: "c", title: "ประจำเดือนหมดแล้ว", next: "end" },
                { type: "c", title: "ไม่แน่ใจ", next: "end" },
            ]
        },
        question_11: {
            title: "ปริมาณผ้าอนามัยที่ใช้ (แผ่นต่อวัน)",
            next: "question_12",
            emergency: false,
            question: "ปริมาณ",
            type: 'Choice',
            answer: [
                { type: "o", title: "จำนวนผ้าอนามัยที่ใช้ (แผ่นต่อวัน)", next: "question_12", category: "quantity" }
            ]
        },
        question_12: {
            title: "ระยะเวลาประจำเดือน",
            next: "question_13",
            emergency: false,
            question: "ระยะเวลาประจำเดือน",
            type: 'Choice',
            answer: [
                { type: "T", title: "วันเดือนปี", next: "question_13" }
            ]
        },
        question_13: {
            title: "ระยะห่างระหว่างรอบเดือน (วัน)",
            next: "question_14",
            emergency: false,
            question: "ระยะห่างระหว่างรอบเดือน",
            type: 'Choice',
            answer: [
                { type: "o", title: "จำนวนวัน", next: "question_14", category: "quantity" }
            ]
        },
        question_14: {
            title: "ประจำเดือนล่าสุด",
            next: "end",
            emergency: false,
            question: "ประจำเดือนล่าสุด",
            type: 'Choice',
            answer: [
                { type: "T", title: "วว/ดด/ปปปป", next: "end" }
            ]
        }
    },

    //ลืมทานยาคุม
    birthControlPillQuestions: {
        question_1: {
            title: "ชื่อยาคุม",
            next: "question_2",
            emergency: false,
            question: "ชื่อยาคุม",
            type: 'Choice',
            answer: [
                { type: "o", title: "ชื่อยาคุม", next: "question_2", category: "description" }
            ]
        },
        question_2: {
            title: "ชนิดที่ทาน",
            next: "question_3",
            emergency: false,
            question: "ชนิดที่ทาน",
            type: 'Choice',
            answer: [
                { type: "c", title: "21 เม็ด", next: "question_3" },
                { type: "c", title: "28 เม็ด", next: "question_3" }
            ]
        },
        question_3: {
            title: "จำนวนเม็ดที่ลืมทาน",
            next: "question_4",
            emergency: false,
            question: "จำนวนเม็ดที่ลืมทาน",
            type: 'Choice',
            answer: [
                { type: "o", title: "จำนวนเม็ดที่ลืมทาน", next: "question_4", category: "quantity" }
            ]
        },
        question_4: {
            title: "ลืมทานในแถวที่",
            next: "question_5",
            emergency: false,
            question: "ลืมทานในแถวที่",
            type: 'Choice',
            answer: [
                { type: "c", title: "1", next: "question_5" },
                { type: "c", title: "2", next: "question_5" },
                { type: "c", title: "3", next: "question_5" },
                { type: "c", title: "4", next: "question_5" }
            ]
        },
        question_5: {
            title: "มีเพศสัมพันธ์ล่าสุดกี่วันก่อน",
            next: "question_6",
            emergency: false,
            question: "มีเพศสัมพันธ์ล่าสุดกี่วันก่อน",
            type: 'Choice',
            answer: [
                { type: "T", title: "วันเดือน", next: "question_6" }
            ]
        },
        question_6: {
            title: "เวลาปกติที่ทานยาคุม",
            next: "question_7",
            emergency: false,
            question: "เวลาปกติที่ทานยาคุม",
            type: 'Choice',
            answer: [
                { type: "T", title: "เวลา", next: "question_7" },
                { type: "c", title: "ไม่เป็นเวลา", next: "question_7" }
            ]
        },
        question_7: {
            title: "ลืมทานยาคุมบ่อยเพียงใด",
            next: "question_8",
            emergency: false,
            question: "ลืมทานยาคุมบ่อยเพียงใด",
            type: 'Choice',
            answer: [
                { type: "c", title: "ครั้งแรก", next: "question_8" },
                { type: "c", title: "มีบ้าง", next: "question_8" },
                { type: "c", title: "เป็นประจำ", next: "question_8" }
            ]
        },
        question_8: {
            title: "การคุมกำเนิดร่วม",
            next: "end",
            emergency: false,
            question: "การคุมกำเนิดร่วม",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "หลั่งนอก", next: "end" },
                { type: "c", title: "ยาคุมฉุกเฉิน", next: "end" },
                { type: "c", title: "ถุงยางอนามัย", next: "end" },
                { type: "c", title: "ไม่มี", next: "end" }
            ]
        }
    },
    //มึนหัวไม่มีบ้านหมุน 
    noVertigoQuestions: {
        question_1: {
            title: "มีกิจกรรมเหล่านี้",
            next: "question_2",
            emergency: false,
            question: "มีกิจกรรมเหล่านี้หรือไม่",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "อดนอน", next: "question_2" },
                { type: "c", title: "อ่อนเพลีย", next: "question_2" },
                { type: "c", title: "เครียด/กังวล", next: "question_2" },
                { type: "c", title: "ซีด", next: "question_2" },
                { type: "c", title: "ไข้", next: "question_2" },
                { type: "c", title: "เบื่ออาหาร", next: "question_2" },
                { type: "c", title: "ซึมเศร้า", next: "question_2" },
                { type: "c", title: "ตั้งครรภ์", next: "question_2" },
                { type: "c", title: "เหนื่อย", next: "question_2" },
                { type: "c", title: "อยู่ในสภาวะช็อก", next: "question_2" },
                { type: "c", title: "ขาดการออกกำลังกาย", next: "question_2" },
                { type: "c", title: "ไม่มี", next: "question_2" }
            ]
        },
        question_2: {
            title: "ภาวะที่เกี่ยวข้อง",
            next: "end",
            emergency: false,
            question: "ภาวะที่เกี่ยวข้อง",
            type: 'Choice',
            answer: [
                { type: "c", title: "โลหิตจาง", next: "end" },
                { type: "c", title: "น้ำตาลในเลือดต่ำ", next: "end" },
                { type: "c", title: "ความดันโลหิตต่ำ", next: "end" },
                { type: "c", title: "ไม่มี", next: "end" },
                { type: "o", title: "อื่นๆ", next: "end", category: "description" }
            ]
        }
    },
    //ผื่นหรือตุ่มผิวหนัง
    rashQuestions: {
        question_1: {
            title: "ระยะเวลาที่เป็น",
            next: "question_2",
            emergency: false,
            question: "ระยะเวลาที่เป็น",
            type: 'Choice',
            answer: [
                { type: "T", title: "time", next: "question_2" }
            ]
        },
        question_2: {
            title: "อาการฉุกเฉิน",
            next: "question_3",
            emergency: true,
            question: "มีอาการเหล่านี้ไหม",
            type: 'MultiChoice',
            answer: [
                { type: "E", title: "หน้ามืด", next: "end" },
                { type: "E", title: "หอบเหนื่อย", next: "end" },
                { type: "E", title: "ปากบวมหรือหน้าบวม", next: "end" },
                { type: "U", title: "หายใจดังวี๊ด", next: "end" },
                { type: "U", title: "อาเจียน", next: "end" },
                { type: "c", title: "ไม่มี", next: "question_3" }
            ]
        },
        question_3: { ///////////////////ถ่ายรูป
            title: "ลักษณะของผื่น",
            next: "question_4",
            emergency: false,
            question: "ลักษณะของผื่น",
            type: 'Choice',
            answer: [
                { type: "P", title: "ถ่ายรูป", next: "question_4" }
            ]
        },
        question_4: {
            title: "ตำแหน่งของผื่น",
            next: "question_5",
            emergency: false,
            question: "ตำแหน่งของผื่น",
            type: 'Choice',
            answer: [
                { type: "o", title: "โปรดระบุ", next: "question_5", category: "description" }
            ]
        },
        question_5: {
            title: "ปัจจัยที่ทำให้เกิดผื่น",
            next: "question_6",
            emergency: false,
            question: "ปัจจัยที่ทำให้เกิดผื่น",
            type: 'Choice',
            answer: [
                { type: "c", title: "โดนแดดแล้วเป็นมากขึ้น", next: "question_6" },
                { type: "c", title: "สัมผัสสารเคมี", next: "question_6" },
                { type: "c", title: "กินยาบางชนิด", next: "question_6" },
                { type: "o", title: "อื่นๆ", next: "question_6", category: "description" }
            ]
        },
        question_6: {
            title: "อาการร่วม",
            next: "question_7",
            emergency: false,
            question: "อาการร่วม",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "ไข้", next: "question_7" },
                { type: "c", title: "ผื่น", next: "question_7" },
                { type: "c", title: "คันหรือปวด", next: "question_7" },
                { type: "c", title: "ปวดข้อ	มีคนอื่นในบ้านเป็น", next: "question_7" },
                { type: "c", title: "มีประวัติโรคผิวหนังในครอบครัว", next: "question_7" },
                { type: "c", title: "ไม่มี", next: "question_7" },
                { type: "o", title: "อื่นๆ", next: "question_7", category: "description" }
            ]
        },
        question_7: {
            title: "การรักษาก่อนหน้า",
            next: "end",
            emergency: false,
            question: "การรักษาก่อนหน้า",
            type: 'Choice',
            answer: [
                { type: "c", title: "ไม่มี", next: "end" },
                { type: "o", title: "อื่นๆ", next: "end" }
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
                { type: "T", title: "วว/ดด/ปปปป", next: "end" }
            ]
        }
    },
    stomachAcheQuestions: {
        question_1: {
            title: "test",
            next: 52,
            emergency: false,
            question: "test",
            type: 'Choice',
            answer: [
                { type: "V", title: "VAS score", next: "end" }
            ]
        }
    }

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