import Question from './Question.js';
import Answer from './Answer.js';

const title = 'Mock Test 1!'

const Exam = () => {
    return(
        <div className = "exam-container-root">

            <div className = "exam-header">
                <h3>{title}</h3>
            </div>

            <div className = "exam-container">
                <div className="question-window">
                    <Question />

                    <Answer />
                </div>
                <div className="question-list">
                    <li>Q1</li>
                    <li>Q1</li>
                    <li>Q1</li>
                </div>
            </div>

        </div>
        
    );
}
export default Exam;