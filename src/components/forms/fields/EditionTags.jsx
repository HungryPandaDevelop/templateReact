import { Field } from 'redux-form';
import { useState, useEffect, useRef } from "react"

const TempateInput = (props) => {

  const {
    input,
    meta: { error }
  } = props;

  const {
    label,
    placeholder,
    text,
    textSecond
  } = props.obj;

  const [tags, setTags] = useState([]);

  const inputRef = useRef();

  const onTagsAd = () => {
    setTags([...tags, inputRef.current.value]);
    inputRef.current.value = '';

  };

  const onRemoveTags = (el) => {
    setTags(tags.filter(item => item !== el));


  }
  const [firstLoad, setFirstLoad] = useState(0);

  useEffect(() => {
    if (input.value && firstLoad === 0) {
      setFirstLoad(1)
      setTags(input.value);
    }
    input.onChange(tags);
  }, [tags]);


  return (
    <div className="tags-add-container">
      <div className="tags-container">
        <h3>{label}:</h3>
        <div className="tags-addted">
          {tags.map((item, index) => (
            <span
              key={index}
              className="tag"
              onClick={() => { onRemoveTags(item) }}
            >{item}<em></em></span>))}
        </div>
      </div>
      <div className="tags-add-input">
        <div className="tags-add-hint">
          <h3>{text}</h3>
          <div className="tags-add-hint-text">
            {textSecond}
          </div>
        </div>
        <div className="input-box">
          <input
            className="input-decorate"
            type="text"
            placeholder={placeholder}
            ref={inputRef}
          />
        </div>
        <div
          className="btn btn--blue-border"
          onClick={onTagsAd}
        >Добавить</div>
      </div>
    </div>
  )
}


const EditionTags = ({ obj }) => {

  return <Field
    name={obj.name}
    obj={obj}
    component={TempateInput}
  />;
}

export default EditionTags
