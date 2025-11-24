import { Component, Fragment } from 'preact';

/**
 * Resume role props
 * - company
 * - title
 * - startDate
 * - endDate
 */
interface ResumeRoleProps {
  company: string;
  title: string;
  startDate: string;
  endDate?: string;
}

export default class ResumeRole extends Component<ResumeRoleProps> {
  constructor(props: ResumeRoleProps) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <p>
          <strong>{this.props.title}</strong>, {this.props.company}{' '}
          <em>
            ({this.props.startDate}
            {this.props.endDate != undefined
              ? ` - ${this.props.endDate}`
              : null}
            )
          </em>
        </p>
        {this.props.children}
      </Fragment>
    );
  }
}
