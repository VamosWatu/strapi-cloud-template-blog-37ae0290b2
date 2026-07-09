import type { Schema, Struct } from '@strapi/strapi';

export interface LearnBulletLine extends Struct.ComponentSchema {
  collectionName: 'components_learn_bullet_lines';
  info: {
    displayName: 'bullet-line';
    icon: 'bulletList';
  };
  attributes: {};
}

export interface LearnFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_learn_faq_items';
  info: {
    displayName: 'faq-item';
  };
  attributes: {
    answer: Schema.Attribute.Blocks & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LearnRuleRealWorld extends Struct.ComponentSchema {
  collectionName: 'components_learn_rule_real_worlds';
  info: {
    displayName: 'rule-real-world';
  };
  attributes: {
    foundersBody: Schema.Attribute.Blocks;
    foundersEyebrow: Schema.Attribute.String;
    foundersQuoteCaption: Schema.Attribute.String;
    foundersSource: Schema.Attribute.Component<'learn.source-link', false>;
    foundersSourceName: Schema.Attribute.String;
    secBody: Schema.Attribute.Blocks;
    secEyebrow: Schema.Attribute.String;
    secSource: Schema.Attribute.Component<'learn.source-link', false>;
    secSourceName: Schema.Attribute.String;
    whatFoundersTalkAbout: Schema.Attribute.Blocks;
    whatSecSays: Schema.Attribute.Blocks;
  };
}

export interface LearnSnapshotCard extends Struct.ComponentSchema {
  collectionName: 'components_learn_snapshot_cards';
  info: {
    displayName: 'snapshot-card';
    icon: 'cloud';
  };
  attributes: {
    highlighter: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LearnSourceLink extends Struct.ComponentSchema {
  collectionName: 'components_learn_source_links';
  info: {
    displayName: 'source-link';
    icon: 'rocket';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'learn.bullet-line': LearnBulletLine;
      'learn.faq-item': LearnFaqItem;
      'learn.rule-real-world': LearnRuleRealWorld;
      'learn.snapshot-card': LearnSnapshotCard;
      'learn.source-link': LearnSourceLink;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
