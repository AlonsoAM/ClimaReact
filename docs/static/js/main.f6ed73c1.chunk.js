/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
// eslint-disable-next-line no-unused-expressions
;(this.webpackJsonpclima = this.webpackJsonpclima || []).push([
  [0],
  {
    14: function (e, t, c) {},
    16: function (e, t, c) {
      'use strict'
      c.r(t)
      var a = c(0),
        n = c(1),
        s = c.n(n),
        i = c(7),
        r = c.n(i),
        l = (c(14), c(5)),
        j = c.n(l),
        d = c(8),
        o = c(2),
        b = function (e) {
          var t = e.resultado,
            c = t.name,
            n = t.main,
            s = 273.15
          return c
            ? Object(a.jsx)(a.Fragment, {
                children: Object(a.jsx)('div', {
                  className: 'card-panel white col s12',
                  children: Object(a.jsxs)('div', {
                    className: 'black-text',
                    children: [
                      Object(a.jsxs)('h2', {
                        children: ['El clima de ', c, ' es:'],
                      }),
                      Object(a.jsxs)('p', {
                        className: 'temperatura',
                        children: [
                          parseFloat(n.temp - s, 10).toFixed(2),
                          ' ',
                          Object(a.jsx)('span', { children: '\u2103' }),
                        ],
                      }),
                      Object(a.jsxs)('p', {
                        children: [
                          'Temp. M\xe1xima: ',
                          parseFloat(n.temp_max - s, 10).toFixed(2),
                          ' ',
                          Object(a.jsx)('span', { children: '\u2103' }),
                        ],
                      }),
                      Object(a.jsxs)('p', {
                        children: [
                          'Temp. M\xednima: ',
                          parseFloat(n.temp_min - s, 10).toFixed(2),
                          ' ',
                          Object(a.jsx)('span', { children: '\u2103' }),
                        ],
                      }),
                    ],
                  }),
                }),
              })
            : null
        },
        u = function (e) {
          var t = e.mensaje
          return Object(a.jsx)(a.Fragment, {
            children: Object(a.jsx)('p', {
              className: 'red darken-4 error',
              children: t,
            }),
          })
        },
        O = c(3),
        h = c(6),
        p = function (e) {
          var t = e.busqueda,
            c = e.setBusqueda,
            s = e.setConsultar,
            i = Object(n.useState)(!1),
            r = Object(o.a)(i, 2),
            l = r[0],
            j = r[1],
            d = t.ciudad,
            b = t.pais,
            p = function (e) {
              c(
                Object(h.a)(
                  Object(h.a)({}, t),
                  {},
                  Object(O.a)({}, e.target.name, e.target.value),
                ),
              )
            }
          return Object(a.jsx)(a.Fragment, {
            children: Object(a.jsxs)('form', {
              onSubmit: function (e) {
                e.preventDefault(),
                  '' === d.trim() || '' === b.trim() ? j(!0) : (j(!1), s(!0))
              },
              children: [
                l
                  ? Object(a.jsx)(u, {
                      mensaje: 'Todos los campos son obligatorios',
                    })
                  : null,
                Object(a.jsxs)('div', {
                  className: 'input-field col s12',
                  children: [
                    Object(a.jsx)('input', {
                      type: 'text',
                      name: 'ciudad',
                      id: 'ciudad',
                      value: d,
                      onChange: p,
                    }),
                    Object(a.jsx)('label', {
                      htmlFor: 'ciudad',
                      children: 'Ciudad:',
                    }),
                  ],
                }),
                Object(a.jsxs)('div', {
                  className: 'input-field col s12',
                  children: [
                    Object(a.jsxs)('select', {
                      name: 'pais',
                      id: 'pais',
                      value: b,
                      onChange: p,
                      children: [
                        Object(a.jsx)('option', {
                          value: '',
                          children: '-- Seleccione un pa\xeds --',
                        }),
                        Object(a.jsx)('option', {
                          value: 'PE',
                          children: 'Per\xfa',
                        }),
                        Object(a.jsx)('option', {
                          value: 'US',
                          children: 'Estados Unidos',
                        }),
                        Object(a.jsx)('option', {
                          value: 'MX',
                          children: 'M\xe9xico',
                        }),
                        Object(a.jsx)('option', {
                          value: 'AR',
                          children: 'Argentina',
                        }),
                        Object(a.jsx)('option', {
                          value: 'CO',
                          children: 'Colombia',
                        }),
                        Object(a.jsx)('option', {
                          value: 'CR',
                          children: 'Costa Rica',
                        }),
                        Object(a.jsx)('option', {
                          value: 'ES',
                          children: 'Espa\xf1a',
                        }),
                      ],
                    }),
                    Object(a.jsx)('label', {
                      htmlFor: 'pais',
                      children: 'Pa\xeds:',
                    }),
                  ],
                }),
                Object(a.jsx)('div', {
                  className: 'input-field col s12',
                  children: Object(a.jsx)('button', {
                    type: 'submit',
                    className:
                      'waves-effect waves-light btn-large btn-block orange accent-8 col s12',
                    children: 'Buscar Clima',
                  }),
                }),
              ],
            }),
          })
        },
        m = function (e) {
          var t = e.titulo
          return Object(a.jsx)(a.Fragment, {
            children: Object(a.jsx)('nav', {
              children: Object(a.jsx)('div', {
                className: 'nav-wrapper light-blue darken-2',
                children: Object(a.jsx)('a', {
                  href: '#!',
                  className: 'brand-logo',
                  children: t,
                }),
              }),
            }),
          })
        }
      var x = function () {
          var e,
            t = Object(n.useState)({ ciudad: '', pais: '' }),
            c = Object(o.a)(t, 2),
            s = c[0],
            i = c[1],
            r = Object(n.useState)(!1),
            l = Object(o.a)(r, 2),
            O = l[0],
            h = l[1],
            x = Object(n.useState)(!1),
            v = Object(o.a)(x, 2),
            f = v[0],
            g = v[1],
            F = s.ciudad,
            N = s.pais,
            C = Object(n.useState)({}),
            w = Object(o.a)(C, 2),
            S = w[0],
            k = w[1]
          return (
            Object(n.useEffect)(
              function () {
                ;(function () {
                  var e = Object(d.a)(
                    j.a.mark(function e() {
                      var t, c, a
                      return j.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!O) {
                                e.next = 12
                                break
                              }
                              return (
                                'adb1d16777c24e5abe22a38ee9363518',
                                (t = 'https://api.openweathermap.org/data/2.5/weather?q='
                                  .concat(F, ',')
                                  .concat(N, '&appid=')
                                  .concat('adb1d16777c24e5abe22a38ee9363518')),
                                (e.next = 5),
                                fetch(t)
                              )
                            case 5:
                              return (c = e.sent), (e.next = 8), c.json()
                            case 8:
                              ;(a = e.sent),
                                k(a),
                                h(!1),
                                '404' === a.cod ? g(!0) : g(!1)
                            case 12:
                            case 'end':
                              return e.stop()
                          }
                      }, e)
                    }),
                  )
                  return function () {
                    return e.apply(this, arguments)
                  }
                })()()
              },
              [O],
            ),
            (e = f
              ? Object(a.jsx)(u, { mensaje: 'No hay resultados' })
              : Object(a.jsx)(b, { resultado: S })),
            Object(a.jsxs)(a.Fragment, {
              children: [
                Object(a.jsx)(m, { titulo: 'Clima React App' }),
                Object(a.jsx)('div', {
                  className: 'contenedor-form',
                  children: Object(a.jsx)('div', {
                    className: 'container',
                    children: Object(a.jsxs)('div', {
                      className: 'row',
                      children: [
                        Object(a.jsx)('div', {
                          className: 'col m6 s12',
                          children: Object(a.jsx)(p, {
                            busqueda: s,
                            setBusqueda: i,
                            setConsultar: h,
                          }),
                        }),
                        Object(a.jsx)('div', {
                          className: 'col m6 s12',
                          children: e,
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            })
          )
        },
        v = function (e) {
          e &&
            e instanceof Function &&
            c
              .e(3)
              .then(c.bind(null, 17))
              .then(function (t) {
                var c = t.getCLS,
                  a = t.getFID,
                  n = t.getFCP,
                  s = t.getLCP,
                  i = t.getTTFB
                c(e), a(e), n(e), s(e), i(e)
              })
        }
      r.a.render(
        Object(a.jsx)(s.a.StrictMode, { children: Object(a.jsx)(x, {}) }),
        document.getElementById('root'),
      ),
        v()
    },
  },
  [[16, 1, 2]],
])
//# sourceMappingURL=main.f6ed73c1.chunk.js.map
