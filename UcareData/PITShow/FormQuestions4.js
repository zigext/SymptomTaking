//Question type: Choice, MultiChoice
//Answer type: 
//- E (Emergency)
//- U (Urgency)
//- c (Choice)
//- o (Other) => user input, ปุ่มอื่นๆ
//- T (Time) => ระยะเวลา, วว/ดด/ปป (DatePicker) , เวลา(TimePicker), วันเดือน (Picker) , วันเดือนปี (Picker), เป็นช่วงๆ(frequency)
//- PC (Picture choice)
//- P (Picture) => ถ่ายรูป
//- V (Vas score)


//1 question per page

const questionSource = {
    chiefQuestion: {
        title: "อาการสำคัญ",
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
            { type: "c", title: "ปวดข้อ", next: "jointPainQuestions", sex: "MF" },
            { type: "c", title: "บวม", next: "swollenQuestions", sex: "MF" },
            { type: "c", title: "ถ่ายเป็นเลือดสด", next: "bloodyDiarrheaQuestions", sex: "MF" },
            { type: "c", title: "ท้องเสีย", next: "diarrheaQuestions", sex: "MF" },
            { type: "c", title: "ตาแดง", next: "redEyesQuestions", sex: "MF" },
            { type: "c", title: "ตัวเหลือง/ตาเหลือง", next: "yellowSkinEyesQuestions", sex: "MF" },
            { type: "c", title: "ตกขาว", next: "leucorrhoeaQuestions", sex: "F" },
            { type: "c", title: "ซีด", next: "anemiaQuestions", sex: "MF" },
            { type: "c", title: "ชัก", next: "seizuresQuestions", sex: "MF" },
            { type: "c", title: "ใจสั่น", next: "palpitationQuestions", sex: "MF" },
            { type: "c", title: "เจ็บแน่นหน้าอก", next: "chestBurnQuestions", sex: "MF" },
            { type: "c", title: "เจ็บคอ", next: "soreThroatQuestions", sex: "MF" },
            { type: "c", title: "จุกเสียดใต้ลิ้นปี่", next: "epigastricQuestions", sex: "MF" },
            { type: "c", title: "คลื่นไส้ อาเจียน", next: "nauseaQuestions", sex: "MF" },
            { type: "c", title: "ไข้", next: "coldQuestions", sex: "MF" },
            { type: "c", title: "นอนหลับผิดปกติ", next: "insomniaQuestions", sex: "MF" },
            { type: "c", title: "ก้อนที่ท้องน้อย", next: "lowerAbsTumorQuestions", sex: "F" },
            { type: "c", title: "ก้อนที่คอ", next: "neckTumorQuestions", sex: "MF" },
            { type: "c", title: "กล้ามเนื้ออ่อนแรง ", next: "weakMuscleQuestions", sex: "MF" },
            { type: "o", title: "อื่นๆ", question: "อาการสำคัญ", sex: "MF", category: "description", next: "end" }, 

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
    //ปวดท้อง
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
            title: "อาการฉุกเฉิน",
            emergency: true,
            question: "มีอาการเหล่านี้ไหม",
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
            title: "อาการฉุกเฉิน",
            emergency: true,
            question: "มีอาการเหล่านี้ไหม",
            type: 'MultiChoice',
            answer: [
                { type: "E", title: "ชักเกร็ง", question: "อาการฉุกเฉิน" },
                { type: "E", title: "อาเจียนพุ่ง", question: "อาการฉุกเฉิน" },
                { type: "EF", title: "กำลังตั้งครรภ์", question: "อาการฉุกเฉิน", sex: "F" },
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
            question: "มีอาการเหล่านี้ไหม",
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
                { type: "c", title: "ร้าวลงแขน", question: "อาการปวดร้าวไหม?" },
                { type: "c", title: "ร้าวเป็นแถบ ๆ", question: "อาการปวดร้าวไหม?" },
                { type: "c", title: "ร้าวเป็นแถบ ๆ", question: "อาการปวดร้าวไหม?" },
                { type: "o", title: "อื่นๆ", question: "อาการปวดร้าวไหม?" },
                { type: "c", title: "ไม่มี", question: "อาการปวดร้าวไหม?" }
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

    //ปวดข้อ
    jointPainQuestions: {
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
            title: "ระยะเวลาที่ปวด",
            emergency: false,
            question: "ระยะเวลาที่ปวด",
            type: "Choice",
            answer: [
                { type: "T", title: "ระยะเวลา", question: "ระยะเวลาที่ปวด" },
            ]
        },
        question_3: {
            title: "จำนวนข้อที่ปวด",
            emergency: false,
            question: "จำนวนข้อที่ปวด",
            type: "Choice",
            answer: [
                { type: "c", title: "1 ข้อ", question: "จำนวนข้อที่ปวด" },
                { type: "c", title: "2-3ข้อ", question: "จำนวนข้อที่ปวด" },
                { type: "c", title: "หลายข้อ", question: "จำนวนข้อที่ปวด" },
            ]
        },
        question_4: {
            title: "ลักษณะการปวด",
            emergency: false,
            question: "ลักษณะการปวด",
            type: "Choice",
            answer: [
                { type: "c", title: "ปวดเป็น ๆ หาย ๆ ", question: "ลักษณะการปวด" },
                { type: "c", title: "ปวดแบบย้ายที่", question: "ลักษณะการปวด" },
                { type: "c", title: "ปวดแบบคงที่ไม่ลดลง", question: "ลักษณะการปวด" },
                { type: "c", title: "ใช้งานแล้วดีขึ้น", question: "ลักษณะการปวด" },
                { type: "c", title: "ใช้งานแล้วแย่ลง", question: "ลักษณะการปวด" },
                { type: "c", title: "ไม่แน่ใจ", question: "ลักษณะการปวด" }
            ]
        },
        question_5: {
            title: "อาการร่วม",
            emergency: false,
            question: "อาการร่วม",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "ไข้", question: "อาการร่วม" },
                { type: "c", title: "หนาวสั่น", question: "อาการร่วม" },
                { type: "c", title: "บวม/แดง/ร้อน", question: "อาการร่วม" },
                { type: "c", title: "ตาแดง", question: "อาการร่วม" },
                { type: "c", title: "ปัสสาวะแสบขัด", question: "อาการร่วม" },
                { type: "c", title: "หนองใน", question: "อาการร่วม" },
                { type: "c", title: "มีตุ่ม/ผื่นขึ้นที่ผิวหนัง", question: "อาการร่วม" },
                { type: "c", title: "การเคลื่อนไหวผิดปกติคล้ายฟ้อนรำ", question: "อาการร่วม" },
                { type: "c", title: "ข้อฝืดตอนเช้า", question: "อาการร่วม" },
                { type: "c", title: "เคลื่อนไหวข้อลดลงทุกทิศทาง", question: "อาการร่วม" },
                { type: "o", title: "อื่นๆ", question: "อาการร่วม", category: "description" },
                { type: "c", title: "ไม่มี", question: "อาการร่วม" }
            ]
        },
        question_6: {
            title: "ประวัติในอดีต",
            emergency: false,
            question: "ประวัติในอดีต",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "ข้อส่วนนั้นกระแทก", question: "ประวัติในอดีต" },
                { type: "c", title: "เลือดออกง่าย", question: "ประวัติในอดีต" },
                { type: "c", title: "เคยมีลิ้นหัวใจอักเสบ", question: "ประวัติในอดีต" },
                { type: "c", title: "กระดูกที่ยึดเกาะเส้นเอ็นอักเสบ", question: "ประวัติในอดีต" },
                { type: "c", title: "โรคพุ่มพวง/ภูมิแพ้ตัวเอง/SLE", question: "ประวัติในอดีต" },
                { type: "c", title: "ไม่มี", question: "ประวัติในอดีต" }
            ]
        },
    },

    //บวม
    swollenQuestions: {
        question_1: {
            title: "บริเวณที่มีอาการบวม",
            emergency: false,
            question: "บริเวณที่มีอาการบวม",
            type: "Choice",
            answer: [
                { type: "c", title: "บวมทั่ว ๆ", question: "บริเวณที่มีอาการบวม" },
                { type: "c", title: "บวมเฉพาะที่", question: "บริเวณที่มีอาการบวม" },
            ]
        },
        question_2: {
            title: "อาการฉุกเฉิน",
            emergency: true,
            question: "มีอาการเหล่านี้ไหม",
            type: "MultiChoice",
            answer: [
                { type: "E", title: "หายใจเร็วมากขึ้น ", question: "อาการฉุกเฉิน" },
                { type: "E", title: "เจ็บหน้าอกร่วมด้วย", question: "อาการฉุกเฉิน" },
                { type: "E", title: "ลุกแล้ววูบ/เวียนศีรษะ ", question: "อาการฉุกเฉิน" },
                { type: "E", title: "ปัสสาวะไม่ออกมากกว่า 8 ชั่วโมง ", question: "อาการฉุกเฉิน" },
                { type: "c", title: "ไม่มี", question: "อาการฉุกเฉิน" }
            ]
        },
        question_3: {
            title: "มีอาการหอบเหนื่อย/นอนราบไม่ได้/นอนแล้วต้องลุกขึ้นมาหอบกลางคืน",
            emergency: false,
            question: "มีอาการหอบเหนื่อย/นอนราบไม่ได้/นอนแล้วต้องลุกขึ้นมาหอบกลางคืน",
            type: "Choice",
            answer: [
                { type: "c", title: "ใช่", question: "มีอาการหอบเหนื่อย/นอนราบไม่ได้/นอนแล้วต้องลุกขึ้นมาหอบกลางคืน" },
                { type: "c", title: "ไม่ใช่", question: "มีอาการหอบเหนื่อย/นอนราบไม่ได้/นอนแล้วต้องลุกขึ้นมาหอบกลางคืน" }
            ]
        },
        question_4: {
            title: "ตื่นมามีหนังตาบวมตอนเช้า",
            emergency: false,
            question: "ตื่นมามีหนังตาบวมตอนเช้า",
            type: "Choice",
            answer: [
                { type: "c", title: "ใช่", question: "ตื่นมามีหนังตาบวมตอนเช้า" },
                { type: "c", title: "ไม่ใช่", question: "ตื่นมามีหนังตาบวมตอนเช้า" }
            ]
        },
        question_5: {
            title: "ระหว่างวันบวมที่ขามากขึ้น",
            emergency: false,
            question: "ระหว่างวันบวมที่ขามากขึ้น",
            type: "Choice",
            answer: [
                { type: "c", title: "ใช่", question: "ระหว่างวันบวมที่ขามากขึ้น" },
                { type: "c", title: "ไม่ใช่", question: "ระหว่างวันบวมที่ขามากขึ้น" }
            ]
        },
        question_6: {
            title: "อาการร่วม",
            emergency: false,
            question: "อาการร่วม",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "ผื่น", question: "อาการร่วม" },
                { type: "c", title: "ผมร่วง", question: "อาการร่วม" },
                { type: "c", title: "แพ้แสง", question: "อาการร่วม" },
                { type: "c", title: "ท้องโต", question: "อาการร่วม" },
                { type: "c", title: "ท้องอืด", question: "อาการร่วม" },
                { type: "c", title: "ท้องผูก", question: "อาการร่วม" },
                { type: "c", title: "กดแล้วบุ๋ม", question: "อาการร่วม" },
                { type: "c", title: "น้ำหนักเพิ่ม", question: "อาการร่วม" },
                { type: "c", title: "ปัสสาวะลดลง", question: "อาการร่วม" },
                { type: "c", title: "ปัสสาวะเป็นฟอง", question: "อาการร่วม" },
                { type: "c", title: "ปัสสาวะเป็นเลือด ", question: "อาการร่วม" },
                { type: "c", title: "บวมที่ขาทั้งสองข้าง", question: "อาการร่วม" },
                { type: "c", title: "ตัวเหลือง/ตาเหลือง", question: "อาการร่วม" },
                { type: "c", title: "หอบเหนื่อยเวลาออกแรง", question: "อาการร่วม" },
                { type: "c", title: "ถ่ายเหลวเรื้อรัง", question: "อาการร่วม" },
                { type: "o", title: "อื่นๆ", question: "อาการร่วม", category: "description" },
                { type: "c", title: "ไม่มี", question: "อาการร่วม" }
            ]
        },
        question_7: {
            title: "ประวัติในอดีต",
            emergency: false,
            question: "ประวัติในอดีต",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "เคยเป็นโรคไต", question: "ประวัติในอดีต" },
                { type: "c", title: "เคยเป็นโรคตับ", question: "ประวัติในอดีต" },
                { type: "c", title: "เคยเป็นโรคหัวใจ", question: "ประวัติในอดีต" },
                { type: "c", title: "ไม่มี", question: "ประวัติในอดีต" }
            ]
        },
    },

    //ถ่ายเป็นเลือดสด
    bloodyDiarrheaQuestions: {
        question_1: {
            title: "ระยะเวลาที่เป็น",
            emergency: false,
            question: "ระยะเวลาที่เป็น",
            type: "Choice",
            answer: [
                { type: "T", title: "ระยะเวลา", question: "ระยะเวลาที่เป็น" }
            ]
        },
        question_2: {
            title: "อาการฉุกเฉิน",
            emergency: true,
            question: "มีอาการเหล่านี้ไหม",
            type: "MultiChoice",
            answer: [
                { type: "E", title: "อาเจียนเป็นเลือด", question: "อาการฉุกเฉิน" },
                { type: "E", title: "หน้ามืดคล้ายเป็นลม", question: "อาการฉุกเฉิน" },
                { type: "U", title: "ไข้", question: "อาการฉุกเฉิน" },
                { type: "U", title: "ท้องเสีย", question: "อาการฉุกเฉิน" },
                { type: "U", title: "ท้องผูกสลับท้องเสีย", question: "อาการฉุกเฉิน" },
                { type: "U", title: "ปวดท้อง/ท้องอืด", question: "อาการฉุกเฉิน" },
                { type: "U", title: "เบื่ออาหาร/น้ำหนักลด", question: "อาการฉุกเฉิน" },
                { type: "c", title: "ไม่มี", question: "อาการฉุกเฉิน" }
            ]
        },
        question_3: {
            title: "สีของอุจจาระ",
            emergency: false,
            question: "สีของอุจจาระ",
            type: "Choice",
            answer: [
                { type: "c", title: "สีแดงสด", question: "สีของอุจจาระ" },
                { type: "c", title: "สีดำแดง", question: "สีของอุจจาระ" },
                { type: "c", title: "สีดำเหมือนยางมะตอย", question: "สีของอุจจาระ" },
                { type: "o", title: "อื่นๆ", question: "สีของอุจจาระ", category: "description" },
                { type: "c", title: "ไม่แน่ใจ", question: "สีของอุจจาระ" }
            ]
        },
        question_4: {
            title: "ลักษณะของอุจจาระ",
            emergency: false,
            question: "ลักษณะของอุจจาระ",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "เลือดสดเลือดปนอุจจาระ", question: "ลักษณะของอุจจาระ" },
                { type: "c", title: "เลือดเคลือบอุจจาระ", question: "ลักษณะของอุจจาระ" },
                { type: "c", title: "เลือดสดหยดหลังถ่าย", question: "ลักษณะของอุจจาระ" },
                { type: "o", title: "อื่นๆ", question: "ลักษณะของอุจจาระ", category: "description" },
                { type: "c", title: "ไม่แน่ใจ", question: "ลักษณะของอุจจาระ" }
            ]
        },
        question_5: {
            title: "อุจจาระมีมูกเลือดปน/มีกลิ่นอุจจาระเปลี่ยนแปลงไปจากเดิม",
            emergency: false,
            question: "อุจจาระมีมูกเลือดปน/มีกลิ่นอุจจาระเปลี่ยนแปลงไปจากเดิม",
            type: "Choice",
            answer: [
                { type: "c", title: "ใช่", question: "อุจจาระมีมูกเลือดปน/มีกลิ่นอุจจาระเปลี่ยนแปลงไปจากเดิม" },
                { type: "c", title: "ไม่ใช่", question: "อุจจาระมีมูกเลือดปน/มีกลิ่นอุจจาระเปลี่ยนแปลงไปจากเดิม" }
            ]
        },
        question_6: {
            title: "เคยถ่ายเป็นเลือดมาก่อน",
            emergency: false,
            question: "เคยถ่ายเป็นเลือดมาก่อน",
            type: "Choice",
            answer: [
                { type: "c", title: "ใช่", question: "เคยถ่ายเป็นเลือดมาก่อน" },
                { type: "c", title: "ไม่ใช่", question: "เคยถ่ายเป็นเลือดมาก่อน" }
            ]
        },
        question_7: {
            title: "ลำอุจจาระมีขนาดเล็กลง",
            emergency: false,
            question: "ลำอุจจาระมีขนาดเล็กลง",
            type: "Choice",
            answer: [
                { type: "c", title: "ใช่", question: "ลำอุจจาระมีขนาดเล็กลง" },
                { type: "c", title: "ไม่ใช่", question: "ลำอุจจาระมีขนาดเล็กลง" }
            ]
        },
        question_8: {
            title: "บริเวณรอบทวารหนัก",
            emergency: false,
            question: "บริเวณรอบทวารหนัก",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "มีอาการปวดแสบ", question: "บริเวณรอบทวารหนัก" },
                { type: "c", title: "มีก้อนเนื้อออกมาดันกลับได้", question: "บริเวณรอบทวารหนัก" },
                { type: "c", title: "มีก้อนยื่นออกมาดันกลับไม่ได้", question: "บริเวณรอบทวารหนัก" },
                { type: "o", title: "อื่นๆ", question: "บริเวณรอบทวารหนัก", category: "description" },
                { type: "c", title: "ไม่มี", question: "บริเวณรอบทวารหนัก" }
            ]
        },
        question_9: {
            title: "ประวัติในอดีต",
            emergency: false,
            question: "ประวัติในอดีต",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "เป็นโรคตับมาก่อน", question: "ประวัติในอดีต" },
                { type: "c", title: "เคยมีเลือดออกง่าย", question: "ประวัติในอดีต" },
                { type: "c", title: "เคยมีจ้ำเลือดตามตัว", question: "ประวัติในอดีต" },
                { type: "c", title: "ชอบทานอาหารสุกๆดิบๆ", question: "ประวัติในอดีต" },
                { type: "c", title: "ทานยาแก้ปวดกล้ามเนื้อ/ปวดข้อ ", question: "ประวัติในอดีต" },
                { type: "c", title: "ใช้ยาต้านการแข็งตัวของเลือด (warfarin)", question: "ประวัติในอดีต" },
                { type: "c", title: "ใช้ยาต้านการจับตัวของเกร็ดเลือด (aspirin)  ", question: "ประวัติในอดีต" },
                { type: "c", title: "เคยได้รับบาดเจ็บบริเวณรูทวาร", question: "ประวัติในอดีต" },
                { type: "c", title: "เคยได้รับบาดเจ็บบริเวณช่องท้อง", question: "ประวัติในอดีต" },
                { type: "c", title: "โรคมะเร็งลำไส้ใหญ่และทวารหนักในครอบครัว", question: "ประวัติในอดีต" },
                { type: "c", title: "ไม่มี", question: "ประวัติในอดีต" }
            ]
        },
    },

    //ท้องเสีย
    diarrheaQuestions: {
        question_1: {
            title: "อาการฉุกเฉิน",
            emergency: true,
            question: "มีอาการเหล่านี้ไหม",
            type: "MultiChoice",
            answer: [
                { type: "E", title: "ซึมลง/ไม่รู้สึกตัว ", question: "อาการฉุกเฉิน" },
                { type: "E", title: "ลุกนั่งแล้วเวียนศีรษะ", question: "อาการฉุกเฉิน" },
                { type: "U", title: "ไม่ปัสสาวะนาน 8 ชม", question: "อาการฉุกเฉิน" },
                { type: "U", title: "ปลายมือ/ปลายเท้าเย็น", question: "อาการฉุกเฉิน" },
                { type: "c", title: "ไม่มี", question: "อาการฉุกเฉิน" }
            ]
        },
        question_2: {
            title: "ลักษณะอุจจาระเป็นแบบไหน",
            emergency: false,
            question: "ลักษณะอุจจาระเป็นแบบไหน",
            type: "Choice",
            answer: [
                { type: "c", title: "น้ำอย่างเดียว", question: "ลักษณะอุจจาระเป็นแบบไหน" },
                { type: "c", title: "เป็นเลือดสดปริมาณมาก", question: "ลักษณะอุจจาระเป็นแบบไหน" },
                { type: "c", title: "เนื้อมากกว่าน้ำ", question: "ลักษณะอุจจาระเป็นแบบไหน" },
                { type: "c", title: "น้ำมากกว่าเนื้อ", question: "ลักษณะอุจจาระเป็นแบบไหน" },
                { type: "c", title: "เป็นมูก มีเลือด", question: "ลักษณะอุจจาระเป็นแบบไหน" },
                { type: "c", title: "เป็นมูก ไม่มีเลือด", question: "ลักษณะอุจจาระเป็นแบบไหน" },
                { type: "c", title: "สีดำแดงเหมือนเลือดหมู", question: "ลักษณะอุจจาระเป็นแบบไหน" },
                { type: "c", title: "เลือดเคลือบอุจจาระหรือเลือดหยดตามหลังถ่าย", question: "ลักษณะอุจจาระเป็นแบบไหน" },
                { type: "c", title: "เลือดหยดเวลาถ่าย", question: "ลักษณะอุจจาระเป็นแบบไหน" },
                { type: "o", title: "อื่นๆ", question: "ลักษณะอุจจาระเป็นแบบไหน", category: "description" },
                { type: "c", title: "ไม่แน่ใจ", question: "ลักษณะอุจจาระเป็นแบบไหน" }
            ]
        },
        question_3: {
            title: "ระยะเวลาที่ถ่ายเหลวนานเท่าไหร่",
            emergency: false,
            question: "ระยะเวลาที่ถ่ายเหลวนานเท่าไหร่",
            type: "Choice",
            answer: [
                { type: "c", title: "น้อยกว่า 2 อาทิตย์", question: "ระยะเวลาที่ถ่ายเหลวนานเท่าไหร่" },
                { type: "c", title: "มากกว่า 2 อาทิตย์", question: "ระยะเวลาที่ถ่ายเหลวนานเท่าไหร่" }
            ]
        },
        question_4: {
            title: "อาการร่วม",
            emergency: false,
            question: "อาการร่วม",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "ไข้", question: "อาการร่วม" },
                { type: "c", title: "ปวดท้องบิดๆ", question: "อาการร่วม" },
                { type: "c", title: "ปวดท้องทั่วๆ รู้สึกถ่ายไม่สุด ", question: "อาการร่วม" },
                { type: "c", title: "คลื่นไส้/อาเจียนมีกลิ่นเหม็นเน่า", question: "อาการร่วม" },
                { type: "c", title: "มีประวัติทานอาหารไม่สะอาด", question: "อาการร่วม" },
                { type: "c", title: "มีประวัติทานมายองเนส/คัสตาร์ด", question: "อาการร่วม" },
                { type: "c", title: "มีประวัติทานอาหารทะเล", question: "อาการร่วม" },
                { type: "c", title: "มีประวัติทานอาหารกล่อง", question: "อาการร่วม" },
                { type: "c", title: "มีประวัติทานเค้กขนมปังแยม", question: "อาการร่วม" },
                { type: "c", title: "มีประวัติทานอาหารนำมาอุ่นใหม่", question: "อาการร่วม" },
                { type: "c", title: "ไม่มี", question: "อาการร่วม" }
            ]
        },
        question_5: {
            title: "ประวัติในอดีต",
            emergency: false,
            question: "ประวัติในอดีต",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "เคยเป็นวัณโรค", question: "ประวัติในอดีต" },
                { type: "c", title: "เคยมีประวัติฉายรังสีบริเวณท้อง", question: "ประวัติในอดีต" },
                { type: "c", title: "เคยมีประวัติผ่าตัดช่องท้องมาก่อน", question: "ประวัติในอดีต" },
                { type: "c", title: "ครอบครัวมีประวัติมะเร็งลำไส้", question: "ประวัติในอดีต" },
                { type: "c", title: "มีเพศสัมพันธ์ที่ไม่ปลอดภัย", question: "ประวัติในอดีต" },
                { type: "c", title: "ฉีดสารเสพติดเข้าเส้นเลือดดำ", question: "ประวัติในอดีต" },
                { type: "c", title: "ชอบทานอาหารสุกสุกดิบดิบ", question: "ประวัติในอดีต" },
                { type: "c", title: "ทานยาต้มยาหม้อยาสมุนไพร", question: "ประวัติในอดีต" },
                { type: "c", title: "ทานยาลูกกลอน", question: "ประวัติในอดีต" },
                { type: "c", title: "เคยมีอาการแบบนี้มาก่อน", question: "ประวัติในอดีต" },
                { type: "c", title: "อยู่ในระหว่างการเดินทาง/เพิ่งกลับจากการเดินทางไปต่างถิ่น", question: "ประวัติในอดีต" },
                { type: "c", title: "ไม่มี", question: "ประวัติในอดีต" }
            ]
        },
        question_6: {
            title: "อาการร่วม",
            emergency: false,
            question: "อาการร่วม",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "ผื่น", question: "อาการร่วม" },
                { type: "c", title: "บวม", question: "อาการร่วม" },
                { type: "c", title: "ปวดข้อ", question: "อาการร่วม" },
                { type: "c", title: "ใจสั่น", question: "อาการร่วม" },
                { type: "c", title: "ปวดตา", question: "อาการร่วม" },
                { type: "c", title: "ท้องผูกสลับท้องเสีย", question: "อาการร่วม" },
                { type: "c", title: "ท้องอืด", question: "อาการร่วม" },
                { type: "c", title: "ปวดบิด", question: "อาการร่วม" },
                { type: "c", title: "อ่อนเพลีย", question: "อาการร่วม" },
                { type: "c", title: "ถ่ายติดขัด", question: "อาการร่วม" },
                { type: "c", title: "แผลในปาก", question: "อาการร่วม" },
                { type: "c", title: "ปัสสาวะบ่อย", question: "อาการร่วม" },
                { type: "c", title: "ปวดทวารหนัก", question: "อาการร่วม" },
                { type: "c", title: "มีเลือดออกตามตัว", question: "อาการร่วม" },
                { type: "c", title: "เหนื่อยง่าย/หงุดหงิด/ขี้ร้อน", question: "อาการร่วม" },
                { type: "c", title: "ถ่ายแล้วดีขึ้น", question: "อาการร่วม" },
                { type: "c", title: "ไม่มี", question: "อาการร่วม" }
            ]
        },
        question_7: {
            title: "อาการร่วม",
            emergency: false,
            question: "อาการร่วม",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "ไข้ต่ำๆ", question: "อาการร่วม" },
                { type: "c", title: "ซีดลง", question: "อาการร่วม" },
                { type: "c", title: "เพลียมากขึ้น", question: "อาการร่วม" },
                { type: "c", title: "ปวดท้องเรื้อรัง", question: "อาการร่วม" },
                { type: "c", title: "คลำได้ก้อนที่ท้อง", question: "อาการร่วม" },
                { type: "c", title: "เบื่ออาหาร/น้ำหนักลด	", question: "อาการร่วม" },
                { type: "c", title: "ไม่มี", question: "อาการร่วม" }
            ]
        },
        question_8: {
            title: "ประวัติการทาน",
            emergency: false,
            question: "ประวัติการทาน",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "อาหารไม่สะอาด", question: "ประวัติการทาน" },
                { type: "c", title: "อาหารทะเล", question: "ประวัติการทาน" },
                { type: "c", title: "อาหารกล่องเค้กขนมปังแยม", question: "ประวัติการทาน" },
                { type: "c", title: "อาหารนำมาอุ่นใหม่", question: "ประวัติการทาน" },
                { type: "c", title: "มายองเนส/คัสตาร์ด", question: "ประวัติการทาน" },
                { type: "c", title: "ไม่มี", question: "ประวัติการทาน" }
            ]
        },
    },

    //ตาแดง
    redEyesQuestions: {
        question_1: {
            title: "อาการฉุกเฉิน",
            emergency: true,
            question: "มีอาการเหล่านี้ไหม",
            type: "MultiChoice",
            answer: [
                { type: "E", title: "มีแผลที่ลูกตา หรือลูกตาฉีกขาด ", question: "อาการฉุกเฉิน" },
                { type: "E", title: "ตาโดนสารเคมี", question: "อาการฉุกเฉิน" },
                { type: "E", title: "ตามัวลงทันที", question: "อาการฉุกเฉิน" },
                { type: "E", title: "ปวดตา", question: "อาการฉุกเฉิน" },
                { type: "E", title: "มีสิ่งแปลกปลอมเข้าตา", question: "อาการฉุกเฉิน" },
                { type: "E", title: "เคืองตาเหมือนมีเศษผงในตา", question: "อาการฉุกเฉิน" },
                { type: "E", title: "มีเลือดออก", question: "อาการฉุกเฉิน" },
                { type: "U", title: "เปลือกตาบวม/แดง/ร้อน", question: "อาการฉุกเฉิน" },
                { type: "U", title: "มีไข้", question: "อาการฉุกเฉิน" },
                { type: "U", title: "เพลีย", question: "อาการฉุกเฉิน" },
                { type: "U", title: "มองเห็นภาพซ้อน", question: "อาการฉุกเฉิน" },
                { type: "U", title: "ขี้ตาเป็นหนอง ", question: "อาการฉุกเฉิน" },
                { type: "U", title: "ตาแดงขณะใส่คอนแทกเลนส์", question: "อาการฉุกเฉิน" },
                { type: "U", title: "เกิดหลังจากเชื่อมเหล็กหรือจ้องแสงนาน", question: "อาการฉุกเฉิน" },
                { type: "U", title: "ปวดตาหลังตื่นนอน", question: "อาการฉุกเฉิน" },
                { type: "c", title: "ไม่มี", question: "อาการฉุกเฉิน" }
            ]
        },
        question_2: {
            title: "ลักษณะตาแดง",
            emergency: false,
            question: "ลักษณะตาแดง",
            type: "Choice",
            answer: [
                { type: "P", title: "ถ่ายรูป", question: "ลักษณะตาแดง" }
            ]
        },
        question_3: {
            title: "อาการตาแดง",
            emergency: false,
            question: "อาการตาแดง",
            type: "Choice",
            answer: [
                { type: "c", title: "เป็นขึ้นทันที ", question: "อาการตาแดง" },
                { type: "c", title: "ค่อยเป็นค่อยไป", question: "อาการตาแดง" },
                { type: "c", title: "ไม่แน่ใจ", question: "อาการตาแดง" },
            ]
        },
        question_4: {
            title: "ลักษณะขี้ตา",
            emergency: false,
            question: "ลักษณะขี้ตา",
            type: "Choice",
            answer: [
                { type: "c", title: "น้ำ", question: "ลักษณะขี้ตา" },
                { type: "c", title: "สีเขียวเหลือง", question: "ลักษณะขี้ตา" },
                { type: "c", title: "หนอง", question: "ลักษณะขี้ตา" },
                { type: "o", title: "อื่นๆ", question: "ลักษณะขี้ตา", category: "description" },
                { type: "c", title: "ไม่แน่ใจ", question: "ลักษณะขี้ตา" },
            ]
        },
        question_5: {
            title: "อาการร่วม",
            question: "อาการร่วม",
            emergency: false,
            type: "MultiChoice",
            answer: [
                { type: "c", title: "คัน", question: "อาการร่วม" },
                { type: "c", title: "ปวด", question: "อาการร่วม" },
                { type: "c", title: "สู้แสงไม่ได้", question: "อาการร่วม" },
                { type: "c", title: "เหมือนมีเม็ดทรายในตา", question: "อาการร่วม" },
                { type: "c", title: "น้ำตาไหล", question: "อาการร่วม" },
                { type: "c", title: "มีตุ่มที่บริเวณผิวหนังรอบตา", question: "อาการร่วม" },
                { type: "c", title: "แสบร้อนในตา", question: "อาการร่วม" },
                { type: "c", title: "ไข้", question: "อาการร่วม" },
                { type: "c", title: "ปวดข้อ", question: "อาการร่วม" },
                { type: "c", title: "เจ็บคอ", question: "อาการร่วม" },
                { type: "o", title: "อื่นๆ", question: "อาการร่วม", category: "description" },
                { type: "c", title: "ไม่มี", question: "อาการร่วม" }
            ]
        },
    },

    //ตัวเหลืองตาเหลือง
    yellowSkinEyesQuestions: {
        question_1: {
            title: "ระยะเวลาที่เป็น",
            emergency: false,
            question: "ระยะเวลาที่เป็น",
            type: "Choice",
            answer: [
                { type: "T", title: "ระยะเวลา", question: "ระยะเวลาที่เป็น" },
            ]
        },
        question_2: {
            title: "อาการฉุกเฉิน",
            emergency: true,
            question: "มีอาการเหล่านี้ไหม",
            type: "MultiChoice",
            answer: [
                { type: "E", title: "หายใจเร็วขึ้น", question: "อาการฉุกเฉิน" },
                { type: "E", title: "ปัสสาวะสีโค้กร่วมด้วย", question: "อาการฉุกเฉิน" },
                { type: "E", title: "มีอาการเหนื่อยมากขึ้น", question: "อาการฉุกเฉิน" },
                { type: "c", title: "ไม่มี", question: "อาการฉุกเฉิน" }
            ]
        },
        question_3: {
            title: "มีอาการหนาวสั่นหรือไม่",
            emergency: false,
            question: "มีอาการหนาวสั่นหรือไม่",
            type: "Choice",
            answer: [
                { type: "c", title: "ใช่", question: "มีอาการหนาวสั่นหรือไม่" },
                { type: "c", title: "ไม่ใช่", question: "มีอาการหนาวสั่นหรือไม่" }
            ]
        },
        question_4: {
            title: "สีของอุจจาระ",
            emergency: false,
            question: "สีของอุจจาระ",
            type: "Choice",
            answer: [
                { type: "c", title: "สีเทา", question: "สีของอุจจาระ" },
                { type: "c", title: "สีเหลือง", question: "สีของอุจจาระ" },
                { type: "o", title: "อื่นๆ", question: "สีของอุจจาระ", category: "description" },
                { type: "c", title: "ไม่แน่ใจ", question: "สีของอุจจาระ" },
            ]
        },
        question_5: {
            title: "อาการร่วม",
            emergency: false,
            question: "อาการร่วม",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "ไข้", question: "อาการร่วม" },
                { type: "c", title: "ซีดลง", question: "อาการร่วม" },
                { type: "c", title: "ผมร่วง", question: "อาการร่วม" },
                { type: "c", title: "ปวดท้อง", question: "อาการร่วม" },
                { type: "c", title: "ผื่นแพ้แสง", question: "อาการร่วม" },
                { type: "c", title: "ตับ/ม้ามโต", question: "อาการร่วม" },
                { type: "c", title: "เหลืองมากขึ้น", question: "อาการร่วม" },
                { type: "c", title: "ทำงานได้ลดลง", question: "อาการร่วม" },
                { type: "c", title: "ขับถ่ายผิดปกติ", question: "อาการร่วม" },
                { type: "c", title: "คัน", question: "อาการร่วม" },
                { type: "c", title: "เบื่ออาหาร/น้ำหนักลด", question: "อาการร่วม" },
                { type: "c", title: "ไม่มี", question: "อาการร่วม" }
            ]
        },
        question_6: {
            title: "ประวัติในอดีต",
            emergency: false,
            question: "ประวัติในอดีต",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "เคยเป็นโรคตับ", question: "ประวัติในอดีต" },
                { type: "c", title: "เคยเป็นตับอ่อนอักเสบ", question: "ประวัติในอดีต" },
                { type: "c", title: "เคยได้รับการผ่าตัด/ได้รับเลือด", question: "ประวัติในอดีต" },
                { type: "c", title: "เคยเป็นไข้เลือดออก", question: "ประวัติในอดีต" },
                { type: "c", title: "เคยเป็นนิ่วในถุงน้ำดี", question: "ประวัติในอดีต" },
                { type: "c", title: "เคยเป็นโรคทางเดินน้ำดี", question: "ประวัติในอดีต" },
                { type: "c", title: "เข้าป่าหรือย่ำน้ำมาเร็วๆนี้", question: "ประวัติในอดีต" },
                { type: "c", title: "ประวัติมะเร็งตับในครอบครัว", question: "ประวัติในอดีต" },
                { type: "c", title: "มีเพศสัมพันธ์ที่ไม่ได้ป้องกัน", question: "ประวัติในอดีต" },
                { type: "c", title: "ประวัติไวรัสตับอักเสบในครอบครัว", question: "ประวัติในอดีต" },
                { type: "c", title: "ไม่มี", question: "ประวัติในอดีต" }
            ]
        },
    },

    //ตกขาว  TEST check
    leucorrhoeaQuestions: {
        question_1: {
            title: "ลักษณะของที่เห็น",
            emergency: false,
            question: "ลักษณะของที่เห็น",
            type: "Choice",
            answer: [
                { type: "c", title: "สีขาวขุ่น", question: "ลักษณะของที่เห็น" },
                { type: "c", title: "เหลือง ", question: "ลักษณะของที่เห็น" },
                { type: "c", title: "ใส", question: "ลักษณะของที่เห็น" },
                { type: "c", title: "เขียว", question: "ลักษณะของที่เห็น" },
                { type: "c", title: "แดงคล้ำ", question: "ลักษณะของที่เห็น" },
                { type: "c", title: "ไม่แน่ใจ", question: "ลักษณะของที่เห็น" }
            ]
        },
        question_2: {
            title: "ระยะเวลาที่เป็นอาการ",
            emergency: false,
            question: "มีอาการมานาน",
            type: "Choice",
            answer: [
                { type: "T", title: "ระยะเวลา", question: "มีอาการมานาน" },
            ]
        },
        question_3: {
            title: "ปริมาณ",
            emergency: false,
            question: "ปริมาณ",
            type: "Choice",
            answer: [
                { type: "o", title: "จำนวนผ้าอนามัย/วัน", question: "ปริมาณผ้าอนามัยที่ใช้" },
            ]
        },
        question_4: {
            title: "อาการร่วม",
            emergency: false,
            question: "อาการร่วม",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "ไข้", question: "อาการร่วม" },
                { type: "c", title: "กลิ่นเหม็นคาว", question: "อาการร่วม" },
                { type: "c", title: "คัน", question: "อาการร่วม" },
                { type: "c", title: "ปวดท้อง", question: "อาการร่วม" },
                { type: "c", title: "เจ็บเวลามีเพศสัมพันธ์", question: "อาการร่วม" },
                { type: "c", title: "เลือดออกหลังมีเพศสัมพันธ์", question: "อาการร่วม" },
                { type: "c", title: "ตึงคัดเต้านม", question: "อาการร่วม" },
                { type: "c", title: "คลำได้ก้อน", question: "อาการร่วม" },
                { type: "c", title: "เลือดออกเป็นจุด", question: "อาการร่วม" },
                { type: "c", title: "ท้องโตขึ้น", question: "อาการร่วม" },
                { type: "c", title: "อุจจาระหรือปัสสาวะผิดปกติ", question: "อาการร่วม" },
                { type: "c", title: "เบื่ออาหาร", question: "อาการร่วม" },
                { type: "c", title: "น้ำหนักลด", question: "อาการร่วม" },
                { type: "c", title: "คลื่นไส้/อาเจียน", question: "อาการร่วม" },
                { type: "c", title: "ไม่มี", question: "อาการร่วม" }
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
            type: "MultiChoice",
            answer: [
                { type: "c", title: "มะเร็งเต้านม", question: "ประวัติมะเร็งในครอบครัว" },
                { type: "c", title: "มะเร็งรังไข่", question: "ประวัติมะเร็งในครอบครัว" },
                { type: "c", title: "มะเร็งลำไส้", question: "ประวัติมะเร็งในครอบครัว" },
                { type: "c", title: "มะเร็งปากมดลูก", question: "ประวัติมะเร็งในครอบครัว" },
                { type: "c", title: "ไม่แน่ใจ", question: "ประวัติมะเร็งในครอบครัว" },
                { type: "o", title: "อื่นๆ", question: "ประวัติมะเร็งในครอบครัว", category: "description" },
            ]
        },
        question_9: {
            title: "มีประวัติโรคติดเชื้อทางเพศสัมพันธ์",
            emergency: false,
            question: "มีประวัติโรคติดเชื้อทางเพศสัมพันธ์ ",
            type: "Choice",
            answer: [
                { type: "c", title: "ใช่", question: "มีประวัติโรคติดเชื้อทางเพศสัมพันธ์ " },
                { type: "c", title: "ไม่ใช่", question: "มีประวัติโรคติดเชื้อทางเพศสัมพันธ์ " }
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
    },

    //ซีด
    anemiaQuestions: {
        question_1: {
            title: "อาการฉุกเฉิน",
            emergency: true,
            question: "มีอาการเหล่านี้ไหม",
            type: "MultiChoice",
            answer: [
                { type: "E", title: "อาเจียนหรือถ่ายเป็นเลือด", question: "อาการฉุกเฉิน" },
                { type: "E", title: "หน้ามืดหรือเป็นลม", question: "อาการฉุกเฉิน" },
                { type: "U", title: "น้ำหนักลดโดยไม่ทราบสาเหตุ", question: "อาการฉุกเฉิน" },
                { type: "U", title: "จ้ำเลือดตามตัว", question: "อาการฉุกเฉิน" },
                { type: "c", title: "ข้าม", question: "อาการฉุกเฉิน" }
            ]
        },
        question_2: {
            title: "การดำเนินชีวิต",
            emergency: false,
            question: "การดำเนินชีวิต",
            type: "Choice",
            answer: [
                { type: "c", title: "ทานอาหารมังสวิรัติ", question: "การดำเนินชีวิต" },
                { type: "c", title: "ไม่ทานผักเป็นเวลานาน", question: "การดำเนินชีวิต" },
                { type: "c", title: "ปกติ", question: "การดำเนินชีวิต" }
            ]
        },
        question_3: {
            title: "อาการร่วม",
            emergency: false,
            question: "อาการร่วม",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "ตัวเหลืองตาเหลือง", question: "อาการร่วม" },
                { type: "c", title: "ปัสสาวะสีเข้ม", question: "อาการร่วม" },
                { type: "F", title: "ประจำเดือนออกมากผิดปกติ", question: "อาการร่วม", sex: "F" },
                { type: "c", title: "จุดเลือดออกตามตัว", question: "อาการร่วม" },
                { type: "c", title: "เบื่ออาหาร/น้ำหนักลด", question: "อาการร่วม" },
                { type: "c", title: "ไม่มี", question: "อาการร่วม" }
            ]
        },
        question_4: {
            title: "ประวัติในครอบครัว",
            emergency: false,
            question: "ประวัติในครอบครัว",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "ธาลัสซีเมีย", question: "ประวัติในครอบครัว" },
                { type: "c", title: "โรคเม็ดเลือดแดงป่องพันธุกรรม", question: "ประวัติในครอบครัว" },
                { type: "c", title: "โรคพร่องเอนไซม์ G6PD	เป็นโรคเลือด", question: "ประวัติในครอบครัว" },
                { type: "c", title: "มีโรคเลือดในครอบครัว", question: "ประวัติในครอบครัว" },
                { type: "c", title: "เลือดออกผิดปกติ", question: "ประวัติในครอบครัว" },
                { type: "c", title: "ไม่มี", question: "ประวัติในครอบครัว" }
            ]
        },
        question_5: {
            title: "ประวัติในอดีต",
            emergency: false,
            question: "ประวัติในอดีต",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "ทานยาแก้ปวดกล้ามเนื้อ/ปวดข้อ", question: "ประวัติในอดีต" },
                { type: "c", title: "มีประวัติเลือดออกง่าย", question: "ประวัติในอดีต" },
                { type: "c", title: "หยุดยาก", question: "ประวัติในอดีต" },
                { type: "c", title: "ใช้ยาต้านการแข็งตัวของเลือด (warfarin)", question: "ประวัติในอดีต" },
                { type: "c", title: "ใช้ยาต้านการจับตัวของเกร็ดเลือด (aspirin)", question: "ประวัติในอดีต" },
                { type: "c", title: "ไม่มี", question: "ประวัติในอดีต" }
            ]
        },
    },

    //ชัก
    seizuresQuestions: {
        question_1: {
            title: "อาการก่อนชัก",
            emergency: false,
            question: "อาการก่อนชัก",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "เห็นแสงระยิบระยับ", question: "อาการก่อนชัก" },
                { type: "c", title: "ได้ยินเสียงหึ่งๆหรือวี๊ๆ", question: "อาการก่อนชัก" },
                { type: "c", title: "ชาหรือเจ็บบริเวณแขนขาหรือชาครึ่งซึก", question: "อาการก่อนชัก" },
                { type: "c", title: "รู้สึกว่าสิ่งแวดล้อมดูคุ้นเคยเหมือนเคยประสบมาก่อน (déjà vu)", question: "อาการก่อนชัก" },
                { type: "c", title: "ไม่มีอาการนำมาก่อนชัก", question: "อาการก่อนชัก" },
            ]
        },
        question_2: {
            title: "อาการขณะชัก",
            emergency: false,
            question: "อาการขณะชัก",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "แขนขา หรือ หน้า กระตุกข้างหนึ่ง", question: "อาการขณะชัก" },
                { type: "c", title: "ผู้ป่วยไม่รู้สึกตัว", question: "อาการขณะชัก" },
                { type: "c", title: "ผู้ป่วยรู้สึกตัวปกติ", question: "อาการขณะชัก" },
                { type: "c", title: "ขมุบขมิบมุมปากซ้ำ ๆ", question: "อาการขณะชัก" },
                { type: "c", title: "เลียริมฝีปากซ้ำ ๆ", question: "อาการขณะชัก" },
                { type: "c", title: "จับเสื้อผ้าซ้ำ ๆ", question: "อาการขณะชัก" },
                { type: "c", title: "เคี้ยวหรือกลืนซ้ำ ๆ", question: "อาการขณะชัก" },
                { type: "c", title: "เกร็งทั่วตัว", question: "อาการขณะชัก" },
                { type: "c", title: "กระตุกทั่วตัว", question: "อาการขณะชัก" },
                { type: "c", title: "กะตุกสั้น ๆ ครั้งเดียว", question: "อาการขณะชัก" },
                { type: "c", title: "ข้าม", question: "อาการขณะชัก" }
            ]
        },
        question_3: {
            title: "อาการหลังชัก",
            emergency: false,
            question: "อาการหลังชัก",
            type: "Choice",
            answer: [
                { type: "c", title: "สามารถทำกิจกรรมที่ตนกำลังทำก่อนชักต่อได้โดยไม่มีอาการสับสน", question: "อาการหลังชัก" },
                { type: "o", title: "อื่นๆ", question: "อาการหลังชัก", category: "description" },
                { type: "c", title: "ข้าม", question: "อาการหลังชัก" }
            ]
        },
        question_4: {
            title: "ระยะเวลาที่เป็น",
            emergency: false,
            question: "ระยะเวลาที่เป็น",
            type: "Choice",
            answer: [
                { type: "T", title: "ระยะเวลา", question: "ระยะเวลาที่เป็น" },
            ]
        },
        question_5: {
            title: "จำนวนครั้งที่เป็น",
            emergency: false,
            question: "จำนวนครั้งที่เป็น",
            type: "Choice",
            answer: [
                { type: "o", title: "จำนวนครั้ง", question: "จำนวนครั้งที่เป็น", category: "quantity" },
            ]
        },
        question_6: {
            title: "อาการอื่นๆ",
            emergency: false,
            question: "อาการอื่นๆ",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "การกัดลิ้น", question: "อาการอื่นๆ" },
                { type: "c", title: "ปัสสาวะราด", question: "อาการอื่นๆ" },
                { type: "c", title: "บาดเจ็บจากการล้ม", question: "อาการอื่นๆ" },
                { type: "c", title: "ไข้", question: "อาการอื่นๆ" },
                { type: "c", title: "ปวดศีรษะ", question: "อาการอื่นๆ" },
                { type: "c", title: "คอแข็ง", question: "อาการอื่นๆ" },
                { type: "c", title: "แขนขาอ่อนแรง", question: "อาการอื่นๆ" },
                { type: "c", title: "ไม่มี", question: "อาการอื่นๆ" }
            ]
        },
        question_7: {
            title: "ประวัติในอดีต",
            emergency: false,
            question: "ประวัติในอดีต",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "เคยได้รับบาดเจ็บบริเวณศีรษะ", question: "ประวัติในอดีต" },
                { type: "c", title: "ชอบรับประทานอาหารสุก ๆ ดิบ ๆ", question: "ประวัติในอดีต" },
                { type: "c", title: "โรคหลอดเลือดสมอง", question: "ประวัติในอดีต" },
                { type: "F", title: "เคยมีความผิดปกติขณะตั้งครรภ์หรือคลอด", question: "ประวัติในอดีต", sex: "F" },
                { type: "c", title: "เคยติดเชื้อในสมอง", question: "ประวัติในอดีต" },
                { type: "c", title: "ไม่มี", question: "ประวัติในอดีต" }
            ]
        },
        question_8: {
            title: "มีประวัติโรคลมชักในครอบครัว",
            emergency: false,
            question: "มีประวัติโรคลมชักในครอบครัว",
            type: "Choice",
            answer: [
                { type: "c", title: "ใช่", question: "มีประวัติโรคลมชักในครอบครัว" },
                { type: "c", title: "ไม่ใช่", question: "มีประวัติโรคลมชักในครอบครัว" }
            ]
        }
    },

    //ใจสั่น
    palpitationQuestions: {
        question_1: {
            title: "อาการฉุกเฉิน",
            emergency: true,
            question: "มีอาการเหล่านี้ไหม",
            type: "MultiChoice",
            answer: [
                { type: "E", title: "ใจสั่นนานและไม่หาย", question: "อาการฉุกเฉิน" },
                { type: "E", title: "หน้ามืดเป็นลม", question: "อาการฉุกเฉิน" },
                { type: "E", title: "มีโรคหัวใจขาดเลือด ", question: "อาการฉุกเฉิน" },
                { type: "E", title: "เจ็บแน่นหน้าอก", question: "อาการฉุกเฉิน" },
                { type: "E", title: "หอบเหนื่อย", question: "อาการฉุกเฉิน" },
                { type: "c", title: "ไม่มี", question: "อาการฉุกเฉิน" }
            ]
        },
        question_2: {
            title: "การดำเนินของอาการ",
            emergency: false,
            question: "การดำเนินของอาการ",
            type: "Choice",
            answer: [
                { type: "c", title: "เกิดทันทีและหายทันที", question: "การดำเนินของอาการ" },
                { type: "c", title: "เป็นอยู่สักพักจึงหาย", question: "การดำเนินของอาการ" },
            ]
        },
        question_3: {
            title: "ลักษณะการสั่น",
            emergency: false,
            question: "ลักษณะการสั่น",
            type: "Choice",
            answer: [
                { type: "c", title: "สะดุด", question: "ลักษณะการสั่น" },
                { type: "c", title: "ใจเต้นแรงบางจังหวะ", question: "ลักษณะการสั่น" },
                { type: "c", title: "ใจเต้นเร็วสม่ำเสมอ", question: "ลักษณะการสั่น" },
                { type: "c", title: "ใจเต้นเร็วไม่สม่ำเสมอ", question: "ลักษณะการสั่น" },
                { type: "c", title: "ใจเต้นแรงและเร็วเวลาออกกำลังกายหรือใช้แรงพอพักแล้วหายไป", question: "ลักษณะการสั่น" },
                { type: "c", title: "ใจสั่นเกิดขึ้นทันทีและหายทันทีหลังจากไอ/จาม/เบ่ง", question: "ลักษณะการสั่น" },
                { type: "c", title: "ไม่แน่ใจ", question: "ลักษณะการสั่น" },
            ]
        },
        question_4: {
            title: "อาการร่วม",
            emergency: false,
            question: "อาการร่วม",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "น้ำหนักลด", question: "อาการร่วม" },
                { type: "c", title: "ขี้ร้อน", question: "อาการร่วม" },
                { type: "c", title: "มีประวัติหัวใจพิการแต่กำเนิด", question: "อาการร่วม" },
                { type: "o", title: "อื่นๆ", question: "อาการร่วม", category: "description" },
                { type: "c", title: "ข้าม", question: "อาการร่วม" }
            ]
        },
        question_5: {
            title: "ความถี่ของอาการ",
            emergency: false,
            question: "ความถี่ของอาการ",
            type: 'Choice',
            answer: [
                { type: "c", title: "ตลอดเวลา", question: "ความถี่ของอาการ" },
                { type: "T", title: "เป็นช่วงๆ", question: "ความถี่ของอาการ" },
            ]
        },
        question_6: {
            title: "ประวัติครอบครัว",
            emergency: false,
            question: "ประวัติครอบครัว",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "มีคนเป็นโรคหัวใจ", question: "ประวัติครอบครัว" },
                { type: "c", title: "มีคนเสียชีวิตตั้งแต่อายุยังน้อย", question: "ประวัติครอบครัว" },
                { type: "c", title: "ไม่มี", question: "ประวัติครอบครัว" }
            ]
        },
    },

    //แน่นหน้าอก
    chestBurnQuestions: {
        question_1: {
            title: "อาการฉุกเฉิน",
            emergency: true,
            question: "มีอาการเหล่านี้ไหม",
            type: "MultiChoice",
            answer: [
                { type: "E", title: "หอบเหนื่อย", question: "อาการฉุกเฉิน" },
                { type: "E", title: "วูบหรือหมด ", question: "อาการฉุกเฉิน" },
                { type: "E", title: "เคยมีประวัติโรคหัวใจมาก่อน", question: "อาการฉุกเฉิน" },
                { type: "E", title: "อมยาใต้ดินแล้วไม่ดีขึ้น(ถ้ามี) ", question: "อาการฉุกเฉิน" },
                { type: "E", title: "ปวดเหมือนฉีกขาดร้าวทะลุหลัง ", question: "อาการฉุกเฉิน" },
                { type: "E", title: "ใจสั่น", question: "อาการฉุกเฉิน" },
                { type: "E", title: "เหงื่อแตก", question: "อาการฉุกเฉิน" },
                { type: "U", title: "เกิดขึ้นทันที ", question: "อาการฉุกเฉิน" },
                { type: "U", title: "ร้าวไปยังไหล่ซ้าย/กราม", question: "อาการฉุกเฉิน" },
                { type: "U", title: "ปวดนานกว่า 30 นาทีแล้วไม่หาย", question: "อาการฉุกเฉิน" },
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
            title: "ระยะเวลาของอาการ",
            emergency: false,
            question: "ระยะเวลาของอาการ",
            type: 'Choice',
            answer: [
                { type: "T", title: "ระยะเวลา", question: "ระยะเวลาของอาการ" }
            ]
        },
        question_4: {
            title: "เวลาที่เริ่มเจ็บแน่นหน้าอก",
            emergency: false,
            question: "เวลาที่เริ่มเจ็บแน่นหน้าอก",
            type: "Choice",
            answer: [
                { type: "T", title: "เวลา", question: 'เวลาที่เริ่มเจ็บแน่นหน้าอก' },
            ]
        },
        question_5: {
            title: "จำนวนครั้งที่เป็น",
            emergency: false,
            question: "จำนวนครั้งที่เป็น",
            type: "Choice",
            answer: [
                { type: "o", title: "จำนวนครั้ง", question: "จำนวนครั้งที่เป็น", category: "quantity" }
            ]
        },
        question_6: {
            title: "ลักษณะการเจ็บ",
            emergency: false,
            question: "ลักษณะการเจ็บ",
            type: "Choice",
            answer: [
                { type: "c", title: "เจ็บเหมือนถูกบีบรัดหนัก ๆ", question: "ลักษณะการเจ็บ" },
                { type: "c", title: "ปวดแสบร้อนยอดอก", question: "ลักษณะการเจ็บ" },
                { type: "c", title: "เจ็บเหมือนของแหลมแทง", question: "ลักษณะการเจ็บ" },
                { type: "c", title: "เจ็บตามการหายใจเข้าลึกๆ", question: "ลักษณะการเจ็บ" },
                { type: "o", title: "อื่นๆ", question: "ลักษณะการเจ็บ", category: "description" },
                { type: "c", title: "ไม่แน่ใจ", question: "ลักษณะการเจ็บ" }
            ]
        },
        question_7: {
            title: "มีอาการร้าวไปที่ใด",
            emergency: false,
            question: "มีอาการร้าวไปที่ใด",
            type: 'Choice',
            answer: [
                { type: "PC", title: "ตำแหน่ง1", img: require("../../assets/images/borg_good.png"), question: "มีอาการร้าวไปที่ใด" },
                { type: "PC", title: "ตำแหน่ง2", img: require("../../assets/images/borg_great.png"), question: "มีอาการร้าวไปที่ใด" },
                { type: "PC", title: "ตำแหน่ง3", img: require("../../assets/images/borg_bad.png"), question: "มีอาการร้าวไปที่ใด" },
                { type: "PC", title: "ตำแหน่ง4", img: require("../../assets/images/borg_good.png"), question: "มีอาการร้าวไปที่ใด" },
            ]
        },
        question_8: {
            title: "ขณะปวดกำลัง",
            emergency: false,
            question: "ขณะปวดกำลังทำอะไร",
            type: "Choice",
            answer: [
                { type: "c", title: "พัก", question: "ขณะปวดกำลังทำอะไร" },
                { type: "c", title: "ออกแรง", question: "ขณะปวดกำลังทำอะไร" },
                { type: "o", title: "อื่นๆ", question: "ขณะปวดกำลังทำอะไร", category: "description" },
                { type: "c", title: "ข้าม", question: "ขณะปวดกำลังทำอะไร" }
            ]
        },
        question_9: {
            title: "อาการบรรเทาเมื่อ",
            emergency: false,
            question: "อาการบรรเทาได้อย่างไร",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "หายเอง", question: "อาการบรรเทาได้อย่างไร" },
                { type: "c", title: "นั่งพัก/นอนนิ่งๆ	", question: "อาการบรรเทาได้อย่างไร" },
                { type: "c", title: "หลังจากรับประทานอาหาร/ยาลดกรด", question: "อาการบรรเทาได้อย่างไร" },
                { type: "o", title: "อื่นๆ", question: "อาการบรรเทาได้อย่างไร", category: "description" },
                { type: "c", title: "ไม่บรรเทา", question: "อาการบรรเทาได้อย่างไร" },
            ]
        },
        question_10: {
            title: "อาการร่วม",
            emergency: false,
            question: "มีอาการเหล่านี้หรือไม่",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "ไอมีเสมหะ", question: "อาการร่วม" },
                { type: "c", title: "ผื่นบริเวณอก", question: "อาการร่วม" },
                { type: "c", title: "ไข้/ตัวร้อน", question: "อาการร่วม" },
                { type: "c", title: "เรอเปรี้ยว", question: "อาการร่วม" },
                { type: "o", title: "อื่นๆ", question: "อาการร่วม", category: "description" },
                { type: "c", title: "ไม่มี", question: "อาการร่วม" },
            ]
        },
        question_11: {
            title: "ประวัติในอดีต",
            emergency: false,
            question: "ประวัติในอดีต",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "โรคหัวใจ", question: "ประวัติในอดีต" },
                { type: "c", title: "โรคปอด", question: "ประวัติในอดีต" },
                { type: "c", title: "โรคเบาหวาน", question: "ประวัติในอดีต" },
                { type: "c", title: "โรคไขมัน", question: "ประวัติในอดีต" },
                { type: "c", title: "โรคความดัน", question: "ประวัติในอดีต" },
                { type: "c", title: "โรคหัวใจในครอบครัว", question: "ประวัติในอดีต" },
                { type: "c", title: "ไม่มี", question: "ประวัติในอดีต" },
            ]
        },
    },

    //เจ็บคอ
    soreThroatQuestions: {
        question_1: {
            title: "อาการร่วม",
            emergency: false,
            question: "อาการร่วม",
            type: "Choice",
            answer: [
                { type: "c", title: "ไอ", question: "อาการร่วม" },
                { type: "c", title: "ไข้", question: "อาการร่วม" },
                { type: "c", title: "น้ำมูก", question: "อาการร่วม" },
                { type: "c", title: "เสมหะ", question: "อาการร่วม" },
                { type: "o", title: "อื่นๆ", question: "อาการร่วม" },
                { type: "c", title: "ไม่มี", question: "อาการร่วม" }
            ]
        },
        question_2: {
            title: "กิจกรรมที่ทำก่อนจะมีอาการ",
            emergency: false,
            question: "กิจกรรมที่ทำก่อนจะมีอาการ",
            type: "Choice",
            answer: [
                { type: "c", title: "พักผ่อนน้อย", question: "กิจกรรมที่ทำก่อนจะมีอาการ" },
                { type: "c", title: "ใช้เสียงมาก", question: "กิจกรรมที่ทำก่อนจะมีอาการ" },
                { type: "c", title: "ทานของทอด", question: "กิจกรรมที่ทำก่อนจะมีอาการ" },
                { type: "o", title: "อื่นๆ", question: "กิจกรรมที่ทำก่อนจะมีอาการ", category: 'description' },
                { type: "c", title: "ข้าม", question: "กิจกรรมที่ทำก่อนจะมีอาการ" }
            ]
        },
    },

    //จุกเสียดใต้ลิ้นปี่
    epigastricQuestions: {
        question_1: {
            title: "อาการร่วม",
            emergency: false,
            question: "อาการร่วม",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "อาเจียนหรือถ่ายเป็นเลือด ", question: "อาการร่วม" },
                { type: "c", title: "มีคนทักว่าซีด", question: "อาการร่วม" },
                { type: "c", title: "น้ำหนักลดโดยไม่ทราบสาเหตุ", question: "อาการร่วม" },
                { type: "c", title: "กลืนลำบาก", question: "อาการร่วม" },
                { type: "c", title: "อาเจียนต่อเนื่อง", question: "อาการร่วม" },
                { type: "c", title: "ไม่มี", question: "อาการร่วม" }
            ]
        },
        question_2: {
            title: "การดำเนินชีวิต",
            emergency: false,
            question: "การดำเนินชีวิต",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "ชอบทานของเผ็ดจัด,เปรี้ยวจัด,น้ำอัดลม", question: "การดำเนินชีวิต" },
                { type: "c", title: "เข้านอนทันทีหลังทานอาหารอิ่มใหม่ ๆ ไม่เกิน 2 ชั่วโมง", question: "การดำเนินชีวิต" },
                { type: "c", title: "ใส่กางเกงที่รัดแน่น", question: "การดำเนินชีวิต" },
                { type: "c", title: "ทานอาหารมัน", question: "การดำเนินชีวิต" },
                { type: "c", title: "มีความเครียด", question: "การดำเนินชีวิต" },
                { type: "c", title: "ไม่ส่งผลกระทบ", question: "การดำเนินชีวิต" }
            ]
        },
        question_3: {
            title: "อาการเด่น",
            emergency: false,
            question: "อาการเด่น",
            type: "Choice",
            answer: [
                { type: "c", title: "แสบร้อน หรือ ปวดลิ้นปี่", question: "อาการเด่น" },
                { type: "c", title: "อืดแน่นหลังทานอาหาร หรือ อิ่มเร็วกว่าปกติ", question: "อาการเด่น" },
                { type: "c", title: "ข้าม", question: "อาการเด่น" }
            ]
        },
        question_4: {
            title: "ประวัติในอดีต",
            emergency: false,
            question: "ประวัติในอดีต",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "ทานยาแก้ปวดกล้ามเนื้อ/ปวดข้อ", question: "ประวัติในอดีต" },
                { type: "c", title: "ใช้ยาต้านการแข็งตัวของเลือด (warfarin)", question: "ประวัติในอดีต" },
                { type: "c", title: "ช้ยาต้านการจับตัวของเกร็ดเลือด (aspirin)", question: "ประวัติในอดีต" },
                { type: "c", title: "ไม่มี", question: "ประวัติในอดีต" }
            ]
        },
    },

    //คลื่นไส้ อาเจียน
    nauseaQuestions: {
        question_1: {
            title: "อาการฉุกเฉิน",
            emergency: true,
            question: "มีอาการเหล่านี้หรือไม่",
            type: "MultiChoice",
            answer: [
                { type: "E", title: "ปวดท้องรุนแรง", question: "อาการฉุกเฉิน" },
                { type: "E", title: "ปวดหัวรุนแรง", question: "อาการฉุกเฉิน" },
                { type: "E", title: "เจ็บแน่นหน้าอก", question: "อาการฉุกเฉิน" },
                { type: "E", title: "ไม่ถ่ายไม่ผายลม", question: "อาการฉุกเฉิน" },
                { type: "E", title: "หน้ามืด/หมดสติ", question: "อาการฉุกเฉิน" },
                { type: "E", title: "มีอุบัติเหตุรุนแรงที่ศีรษะ", question: "อาการฉุกเฉิน" },
                { type: "E", title: "ตามัว", question: "อาการฉุกเฉิน" },
                { type: "E", title: "อาเจียนเป็นเลือดสดปริมาณมาก", question: "อาการฉุกเฉิน" },
                { type: "c", title: "ไม่มี", question: "อาการฉุกเฉิน" }
            ]
        },
        question_2: {
            title: "ระยะเวลาที่เป็น",
            emergency: false,
            question: "ระยะเวลาที่เป็น",
            type: "Choice",
            answer: [
                { type: "T", title: "ระยะเวลา", question: "ระยะเวลาที่เป็น" },
            ]
        },
        question_3: {
            title: "ความถี่ของอาการ",
            emergency: false,
            question: "ความถี่ของอาการ",
            type: "Choice",
            answer: [
                { type: "o", title: "จำนวนครั้ง/หน่วยเวลา", question: "ความถี่ของอาการ" },

            ]
        },
        question_4: {
            title: "ลักษณะของอาเจียน",
            emergency: false,
            question: "ลักษณะของอาเจียน",
            type: "Choice",
            answer: [
                { type: "c", title: "น้ำลาย", question: "ลักษณะของอาเจียน" },
                { type: "c", title: "สีกาแฟ", question: "ลักษณะของอาเจียน" },
                { type: "c", title: "เลือดสด มีอุจจาระปนอาหารหรือน้ำ", question: "ลักษณะของอาเจียน" },
                { type: "o", title: "อื่นๆ", question: "ลักษณะของอาเจียน", category: "description" },
                { type: "c", title: "ไม่แน่ใจ", question: "ลักษณะของอาเจียน" }
            ]
        },
        question_5: {
            title: "การดำเนินของอาการ",
            emergency: false,
            question: "การแสดงอาการ",
            type: "Choice",
            answer: [
                { type: "c", title: "เฉียบพลัน", question: "การแสดงอาการ" },
                { type: "c", title: "ค่อยๆเป็น", question: "การแสดงอาการ" },
                { type: "c", title: "เป็นๆหายๆ", question: "การแสดงอาการ" },
                { type: "o", title: "อื่นๆ", question: "การแสดงอาการ", category: "description" },
                { type: "c", title: "ข้าม", question: "การแสดงอาการ" }
            ]
        },
        question_6: {
            title: "ช่วงเวลาที่มักเป็น",
            emergency: false,
            question: "ช่วงเวลาที่มักเป็น",
            type: "Choice",
            answer: [
                { type: "c", title: "กลางวัน", question: "ช่วงเวลาที่มักเป็น" },
                { type: "c", title: "กลางคืน", question: "ช่วงเวลาที่มักเป็น" },
                { type: "T", title: "เวลา", question: "ช่วงเวลาที่มักเป็น" },
                { type: "c", title: "ข้าม", question: "ช่วงเวลาที่มักเป็น" }
            ]
        },
        question_7: {
            title: "สัมพันธ์กับการรับประทานอาหาร",
            emergency: false,
            question: "คาดว่าเกิดจากอาหารที่ทานหรือไม่",
            type: "Choice",
            answer: [
                { type: "F", title: "ใช่", question: "คาดว่าเกิดจากอาหารที่ทานหรือไม่", sex: "F" },
                { type: "c", title: "ไม่ใช่", question: "คาดว่าเกิดจากอาหารที่ทานหรือไม่" }
            ]
        },
        question_8: {
            title: "เกิดหลังรับประทานอาหารนานเท่าไหร่",
            emergency: false,
            question: "เกิดหลังรับประทานอาหารนานเท่าไหร่",
            type: "Choice",
            answer: [
                { type: "T", title: "เวลา", question: "เกิดหลังรับประทานอาหารนานเท่าไหร่" },
                { type: "c", title: "ข้าม", question: "เกิดหลังรับประทานอาหารนานเท่าไหร่" }
            ]
        },
        question_9: {
            title: "ประจำเดือนครั้งสุดท้าย",
            emergency: false,
            question: "ประจำเดือนครั้งสุดท้าย",
            type: "Choice",
            sex: "F",
            answer: [
                { type: "T", title: "วว/ดด/ปปปป", question: "ประจำเดือนครั้งสุดท้าย" },
            ]
        },
        question_10: {
            title: "อาการร่วมอื่นๆ",
            emergency: false,
            question: "อาการร่วมอื่นๆ",
            type: "Choice",
            answer: [
                { type: "c", title: "ไข้", question: "อาการร่วมอื่นๆ" },
                { type: "c", title: "อิ่มง่าย", question: "อาการร่วมอื่นๆ" },
                { type: "c", title: "แน่นท้อง", question: "อาการร่วมอื่นๆ" },
                { type: "c", title: "อาเจียนพุ่ง", question: "อาการร่วมอื่นๆ" },
                { type: "c", title: "ท้องเสีย/ถ่ายเหลว", question: "อาการร่วมอื่นๆ" },
                { type: "c", title: "เวียนศีรษะ/บ้านหมุน", question: "อาการร่วมอื่นๆ" },
                { type: "o", title: "อื่นๆ", question: "อาการร่วมอื่นๆ", category: "description" },
                { type: "c", title: "ไม่มี", question: "อาการร่วมอื่นๆ" }
            ]
        },
    },

    //ไข้
    coldQuestions: {
        question_1: {
            title: "อาการฉุกเฉิน",
            emergency: true,
            question: "มีอาการเหล่านี้หรือไม่",
            type: "MultiChoice",
            answer: [
                { type: "E", title: "หมดสติ", question: "อาการฉุกเฉิน" },
                { type: "E", title: "แขนขาอ่อนแรง", question: "อาการฉุกเฉิน" },
                { type: "E", title: "ซึมลง/ไม่รู้สึกตัว", question: "อาการฉุกเฉิน" },
                { type: "E", title: "ปลายมือ/ปลายเท้าเย็น", question: "อาการฉุกเฉิน" },
                { type: "E", title: "ลุก/นั่งแล้วมีอาการเวียนศีรษะ/วูบ", question: "อาการฉุกเฉิน" },
                { type: "c", title: "ไม่มี", question: "อาการฉุกเฉิน" }
            ]
        },
        question_2: {
            title: "ลักษณะไข้",
            emergency: false,
            question: "ลักษณะไข้",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "ไข้สูงลอย", question: "ลักษณะไข้" },
                { type: "c", title: "ไข้เป็นๆหายๆ", question: "ลักษณะไข้" },
                { type: "c", title: "ไข้ต่ำทั้งวัน", question: "ลักษณะไข้" },
                { type: "c", title: "ไข้วันเว้นวัน", question: "ลักษณะไข้" },
                { type: "o", title: "อื่นๆ", question: "ลักษณะไข้", category: "description" },
                { type: "c", title: "ไม่แน่ใจ", question: "ลักษณะไข้" }
            ]
        },
        question_3: {
            title: "ไข้",
            emergency: false,
            question: "เป็นไข้มาแล้ว",
            type: "Choice",
            answer: [
                { type: "c", title: "น้อยกว่า 24 ชั่วโมง", question: "เป็นไข้มาแล้ว" },
                { type: "c", title: "มากกว่า 24 ชั่วโมง", question: "เป็นไข้มาแล้ว" }
            ]
        },
        question_4: {
            title: "อาการร่วม",
            emergency: true,
            question: "อาการร่วม",
            type: "MultiChoice",
            answer: [
                { type: "E", title: "น้ำมูก", question: "อาการร่วม" },
                { type: "E", title: "ผื่นขึ้นตามตัว", question: "อาการร่วม" },
                { type: "E", title: "ปวดตามหูหรือเจ็บหู", question: "อาการร่วม" },
                { type: "E", title: "มีเสมหะ", question: "อาการร่วม" },
                { type: "E", title: "ปัสสาวะแสบขัด หรือสีขุ่น", question: "อาการร่วม" },
                { type: "E", title: "ไอ/เจ็บคอ", question: "อาการร่วม" },
                { type: "E", title: "ท้องเสีย", question: "อาการร่วม" },
                { type: "E", title: "คลื่นไส้/อาเจียน", question: "อาการร่วม" },
                { type: "E", title: "ตัวเหลือง/ตาเหลือง", question: "อาการร่วม" },
                { type: "E", title: "ปวดท้อง", question: "อาการร่วม" },
                { type: "E", title: "ปวดหลัง หรือ ปวดบั้นเอว", question: "อาการร่วม" },
                { type: "E", title: "ปัสสาวะเปลี่ยนสี", question: "อาการร่วม" },
                { type: "E", title: "ตาพร่ามัว", question: "อาการร่วม" },
                { type: "E", title: "คลำก้อนได้ตามตัว", question: "อาการร่วม" },
                { type: "E", title: "ปวดศีรษะ", question: "อาการร่วม" },
                { type: "E", title: "หอบเหนื่อย", question: "อาการร่วม" },
                { type: "E", title: "ปวดต้นคอ/คอแข็ง", question: "อาการร่วม" },
                { type: "E", title: "เบื่ออาหาร/น้ำหนักลด", question: "อาการร่วม" },
                { type: "E", title: "ปวดตามข้อ", question: "อาการร่วม" },
                { type: "c", title: "ไม่มี", question: "อาการร่วม" }
            ]
        },
        question_5: {
            title: "อาการร่วม",
            emergency: true,
            question: "อาการร่วม",
            type: "MultiChoice",
            answer: [
                { type: "U", title: "มีอาการหนาวสั่น", question: "อาการร่วม" },
                { type: "U", title: "ผมร่วง", question: "อาการร่วม" },
                { type: "U", title: "ซีดลง", question: "อาการร่วม" },
                { type: "U", title: "ไอเรื้อรัง", question: "อาการร่วม" },
                { type: "U", title: "แผลในปาก", question: "อาการร่วม" },
                { type: "U", title: "ฝ้าขาวในปาก", question: "อาการร่วม" },
                { type: "U", title: "ท้องเสียเรื้อรัง", question: "อาการร่วม" },
                { type: "U", title: "ปวดท้อง", question: "อาการร่วม" },
                { type: "U", title: "คลำก้อนได้ตามตัว", question: "อาการร่วม" },
                { type: "U", title: "ผื่นบริเวณใบหน้า", question: "อาการร่วม" },
                { type: "U", title: "ปวดตามข้อต่างๆ", question: "อาการร่วม" },
                { type: "U", title: "เบื่ออาหาร/น้ำหนักลด", question: "อาการร่วม" },
                { type: "U", title: "เคยได้รับการวินิจฉัยว่าเป็นมะเร็ง/เอดส์", question: "อาการร่วม" },
                { type: "U", title: "ผื่นผิดปกติหรือแผลหนองตามตัว/แขน/ขา", question: "อาการร่วม" },
                { type: "UF", title: "ตกขาวผิดปกติ", question: "อาการร่วม", sex: "F" },
                { type: "c", title: "ไม่มี", question: "อาการร่วม" }
            ]
        },
        question_6: {
            title: "ปัจจัยเสี่ยง",
            emergency: false,
            question: "มีปัจจัยเสี่ยงเหล่านี้หรือไม่",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "สัตว์กัด", question: "ปัจจัยเสี่ยง" },
                { type: "c", title: "มีเพศสัมพันธ์ในกลุ่มเสี่ยงโดยไม่ได้ป้องกัน", question: "ปัจจัยเสี่ยง" },
                { type: "c", title: "สัมผัสคนที่มีไข้", question: "ปัจจัยเสี่ยง" },
                { type: "c", title: "เข้าป่า/ย่ำน้ำมาเร็วๆนี้", question: "ปัจจัยเสี่ยง" },
                { type: "c", title: "เดินทางในพื้นที่ที่มีโรคระบาด", question: "ปัจจัยเสี่ยง" },
                { type: "c", title: "ไม่มี", question: "ปัจจัยเสี่ยง" }
            ]
        },
        question_7: {
            title: "ประวัติในอดีต",
            emergency: false,
            question: "ประวัติในอดีต",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "เคยใช้สารเสพติด", question: "ประวัติในอดีต" },
                { type: "c", title: "มีเพศสัมพันธ์ที่ไม่ปลอดภัย", question: "ประวัติในอดีต" },
                { type: "c", title: "เคยใช้ยาหม้อ ยาต้ม ยาลูกกลอน", question: "ประวัติในอดีต" },
                { type: "c", title: "เคยมีประวัติโรคติดเชื้อ", question: "ประวัติในอดีต" },
                { type: "c", title: "ประวัติมะเร็งในครอบครัว", question: "ประวัติในอดีต" },
                { type: "c", title: "ไม่มี", question: "ประวัติในอดีต" }
            ]
        },
    },

    //การนอนหลับผิดปกติ //TEST check
    insomniaQuestions: {
        question_1: {
            title: "ความถี่",
            emergency: false,
            question: "ความถี่",
            type: "Choice",
            answer: [
                { type: "c", title: "เป็นๆหายๆ", question: "ความถี่" },
                { type: "c", title: "เป็นทุกวัน", question: "ความถี่" },
            ]
        },
        question_2: {
            title: "อาการขณะนอน",
            emergency: false,
            question: "อาการขณะนอน",
            type: "Choice",
            answer: [
                { type: "c", title: "กรน", question: "อาการขณะนอน" },
                { type: "c", title: "หยุดหายใจ", question: "อาการขณะนอน" },
                { type: "o", title: "อื่นๆ", question: "อาการขณะนอน", category: "description" },
            ]
        },
        question_3: {
            title: "ปัจจัยที่ทำให้แย่ลง",
            emergency: false,
            question: "ปัจจัยที่ทำให้แย่ลง",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "ความเครียด", question: "ปัจจัยที่ทำให้แย่ลง" },
                { type: "o", title: "อื่นๆ", question: "ปัจจัยที่ทำให้แย่ลง", category: "description" },
                { type: "c", title: "ไม่มี", question: "ปัจจัยที่ทำให้แย่ลง" },
            ]
        },
        question_4: {
            title: "ปัจจัยที่ทำใหดีขึ้น",
            emergency: false,
            question: "ปัจจัยที่ทำใหดีขึ้น",
            type: "MultiChoice",
            answer: [
                { type: "o", title: "ทานยา", question: "ปัจจัยที่ทำให้ดีขึ้น", category: "description" },
                { type: "o", title: "อื่นๆ", question: "ปัจจัยที่ทำให้ดีขึ้น", category: "description" },
                { type: "c", title: "ไม่มี", question: "ปัจจัยที่ทำให้ดีขึ้น" }
            ]
        },
        question_5: {
            title: "เวลาเข้านอน",
            emergency: false,
            question: "เวลาเข้านอน",
            type: "Choice",
            answer: [
                { type: "T", title: "เวลา", question: "เวลาเข้านอน" },
            ]
        },
        question_6: {
            title: "ระยะเวลาตั้งแต่ล้มตัวนอนจนถึงนอนหลับ",
            emergency: false,
            question: "ระยะเวลาตั้งแต่ล้มตัวนอนจนถึงนอนหลับ",
            type: "Choice",
            answer: [
                { type: "o", title: "เวลา (หน่วย)", question: "ระยะเวลาตั้งแต่ล้มตัวนอนจนถึงนอนหลับ", category: "description" },
            ]
        },
        question_7: {
            title: "ตื่นกลางดึกหรือไม่",
            emergency: false,
            question: "ตื่นกลางดึกหรือไม่",
            type: "Choice",
            answer: [
                { type: "c", title: "ใช่", question: "ตื่นกลางดึกหรือไม่" },
                { type: "c", title: "ไม่ใช่", question: "ตื่นกลางดึกหรือไม่" },
            ]
        },
        question_8: {
            title: "หลังตื่นนอนสามารถหลับต่อได้หรือไม่",
            emergency: false,
            question: "หลังตื่นนอนสามารถหลับต่อได้หรือไม่",
            type: "Choice",
            answer: [
                { type: "c", title: "ได้", question: "หลังตื่นนอนสามารถหลับต่อได้หรือไม่" },
                { type: "c", title: "ไม่ได้", question: "หลังตื่นนอนสามารถหลับต่อได้หรือไม่" },
            ]
        },
        question_9: {
            title: "เวลาตื่น",
            emergency: false,
            question: "เวลาตื่น",
            type: "Choice",
            answer: [
                { type: "T", title: "เวลา", question: "เวลาตื่น" },
            ]
        },
        question_10: {
            title: "การนอนช่วงกลางวัน",
            emergency: false,
            question: "การนอนช่วงกลางวัน",
            type: "Choice",
            answer: [
                { type: "c", title: "นอนช่วงกลางวัน", question: "การนอนช่วงกลางวัน" },
                { type: "c", title: "ไม่นอนกลางวัน", question: "การนอนช่วงกลางวัน" },
            ]
        },
        question_11: {
            title: "การดำเนินชีวิต",
            emergency: false,
            question: "การดำเนินชีวิต",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "ดื่มเครื่องดื่มที่มีคาเฟอีน", question: "การดำเนินชีวิต" },
                { type: "c", title: "ชอบดื่มน้ำอัดลม", question: "การดำเนินชีวิต" },
                { type: "c", title: "ชอบดื่มเครื่องดื่มชูกำลัง", question: "การดำเนินชีวิต" },
                { type: "c", title: "ข้าม", question: "การดำเนินชีวิต" }
            ]
        },
        question_12: {
            title: "สภาพแวดล้อมในการนอน",
            emergency: false,
            question: "สภาพแวดล้อมในการนอน",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "เสียงดัง", question: "สภาพแวดล้อมในการนอน" },
                { type: "c", title: "แสงสว่าง", question: "สภาพแวดล้อมในการนอน" },
                { type: "c", title: "อุณหภูมิไม่เหมาะสม", question: "สภาพแวดล้อมในการนอน" },
                { type: "c", title: "ข้าม", question: "สภาพแวดล้อมในการนอน" }
            ]
        },
    },

    //ก้อนที่คอ
    neckTumorQuestions: {
        question_1: {
            title: "ตำแหน่งของก้อน",
            emergency: false,
            question: "ตำแหน่งของก้อน",
            type: "Choice",
            answer: [
                { type: "c", title: "ขวา", question: "ตำแหน่งของก้อน" },
                { type: "c", title: "ซ้าย", question: "ตำแหน่งของก้อน" },
                { type: "c", title: "กลาง", question: "ตำแหน่งของก้อน" },
                { type: "o", title: "อื่นๆ", question: "ตำแหน่งของก้อน" },
                { type: "c", title: "ข้าม", question: "ตำแหน่งของก้อน" },
            ]
        },

        question_2: {
            title: "ระยะเวลาที่เป็น",
            emergency: false,
            question: "ระยะเวลาที่เป็น",
            type: "Choice",
            answer: [
                { type: "T", title: "ระยะเวลา", question: "ระยะเวลาที่เป็น" },
            ]
        },
        question_3: {
            title: "การเปลี่ยนแปลงของขนาด",
            emergency: false,
            question: "การเปลี่ยนแปลงของขนาด",
            type: "Choice",
            answer: [
                { type: "c", title: "เท่าๆเดิม", question: "การเปลี่ยนแปลงของขนาด" },
                { type: "c", title: "โตๆยุบๆ", question: "การเปลี่ยนแปลงของขนาด" },
                { type: "c", title: "โตขึ้น", question: "การเปลี่ยนแปลงของขนาด" },
                { type: "c", title: "เล็กลง", question: "การเปลี่ยนแปลงของขนาด" },
                { type: "c", title: "ไม่แน่ใจ", question: "การเปลี่ยนแปลงของขนาด" },
            ]
        },
        question_4: {
            title: "จำนวนก้อน",
            emergency: false,
            question: "จำนวนก้อน",
            type: "Choice",
            answer: [
                { type: "c", title: "ก้อนเดียว", question: "จำนวนก้อน" },
                { type: "c", title: "หลายก้อน", question: "จำนวนก้อน" },
            ]
        },
        question_5: {
            title: "ตำแหน่งที่ปวด",
            emergency: false,
            question: "ตำแหน่งที่ปวด",
            type: "Choice",
            answer: [
                { type: "c", title: "ไม่มี", question: "ตำแหน่งที่ปวด" },
                { type: "o", title: "อื่นๆ", question: "ตำแหน่งที่ปวด", category: "description" },
            ]
        },
        question_6: {
            title: "อาการร่วม",
            emergency: false,
            question: "อาการร่วม",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "ไข้", question: "อาการร่วม" },
                { type: "c", title: "คัดจมูก", question: "อาการร่วม" },
                { type: "c", title: "น้ำมูก", question: "อาการร่วม" },
                { type: "c", title: "น้ำมูกปนเลือด", question: "อาการร่วม" },
                { type: "c", title: "กลืนแล้วเจ็บ", question: "อาการร่วม" },
                { type: "c", title: "กลืนลำบาก", question: "อาการร่วม" },
                { type: "c", title: "หูอื้อ", question: "อาการร่วม" },
                { type: "c", title: "ไอเป็นเลือด", question: "อาการร่วม" },
                { type: "c", title: "หายใจเสียงดัง", question: "อาการร่วม" },
                { type: "c", title: "หน้าเบี้ยว", question: "อาการร่วม" },
                { type: "o", title: "อื่นๆ", question: "อาการร่วม", category: "description" },
                { type: "c", title: "ไม่มี", question: "อาการร่วม" }
            ]
        },
        question_7: {
            title: "ปัจจัยเสี่ยง",
            emergency: false,
            question: "ปัจจัยเสี่ยง",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "ใช้เข็มฉีดยาร่วมกับผู้อื่น", question: "ปัจจัยเสี่ยง" },
                { type: "c", title: "มีเพศสัมพันธ์ในกลุ่มเสี่ยงโดยไม่ได้ป้องกัน", question: "ปัจจัยเสี่ยง" },
                { type: "c", title: "มีประวัติมะเร็งในครอบครัว", question: "ปัจจัยเสี่ยง" },
                { type: "c", title: "ดื่มเหล้า", question: "ปัจจัยเสี่ยง" },
                { type: "c", title: "สูบบุหรี่", question: "ปัจจัยเสี่ยง" },
                { type: "c", title: "ประวัติฉายแสงบริเวณลำคอ", question: "ปัจจัยเสี่ยง" },
                { type: "c", title: "ไม่มี", question: "ปัจจัยเสี่ยง" }
            ]
        },

    },

    //ก้อนที่ท้องน้อย
    lowerAbsTumorQuestions: {
        question_1: {
            title: "ตำแหน่ง",
            emergency: false,
            question: "ตำแหน่ง",
            type: "Choice",
            answer: [
                { type: "c", title: "ซ้าย", question: "ตำแหน่ง" },
                { type: "c", title: "กลาง", question: "ตำแหน่ง" },
                { type: "c", title: "ขวา", question: "ตำแหน่ง" }
            ]
        },
        question_2: {
            title: "ระยะเวลาคลำพบก้อน",
            emergency: false,
            question: "ระยะเวลาคลำพบก้อน",
            type: "Choice",
            answer: [
                { type: "T", title: "ระยะเวลา", question: "ระยะเวลาคลำพบก้อน" },
                { type: "c", title: "ไม่แน่ใจ", question: "ระยะเวลาคลำพบก้อน" },
            ]
        },
        question_3: {
            title: "ลักษณะก้อน",
            emergency: false,
            question: "ลักษณะก้อน",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "กดเจ็บ", question: "ลักษณะก้อน" },
                { type: "c", title: "โตช้า", question: "ลักษณะก้อน" },
                { type: "c", title: "ขยับได้", question: "ลักษณะก้อน" },
                { type: "c", title: "โตขึ้นเร็ว", question: "ลักษณะก้อน" },
                { type: "o", title: "อื่นๆ", question: "ลักษณะก้อน" },
                { type: "c", title: "ไม่แน่ใจ", question: "ลักษณะก้อน" }
            ]
        },
        question_4: {
            title: "ขนาดของก้อน",
            emergency: false,
            question: "ขนาดของก้อน",
            type: "Choice",
            answer: [
                { type: "o", title: "ขนาดของก้อน", question: "ขนาดของก้อน" },
                { type: "c", title: "ไม่แน่ใจ", question: "ขนาดของก้อน" },
                { type: "c", title: "ข้าม", question: "ขนาดของก้อน" }
            ]
        },
        question_5: {
            title: "อาการร่วม",
            emergency: false,
            question: "อาการร่วม",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "ไข้", question: "อาการร่วม" },
                { type: "c", title: "ตึงคัดเต้านม", question: "อาการร่วม" },
                { type: "c", title: "ตกขาว", question: "อาการร่วม" },
                { type: "c", title: "ท้องโตขึ้น", question: "อาการร่วม" },
                { type: "c", title: "ประจำเดือนมามาก", question: "อาการร่วม" },
                { type: "c", title: "เบื่ออาหาร", question: "อาการร่วม" },
                { type: "c", title: "เลือดออกกะปริดกะปรอยทางช่องคลอด", question: "อาการร่วม" },
                { type: "c", title: "น้ำหนักลด", question: "อาการร่วม" },
                { type: "c", title: "ปวดท้อง", question: "อาการร่วม" },
                { type: "c", title: "คลื่นไส้/อาเจียน", question: "อาการร่วม" },
                { type: "c", title: "ประจำเดือนขาด", question: "อาการร่วม" },
                { type: "c", title: "อุจจาระหรือปัสสาวะผิดปกติ", question: "อาการร่วม" },
                { type: "c", title: "ปวดประจำเดือนมากขึ้น", question: "อาการร่วม" },
                { type: "c", title: "หอบเหนื่อย", question: "อาการร่วม" },
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
                { type: "c", title: "ใช้", question: "การคุมกำเนิด" },
                { type: "c", title: "ไม่ใช้", question: "การคุมกำเนิด" }
            ]
        },
        question_7: {
            title: "ประวัติการตรวจภายในและมะเร็งปากมดลูก",
            emergency: false,
            question: "ประวัติการตรวจภายในและมะเร็งปากมดลูก",
            type: "Choice",
            answer: [
                { type: "c", title: "ไม่มี", question: "ประวัติการตรวจภายในและมะเร็งปากมดลูก" },
                { type: "o", title: "อื่นๆ  ", question: "ประวัติการตรวจภายในและมะเร็งปากมดลูก" }
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
                { type: "c", title: "ไม่แน่ใจ", question: "ประวัติมะเร็งในครอบครัว" },
                { type: "o", title: "อื่นๆ", question: "ประวัติมะเร็งในครอบครัว", category: "description" }
            ]
        },
        question_9: {
            title: "มีประวัติโรคติดเชื้อทางเพศสัมพันธ์",
            emergency: false,
            question: "มีประวัติโรคติดเชื้อทางเพศสัมพันธ์",
            type: "Choice",
            answer: [
                { type: "c", title: "ใช่", question: "มีประวัติโรคติดเชื้อทางเพศสัมพันธ์" },
                { type: "c", title: "ไม่ใช่", question: "มีประวัติโรคติดเชื้อทางเพศสัมพันธ์" }
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

    //กล้ามเนื้ออ่อนแรง
    weakMuscleQuestions: {
        question_1: {
            title: "อาการฉุกเฉิน",
            emergency: false,
            question: "มีอาการเหล่านี้ไหม",
            type: "MultiChoice",
            answer: [
                { type: "E", title: "ครึ่งซีกของร่างกาย", question: "อาการฉุกเฉิน" },
                { type: "E", title: "พูดไม่ชัด", question: "อาการฉุกเฉิน" },
                { type: "E", title: "ปากเบี้ยว", question: "อาการฉุกเฉิน" },
                { type: "E", title: "มุมปากตก", question: "อาการฉุกเฉิน" },
                { type: "E", title: "น้ำลายไหล", question: "อาการฉุกเฉิน" },
                { type: "E", title: "กลืนลำบาก", question: "อาการฉุกเฉิน" },
                { type: "E", title: "เห็นภาพซ้อน", question: "อาการฉุกเฉิน" },
                { type: "E", title: "สำลักอาหาร", question: "อาการฉุกเฉิน" },
                { type: "E", title: "ปวดศีรษะทันทีทันใด", question: "อาการฉุกเฉิน" },
                { type: "E", title: "เดินเซ/ทรงตัวลำบาก", question: "อาการฉุกเฉิน" },
                { type: "c", title: "ไม่มี", question: "อาการฉุกเฉิน" },
            ]
        },
         question_2: {
            title: "การดำเนินของอาการ",
            emergency: false,
            question: "การดำเนินของอาการ",
            type: "Choice",
            answer: [
                { type: "E", title: "ทันที", question: "การดำเนินของอาการ" },
                { type: "c", title: "ค่อยๆเป็น", question: "การดำเนินของอาการ" },
                { type: "c", title: "เป็นๆหายๆ", question: "การดำเนินของอาการ" },
                { type: "c", title: "ไม่แน่ใจ", question: "การดำเนินของอาการ" }
            ]
        },
        question_3: {
            title: "ตำแหน่ง",
            emergency: false,
            question: "ตำแหน่ง",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "แขน", question: "ตำแหน่ง" },
                { type: "c", title: "ขา", question: "ตำแหน่ง" },
            ]
        },
       
        question_4: {
            title: "ลักษณะอาการ",
            emergency: false,
            question: "ลักษณะอาการ",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "หวีผม/หยิบของที่สูงไม่ได้", question: "ลักษณะอาการ" },
                { type: "c", title: "ลุกขึ้น/ขึ้นบันไดลำบาก", question: "ลักษณะอาการ" },
                { type: "c", title: "เดินลากเท้า/เขย่งเท้าไม่ได้", question: "ลักษณะอาการ" },
                { type: "c", title: "กระดกข้อมือไม่ได้", question: "ลักษณะอาการ" },
                { type: "c", title: "หลับตาไม่สนิท", question: "ลักษณะอาการ" },
                { type: "c", title: "ผิวปาก/ทำปากจู๋ไม่ได้	", question: "ลักษณะอาการ" },
                { type: "c", title: "กลั้นปัสสาวะอุจจาระไม่ได้", question: "ลักษณะอาการ" },
                { type: "o", title: "อื่นๆ", question: "ลักษณะอาการ" },
                { type: "c", title: "ไม่มี", question: "ลักษณะอาการ" }
            ]
        },
        question_5: {
            title: "อาการร่วม",
            emergency: false,
            question: "อาการร่วม",
            type: "MultiChoice",
            answer: [
                { type: "c", title: "รู้สึกเหน็บ หนา ที่ผิวหนัง", question: "อาการร่วม" },
                { type: "c", title: "ไข้", question: "อาการร่วม" },
                { type: "c", title: "กล้ามเนื้อลีบ", question: "อาการร่วม" },
                { type: "c", title: "กล้ามเนื้อเต้น", question: "อาการร่วม" },
                { type: "c", title: "ปวดกล้ามเนื้อ", question: "อาการร่วม" },
                { type: "c", title: "ปวดศีรษะ", question: "อาการร่วม" },
                { type: "c", title: "อาเจียน", question: "อาการร่วม" },
                { type: "c", title: "ตาโปน", question: "อาการร่วม" },
                { type: "c", title: "ใจสั่น", question: "อาการร่วม" },
                { type: "c", title: "น้ำหนักลด", question: "อาการร่วม" },
                { type: "c", title: "ปัสสาวะกลางคัน", question: "อาการร่วม" },
                { type: "o", title: "อื่นๆ", question: "อาการร่วม", category: "description" },
                { type: "c", title: "ไม่มี", question: "อาการร่วม" }
            ]
        },
        question_6: {
            title: "ประวัติในอดีต",
            emergency: false,
            question: "ประวัติในอดีต",
            type: 'MultiChoice',
            answer: [
                { type: "c", title: "ทานยาลดไขมัน", question: "ประวัติในอดีต" },
                { type: "c", title: "ทานยารักษาวัณโรค", question: "ประวัติในอดีต" },
                 { type: "c", title: "ไม่มี", question: "ประวัติในอดีต" }
            ]
        },
    },
}

export default questionSource 