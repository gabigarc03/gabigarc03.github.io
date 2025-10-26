import { Component } from 'preact';
import View from '../View';
import './styles/Tech.scss';
import '../../card/Card';
import { Portfolio } from '../../../shared/data/portfolio';
import { lazy } from 'preact-iso';

class Tech extends Component {
  render() {
    return (
      <View name='tech'>
        <h1>tech</h1>

        <h2>dev work</h2>
        <div class='card-grid' style='padding-bottom: 32px;'>
          {Portfolio.filter(proj => proj.type === 'dev').map(proj => {
            const projName = proj.href.substring(1);
            const componentName = () => {
              return `${projName[0].toUpperCase()}${projName
                .substring(1)
                .toLowerCase()}`;
            };
            const Component = lazy(
              () => import(`./portfolio/dev/${componentName()}`)
            );
            return (
              <tech-card
                href={proj.href}
                image={require(`../../../assets/images/portfolio/dev/${proj.imageSrc}`)}
                onMouseOver={() => Component.preload()}
              >
                <span slot='title'>{proj.name}</span>
                <span slot='desc'>{proj.desc}</span>
              </tech-card>
            );
          })}
        </div>

        <h2>design work</h2>
        <div class='card-grid'>
          {Portfolio.filter(proj => proj.type === 'design').map(proj => {
            const projName = proj.href.substring(1);
            const componentName = () => {
              return `${projName[0].toUpperCase()}${projName
                .substring(1)
                .toLowerCase()}`;
            };
            const Component = lazy(
              () => import(`./portfolio/design/${componentName()}`)
            );
            return (
              <tech-card
                href={proj.href}
                image={require(`../../../assets/images/portfolio/design/${proj.imageSrc}`)}
                onMouseOver={() => Component.preload()}
                style='--tech-card-object-fit-image: cover;'
              >
                <span slot='title'>{proj.name}</span>
                <span slot='desc'>{proj.desc}</span>
              </tech-card>
            );
          })}
        </div>
      </View>
    );
  }
}

export default Tech;
