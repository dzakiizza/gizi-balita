const defaultProps = {
  page: "", // page in views/pages
  props: {
    title: "",
    data: {},
    error: "",
  },
};

/**
 *
 * @param {*} res
 * @param {defaultProps} options
 */
const template = (res, pages, options) => {
  res.render(pages ?? "index", {
    ...defaultProps,
    ...options,
  });
};

module.exports = template;
