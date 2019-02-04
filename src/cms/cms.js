import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerPreviewTemplate('home', AboutPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('activites', AboutPagePreview)
CMS.registerPreviewTemplate('info-aspebr', AboutPagePreview)
CMS.registerPreviewTemplate('contact', AboutPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
