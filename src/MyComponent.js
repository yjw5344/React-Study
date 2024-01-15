import PropTypes from 'prop-types';

const MyComponent = ({ name, children }) => {
    return (
        <div>
            안녕하세요, 제 이름은 {name}입니다. <br />
            Children 값은 {children} 입니다.
        </div>
    );
};

MyComponent.defaultProps = {
    name : 'Teddy'
}

MyComponent.propTypes = {
    name : PropTypes.string
};

export default MyComponent;
// 파일 JS 파일에서 MyComponent 모듈을 호출하여 사용하기 위한 정의 방법


// 비구조화 할당 문법
// : 객체에서 값을 추출하는 문법, 구조 분해 문법
// props = { name, children } 이렇게 매개변수로 받아옴
// 비구조화 할당을 이용해서 props 값을 할당
//
