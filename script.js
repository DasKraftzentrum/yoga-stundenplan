body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
}

h1 {
    text-align: center;
    margin: 20px;
}

.timetable {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
}

.day-column {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    width: 180px;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
}

.course {
    background-color: #e0f7fa;
    border-radius: 6px;
    padding: 10px;
    margin: 10px 0;
    cursor: pointer;
    transition: background 0.3s ease;
}

.course:hover {
    background-color: #b2ebf2;
}

.popup {
    display: none;
    position: fixed;
    z-index: 10;
    left: 0; top: 0;
    width: 100%; height: 100%;
    background-color: rgba(0,0,0,0.5);
}

.popup-content {
    background-color: white;
    margin: 15% auto;
    padding: 20px;
    border-radius: 8px;
    width: 90%;
    max-width: 400px;
    position: relative;
}

.close {
    position: absolute;
    right: 15px;
    top: 10px;
    font-size: 24px;
    cursor: pointer;
}
