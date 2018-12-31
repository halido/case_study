import { CaseStudyTemplatePage } from './app.po';

describe('CaseStudy App', function() {
  let page: CaseStudyTemplatePage;

  beforeEach(() => {
    page = new CaseStudyTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
