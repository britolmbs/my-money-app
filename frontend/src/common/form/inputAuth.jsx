import React from 'react'
import If from '../operator/if'

export default props => (
    <If test={!props.hide}>
        <div className="form-group has-feedback">
            <input {...props.input}
             type={props.type}
             placeholder={props.placeholder}
             readOnly={props.readOnly}
              className="form-control" />
              <span className={`glyphicon glyphicon-${props.icon} form-control-feedback`}></span>
        </div>
    </If>
)