const pages = {
    //ไอเป็นเลือด
    coughBloodQuestions: {
        page_1: {
            questionSet: ['question_1'],
            nextNormal: { next: 'page_2' }
        },
        page_2: {
            questionSet: ['question_2', 'question_3'],
            nextNormal: { next: 'page_3' }
        },
        page_3: {
            questionSet: ['question_4'],
            nextNormal: { next: 'end' }
        }
    },
    //ไอ
    coughQuestions: {
        page_1: {
            questionSet: ['question_1'],
            nextNormal: { next: 'page_2' }
        },
        page_2: {
            questionSet: ['question_2', 'question_3'],
            nextNormal: { next: 'page_3' }
        },
        page_3: {
            questionSet: ['question_4', 'question_5'],
            nextNormal: { next: 'page_4' }
        },
        page_4: {
            questionSet: ['question_6', 'question_7'],
            nextNormal: { next: 'page_5' }
        },
        page_5: {
            questionSet: ['question_8'],
            nextNormal: { next: 'end' }
        },
    },
    //อาเจียนเป็นเลือด
    vomitBloodQuestions: {
        page_1: {
            questionSet: ['question_1'],
            nextNormal: { next: 'page_2' }
        },
        page_2: {
            questionSet: ['question_2'],
            nextNormal: { next: 'page_3' }
        },
        page_3: {
            questionSet: ['question_3', 'question_4'],
            nextNormal: { next: 'page_4' }
        },
        page_4: {
            questionSet: ['question_5', 'question_6'],
            nextNormal: { next: 'end' }
        },
    },
    //เหนื่อยง่าย
    fatigueQuestions: {
        page_1: {
            questionSet: ['question_1'],
            nextNormal: { next: 'page_2' }
        },
        page_2: {
            questionSet: ['question_2'],
            nextNormal: { next: 'page_3' }
        },
        page_3: {
            questionSet: ['question_3', 'question_4'],
            nextNormal: { next: 'page_4' }
        },
        page_4: {
            questionSet: ['question_5', 'question_6'],
            nextNormal: { next: 'page_4' }
        },
        page_5: {
            questionSet: ['question_7', 'question_8'],
            nextNormal: { next: 'end' }
        }
    },
    //แสบร้อนกลางอก
    heartBurnQuestions: {
        page_1: {
            questionSet: ['question_1'],
            nextNormal: { next: 'end' }
        }
    },
    //เวียนหัวบ้านหมุน
    vertigoQuestions: {
        page_1: {
            questionSet: ['question_1'],
            nextNormal: { next: 'page_2' }
        },
        page_2: {
            questionSet: ['question_2'],
            nextNormal: { next: 'page_3' }
        },
        page_3: {
            questionSet: ['question_3', 'question_4'],
            nextNormal: { next: 'page_4' }
        },
        page_4: {
            questionSet: ['question_5', 'question_6'],
            nextNormal: { next: 'end' }
        },
    },
    //เลือดออกผิดปกติ
    bleedingQuestions: {
        page_1: {
            questionSet: ['question_1'],
            nextNormal: { next: 'page_2' }
        },
        page_2: {
            questionSet: ['question_2'],
            nextNormal: { next: 'page_3' }
        },
        page_3: {
            questionSet: ['question_3', 'question_4'],
            nextNormal: { next: 'page_4' }
        },
        page_4: {
            questionSet: ['question_5'],
            nextNormal: { next: 'end' }
        },
    },
    //เลือดออกทางช่องคลอด
    vaginalBleedingQuestions: {
        page_1: {
            questionSet: ['question_1', 'question_2'],
            nextNormal: { next: 'page_2' }
        },
        page_2: {
            questionSet: ['question_3'],
            nextNormal: { next: 'page_3' }
        },
        page_3: {
            questionSet: ['question_4', 'question_5'],
            nextNormal: { next: 'page_4' }
        },
        page_4: {
            questionSet: ['question_6', 'question_7'],
            nextNormal: { next: 'page_5' }
        },
        page_5: {
            questionSet: ['question_8', 'question_9'],
            nextNormal: { next: 'page_6' }
        },
        page_6: {
            questionSet: ['question_10'],
            nextNormal: { next: 'end' },
            nextSpecial: [
                { title: 'มาปกติ', next: 'page_7' }
            ]
        },
        page_7: {
            questionSet: ['question_11', 'question_12'],
            nextNormal: { next: 'page_8' }
        },
        page_8: {
            questionSet: ['question_13', 'question_14'],
            nextNormal: { next: 'end' }
        },
    },
    //มึนหัวไม่มีบ้านหมุน
    noVertigoQuestions: {
        page_1: {
            questionSet: ['question_1', 'question_2'],
            nextNormal: { next: 'end' }
        },
    },
    //ผื่นหรือตุ่มผิวหนัง
    rashQuestions: {
        page_1: {
            questionSet: ['question_1'],
            nextNormal: { next: 'page_2' }
        },
        page_2: {
            questionSet: ['question_2'],
            nextNormal: { next: 'page_3' }
        },
        page_3: {
            questionSet: ['question_3'],
            nextNormal: { next: 'page_4' }
        },
        page_4: {
            questionSet: ['question_4', 'question_5'],
            nextNormal: { next: 'page_5' }
        },
        page_5: {
            questionSet: ['question_6', 'question_7'],
            nextNormal: { next: 'end' }
        },
    },
    //ลืมทานยาคุม
    birthControlPillQuestions: {
        page_1: {
            questionSet: ['question_1', 'question_2'],
            nextNormal: { next: 'page_2' }
        },
        page_2: {
            questionSet: ['question_3', 'question_4'],
            nextNormal: { next: 'page_3' }
        },
        page_3: {
            questionSet: ['question_5', 'question_6'],
            nextNormal: { next: 'page_4' }
        },
        page_4: {
            questionSet: ['question_7', 'question_8'],
            nextNormal: { next: 'end' }
        },
    },
    //เป็นลม
    faintQuestions: {
        page_1: {
            questionSet: ['question_1'],
            nextNormal: { next: 'page_2' }
        },
        page_2: {
            questionSet: ['question_2', 'question_3'],
            nextNormal: { next: 'page_3' }
        },
        page_3: {
            questionSet: ['question_4', 'question_5'],
            nextNormal: { next: 'page_4' }
        },
        page_4: {
            questionSet: ['question_6', 'question_7'],
            nextNormal: { next: 'page_5' }
        },
        page_5: {
            questionSet: ['question_8', 'question_9'],
            nextNormal: { next: 'page_6' }
        },
        page_6: {
            questionSet: ['question_10'],
            nextNormal: { next: 'end' }
        },
    },
    //ปวดท้อง
    stomachAcheQuestions: {
        page_1: {
            questionSet: ['question_1'],
            nextNormal: { next: 'page_2' }
        },
        page_2: {
            questionSet: ['question_2', 'question_3'],
            nextNormal: { next: 'page_3' }
        },
        page_3: {
            questionSet: ['question_4', 'question_5'],
            nextNormal: { next: 'page_4' }
        },
        page_4: {
            questionSet: ['question_6', 'question_7'],
            nextNormal: { next: 'page_5' }
        },
        page_5: {
            questionSet: ['question_8', 'question_9'],
            nextNormal: { next: 'page_6' }
        },
        page_6: {
            questionSet: ['question_10'],
            nextNormal: { next: 'page_7' }
        },
        page_7: {
            questionSet: ['question_11', 'question_12'],
            nextNormal: { next: 'page_8' }
        },
        page_8: {
            questionSet: ['question_13'],
            nextNormal: { next: 'end' }
        }
    },
    //ปัสสาวะแสบขัด
    dysuriaQuestions: {
        page_1: {
            questionSet: ['question_1'],
            nextNormal: { next: 'page_2' }
        },
        page_2: {
            questionSet: ['question_2', 'question_3'],
            nextNormal: { next: 'page_3' }
        },
        page_3: {
            questionSet: ['question_4', 'question_5'],
            nextNormal: { next: 'page_4' }
        },
        page_4: {
            questionSet: ['question_6'],
            nextNormal: { next: 'end' }
        }
    },

    //ปัสสาวะมาก
    polyuriaQuestions: {
        page_1: {
            questionSet: ['question_1', 'question_2'],
            nextNormal: { next: 'page_2' }
        },
        page_2: {
            questionSet: ['question_3', 'question_4'],
            nextNormal: { next: 'page_3' }
        },
        page_3: {
            questionSet: ['question_5'],
            nextNormal: { next: 'end' }
        },
    },

    //ปัสสาวะเป็นเลือด
    hematuriaQuestions: {
        page_1: {
            questionSet: ['question_1', 'question_2'],
            nextNormal: { next: 'page_2' }
        },
        page_2: {
            questionSet: ['question_3', 'question_4'],
            nextNormal: { next: 'page_3' }
        },
        page_3: {
            questionSet: ['question_5'],
            nextNormal: { next: 'end' }
        },
    },

    //ปวดหัว
    headacheQuestions: {
        page_1: {
            questionSet: ['question_1'],
            nextNormal: { next: 'page_2' }
        },
        page_2: {
            questionSet: ['question_2'],
            nextNormal: { next: 'page_3' }
        },
        page_3: {
            questionSet: ['question_3', 'question_4'],
            nextNormal: { next: 'page_4' }
        },
        page_4: {
            questionSet: ['question_5', 'question_6'],
            nextNormal: { next: 'page_5' }
        },
        page_5: {
            questionSet: ['question_7', 'question_8'],
            nextNormal: { next: 'page_6' }
        },
        page_6: {
            questionSet: ['question_9'],
            nextNormal: { next: 'page_7' }
        },
        page_7: {
            questionSet: ['question_10'],
            nextNormal: { next: 'page_8' }
        },
        page_8: {
            questionSet: ['question_11'],
            nextNormal: { next: 'end' }
        },
    },

    //ปวดหลัง
    backPainQuestions: {
        page_1: {
            questionSet: ['question_1', 'question_2'],
            nextNormal: { next: 'page_2' }
        },
        page_2: {
            questionSet: ['question_3', 'question_4'],
            nextNormal: { next: 'page_3' }
        },
        page_3: {
            questionSet: ['question_5', 'question_6'],
            nextNormal: { next: 'page_4' }
        },
        page_4: {
            questionSet: ['question_7', 'question_8'],
            nextNormal: { next: 'page_5' }
        },
        page_5: {
            questionSet: ['question_9'],
            nextNormal: { next: 'end' }
        },
    },

    //ปวดเมื่อยกล้ามเนื้อ
    musclePainQuestions: {
        page_1: {
            questionSet: ['question_1', 'question_2'],
            nextNormal: { next: 'page_2' }
        },
        page_2: {
            questionSet: ['question_3', 'question_4'],
            nextNormal: { next: 'page_3' }
        },
        page_3: {
            questionSet: ['question_5', 'question_6'],
            nextNormal: { next: 'end' }
        },
    },

    //ปวดท้องน้อย ปวดประจำเดือน
    periodCrampsQuestions: {
        page_1: {
            questionSet: ['question_1'],
            nextNormal: { next: 'page_2' }
        },
        page_2: {
            questionSet: ['question_2'],
            nextNormal: { next: 'page_3' }
        },
        page_3: {
            questionSet: ['question_3', 'question_4'],
            nextNormal: { next: 'page_4' }
        },
        page_4: {
            questionSet: ['question_5', 'question_6'],
            nextNormal: { next: 'page_5' }
        },
        page_5: {
            questionSet: ['question_7', 'question_8'],
            nextNormal: { next: 'page_6' }
        },
        page_6: {
            questionSet: ['question_9'],
            nextNormal: { next: 'page_7' },
        },
        page_7: {
            questionSet: ['question_10'],
            nextNormal: { next: 'end' },
            nextSpecial: [
                { title: 'มาปกติ', next: 'page_8' }
            ]
        },
        page_8: {
            questionSet: ['question_11', 'question_12'],
            nextNormal: { next: 'page_9' }
        },
        page_9: {
            questionSet: ['question_13', 'question_14'],
            nextNormal: { next: 'end' }
        },
    },

    //ปวดคอ
    neckPainQuestions: {
        page_1: {
            questionSet: ['question_1'],
            nextNormal: { next: 'page_2' }
        },
        page_2: {
            questionSet: ['question_2', 'question_3'],
            nextNormal: { next: 'page_3' }
        },
        page_3: {
            questionSet: ['question_4', 'question_5'],
            nextNormal: { next: 'page_4' }
        },
        page_4: {
            questionSet: ['question_6', 'question_7'],
            nextNormal: { next: 'page_5' }
        },
        page_5: {
            questionSet: ['question_8', 'question_9'],
            nextNormal: { next: 'page_6' }
        },
        page_6: {
            questionSet: ['question_10'],
            nextNormal: { next: 'end' },
        },
    },

    //ปวดข้อ
    jointPainQuestions: {
        page_1: {
            questionSet: ['question_1', 'question_2'],
            nextNormal: { next: 'page_2' }
        },
        page_2: {
            questionSet: ['question_3', 'question_4'],
            nextNormal: { next: 'page_3' }
        },
        page_3: {
            questionSet: ['question_5', 'question_6'],
            nextNormal: { next: 'end' }
        },
    },

    //บวม
    swollenQuestions: {
        page_1: {
            questionSet: ['question_1'],
            nextNormal: { next: 'page_2' }
        },
        page_2: {
            questionSet: ['question_2'],
            nextNormal: { next: 'page_3' }
        },
        page_3: {
            questionSet: ['question_3', 'question_4'],
            nextNormal: { next: 'page_4' }
        },
        page_4: {
            questionSet: ['question_5', 'question_6'],
            nextNormal: { next: 'page_5' }
        },
        page_5: {
            questionSet: ['question_7'],
            nextNormal: { next: 'end' }
        },
    },

    //ถ่ายเป็นเลือดสด
    bloodyDiarrheaQuestions: {
        page_1: {
            questionSet: ['question_1'],
            nextNormal: { next: 'page_2' }
        },
        page_2: {
            questionSet: ['question_2'],
            nextNormal: { next: 'page_3' }
        },
        page_3: {
            questionSet: ['question_3', 'question_4'],
            nextNormal: { next: 'page_4' }
        },
        page_4: {
            questionSet: ['question_5', 'question_6'],
            nextNormal: { next: 'page_5' }
        },
        page_5: {
            questionSet: ['question_7', 'question_8'],
            nextNormal: { next: 'page_6' }
        },
        page_6: {
            questionSet: ['question_9'],
            nextNormal: { next: 'end' }
        },
    },

    //ท้องเสีย
    diarrheaQuestions: {
        page_1: {
            questionSet: ['question_1'],
            nextNormal: { next: 'page_2' }
        },
        page_2: {
            questionSet: ['question_2'],
            nextNormal: { next: 'page_3' }
        },
        page_3: {
            questionSet: ['question_3'],
            nextNormal: { next: 'page_4' },
            nextSpecial: [
                { title: 'มากกว่า 2 อาทิตย์', next: 'page_6' }
            ]
        },
        page_4: {
            questionSet: ['question_4', 'question_5'],
            nextNormal: { next: 'page_5' }
        },
        page_5: {
            questionSet: ['question_6'],
            nextNormal: { next: 'end' }
        },
        page_6: {
            questionSet: ['question_7', 'question_8'],
            nextNormal: { next: 'page_7' }
        },
        page_7: {
            questionSet: ['question_5', 'question_6'],
            nextNormal: { next: 'end' }
        },
    },

    //ตาแดง
    redEyesQuestions: {
        page_1: {
            questionSet: ['question_1'],
            nextNormal: { next: 'page_2' }
        },
        page_2: {
            questionSet: ['question_2'],
            nextNormal: { next: 'page_3' }
        },
        page_3: {
            questionSet: ['question_3', 'question_4'],
            nextNormal: { next: 'page_4' }
        },
        page_4: {
            questionSet: ['question_5'],
            nextNormal: { next: 'end' }
        },
    },

    //ตัวเหลืองตาเหลือง
    yellowSkinEyesQuestions: {
        page_1: {
            questionSet: ['question_1'],
            nextNormal: { next: 'page_2' }
        },
        page_2: {
            questionSet: ['question_2'],
            nextNormal: { next: 'page_3' }
        },
        page_3: {
            questionSet: ['question_3', 'question_4'],
            nextNormal: { next: 'page_4' }
        },
        page_4: {
            questionSet: ['question_5', 'question_6'],
            nextNormal: { next: 'end' }
        },
    },

    //ตกขาว
    leucorrhoeaQuestions: {
        page_1: {
            questionSet: ['question_1', 'question_2'],
            nextNormal: { next: 'page_2' }
        },
        page_2: {
            questionSet: ['question_3', 'question_4'],
            nextNormal: { next: 'page_3' }
        },
        page_3: {
            questionSet: ['question_5', 'question_6'],
            nextNormal: { next: 'page_4' }
        },
        page_4: {
            questionSet: ['question_7', 'question_8'],
            nextNormal: { next: 'page_5' }
        },
        page_5: {
            questionSet: ['question_9'],
            nextNormal: { next: 'page_6' }
        },
        page_6: {
            questionSet: ['question_10'],
            nextNormal: { next: 'end' },
            nextSpecial: [
                { title: 'มาปกติ', next: 'page_7' }
            ]
        },
        page_7: {
            questionSet: ['question_11', 'question_12'],
            nextNormal: { next: 'page_8' },

        },
        page_8: {
            questionSet: ['question_13'],
            nextNormal: { next: 'end' }
        },
    },

    //ชัก
    seizuresQuestions: {
        page_1: {
            questionSet: ['question_1', 'question_2'],
            nextNormal: { next: 'page_2' }
        },
        page_2: {
            questionSet: ['question_3', 'question_4'],
            nextNormal: { next: 'page_3' }
        },
        page_3: {
            questionSet: ['question_5', 'question_6'],
            nextNormal: { next: 'page_4' }
        },
        page_4: {
            questionSet: ['question_7', 'question_8'],
            nextNormal: { next: 'end' }
        },
    },

       //ใจสั่น
    palpitationQuestions: {
        page_1: {
            questionSet: ['question_1'],
            nextNormal: { next: 'page_2' }
        },
        page_2: {
            questionSet: ['question_2', 'question_3'],
            nextNormal: { next: 'page_3' }
        },
        page_3: {
            questionSet: ['question_4', 'question_5'],
            nextNormal: { next: 'page_4' }
        },
        page_4: {
            questionSet: ['question_6'],
            nextNormal: { next: 'end' }
        },
    },

     //แน่นหน้าอก
    chestBurnQuestions: {
        page_1: {
            questionSet: ['question_1'],
            nextNormal: { next: 'page_2' }
        },
        page_2: {
            questionSet: ['question_2', 'question_3'],
            nextNormal: { next: 'page_3' }
        },
        page_3: {
            questionSet: ['question_4', 'question_5'],
            nextNormal: { next: 'page_4' }
        },
        page_4: {
            questionSet: ['question_6', 'question_7'],
            nextNormal: { next: 'page_5' }
        },
        page_5: {
            questionSet: ['question_8', 'question_9'],
            nextNormal: { next: 'page_6' }
        },
        page_6: {
            questionSet: ['question_10', 'question_11'],
            nextNormal: { next: 'end' }
        },
    },

    //เจ็บคอ
    soreThroatQuestions: {
        page_1: {
            questionSet: ['question_1', 'question_2'],
            nextNormal: { next: 'end' }
        },
    },

    //จุกเสียดใต้ลิ้นปี่
    epigastricQuestions: {
        page_1: {
            questionSet: ['question_1', 'question_2'],
            nextNormal: { next: 'page_2' }
        },
          page_2: {
            questionSet: ['question_3', 'question_4'],
            nextNormal: { next: 'end' }
        },
    },

    //คลื่นไส้ อาเจียน
    nauseaQuestions: {
        page_1: {
            questionSet: ['question_1'],
            nextNormal: { next: 'page_2' }
        },
        page_2: {
            questionSet: ['question_2', 'question_3'],
            nextNormal: { next: 'page_3' }
        },
        page_3: {
            questionSet: ['question_4', 'question_5'],
            nextNormal: { next: 'page_4' }
        },
        page_4: {
            questionSet: ['question_6'],
            nextNormal: { next: 'page_5' }
        },
        page_5: {
            questionSet: ['question_7'],
            nextNormal: { next: 'page_7' },
             nextSpecial: [
                { title: 'ใช่', next: 'page_6' }
            ]
        },
        page_6: {
            questionSet: ['question_8'],
            nextNormal: { next: 'page_7' }
        },
        page_7: {
            questionSet: ['question_9', 'question_10'],
            nextNormal: { next: 'end' }
        },
    },

     //ไข้
    coldQuestions: {
        page_1: {
            questionSet: ['question_1'],
            nextNormal: { next: 'page_2' }
        },
        page_2: {
            questionSet: ['question_2'],
            nextNormal: { next: 'page_3' }
        },
        page_3: {
            questionSet: ['question_3'],
            nextNormal: { next: 'page_4' },
            nextSpecial: [
                { title: 'มากกว่า 24 ชั่วโมง', next: 'page_5' }
            ]
        },
        page_4: {
            questionSet: ['question_4'],
            nextNormal: { next: 'page_6' }
        },
        page_5: {
            questionSet: ['question_5'],
            nextNormal: { next: 'page_6' },
        },
        page_6: {
            questionSet: ['question_6', 'question_7'],
            nextNormal: { next: 'end' }
        },
    },

    //การนอนหลับผิดปกติ
    insomniaQuestions: {
        page_1: {
            questionSet: ['question_1', 'question_2'],
            nextNormal: { next: 'page_2' }
        },
        page_2: {
            questionSet: ['question_3', 'question_4'],
            nextNormal: { next: 'page_3' }
        },
        page_3: {
            questionSet: ['question_5', 'question_6'],
            nextNormal: { next: 'page_4' }
        },
        page_4: {
            questionSet: ['question_7'],
            nextNormal: { next: 'page_5' },
            nextSpecial: [
                { title: 'ไม่ใช่', next: 'page_6' }
            ]
        },
        page_5: {
            questionSet: ['question_8'],
            nextNormal: { next: 'page_6' },
        },
        page_6: {
            questionSet: ['question_9', 'question_10'],
            nextNormal: { next: 'page_7' }
        },
        page_7: {
            questionSet: ['question_11', 'question_12'],
            nextNormal: { next: 'end' }
        },
    },

}

export default pages