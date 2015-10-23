package com.github.andrewoma.react

fun <T> initProps(properties: T, init: T.() -> Unit): T {
    properties.init()
    return flatten(properties)
}

public fun Component.text(value: String, init: Component.() -> Unit = {}): Component
        = construct(Component({ value }), init)

@native("React.DOM.a")
@Suppress("UNUSED_PARAMETER")
fun reactA(props: AProperties, vararg children: Any?): ReactComponent<AProperties, Any> = noImpl

public fun Component.a(properties: AProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactA(initProps(AProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.abbr")
@Suppress("UNUSED_PARAMETER")
fun reactAbbr(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.abbr(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactAbbr(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.address")
@Suppress("UNUSED_PARAMETER")
fun reactAddress(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.address(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactAddress(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.area")
@Suppress("UNUSED_PARAMETER")
fun reactArea(props: AreaProperties, vararg children: Any?): ReactComponent<AreaProperties, Any> = noImpl

public fun Component.area(properties: AreaProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactArea(initProps(AreaProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.article")
@Suppress("UNUSED_PARAMETER")
fun reactArticle(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.article(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactArticle(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.aside")
@Suppress("UNUSED_PARAMETER")
fun reactAside(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.aside(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactAside(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.audio")
@Suppress("UNUSED_PARAMETER")
fun reactAudio(props: AudioProperties, vararg children: Any?): ReactComponent<AudioProperties, Any> = noImpl

public fun Component.audio(properties: AudioProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactAudio(initProps(AudioProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.b")
@Suppress("UNUSED_PARAMETER")
fun reactB(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.b(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactB(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.base")
@Suppress("UNUSED_PARAMETER")
fun reactBase(props: BaseProperties, vararg children: Any?): ReactComponent<BaseProperties, Any> = noImpl

public fun Component.base(properties: BaseProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactBase(initProps(BaseProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.bdi")
@Suppress("UNUSED_PARAMETER")
fun reactBdi(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.bdi(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactBdi(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.bdo")
@Suppress("UNUSED_PARAMETER")
fun reactBdo(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.bdo(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactBdo(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.big")
@Suppress("UNUSED_PARAMETER")
fun reactBig(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.big(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactBig(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.blockquote")
@Suppress("UNUSED_PARAMETER")
fun reactBlockquote(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.blockquote(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactBlockquote(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.body")
@Suppress("UNUSED_PARAMETER")
fun reactBody(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.body(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactBody(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.br")
@Suppress("UNUSED_PARAMETER")
fun reactBr(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.br(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactBr(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.button")
@Suppress("UNUSED_PARAMETER")
fun reactButton(props: ButtonProperties, vararg children: Any?): ReactComponent<ButtonProperties, Any> = noImpl

public fun Component.button(properties: ButtonProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactButton(initProps(ButtonProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.canvas")
@Suppress("UNUSED_PARAMETER")
fun reactCanvas(props: CanvasProperties, vararg children: Any?): ReactComponent<CanvasProperties, Any> = noImpl

public fun Component.canvas(properties: CanvasProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactCanvas(initProps(CanvasProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.caption")
@Suppress("UNUSED_PARAMETER")
fun reactCaption(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.caption(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactCaption(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.cite")
@Suppress("UNUSED_PARAMETER")
fun reactCite(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.cite(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactCite(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.code")
@Suppress("UNUSED_PARAMETER")
fun reactCode(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.code(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactCode(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.col")
@Suppress("UNUSED_PARAMETER")
fun reactCol(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.col(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactCol(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.colgroup")
@Suppress("UNUSED_PARAMETER")
fun reactColgroup(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.colgroup(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactColgroup(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.data")
@Suppress("UNUSED_PARAMETER")
fun reactData(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.data(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactData(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.datalist")
@Suppress("UNUSED_PARAMETER")
fun reactDatalist(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.datalist(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactDatalist(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.dd")
@Suppress("UNUSED_PARAMETER")
fun reactDd(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.dd(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactDd(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.del")
@Suppress("UNUSED_PARAMETER")
fun reactDel(props: DelProperties, vararg children: Any?): ReactComponent<DelProperties, Any> = noImpl

public fun Component.del(properties: DelProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactDel(initProps(DelProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.details")
@Suppress("UNUSED_PARAMETER")
fun reactDetails(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.details(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactDetails(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.dfn")
@Suppress("UNUSED_PARAMETER")
fun reactDfn(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.dfn(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactDfn(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.div")
@Suppress("UNUSED_PARAMETER")
fun reactDiv(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.div(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactDiv(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.dl")
@Suppress("UNUSED_PARAMETER")
fun reactDl(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.dl(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactDl(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.dt")
@Suppress("UNUSED_PARAMETER")
fun reactDt(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.dt(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactDt(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.em")
@Suppress("UNUSED_PARAMETER")
fun reactEm(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.em(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactEm(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.embed")
@Suppress("UNUSED_PARAMETER")
fun reactEmbed(props: EmbedProperties, vararg children: Any?): ReactComponent<EmbedProperties, Any> = noImpl

public fun Component.embed(properties: EmbedProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactEmbed(initProps(EmbedProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.fieldset")
@Suppress("UNUSED_PARAMETER")
fun reactFieldset(props: FieldsetProperties, vararg children: Any?): ReactComponent<FieldsetProperties, Any> = noImpl

public fun Component.fieldset(properties: FieldsetProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactFieldset(initProps(FieldsetProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.figcaption")
@Suppress("UNUSED_PARAMETER")
fun reactFigcaption(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.figcaption(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactFigcaption(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.figure")
@Suppress("UNUSED_PARAMETER")
fun reactFigure(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.figure(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactFigure(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.footer")
@Suppress("UNUSED_PARAMETER")
fun reactFooter(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.footer(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactFooter(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.form")
@Suppress("UNUSED_PARAMETER")
fun reactForm(props: FormProperties, vararg children: Any?): ReactComponent<FormProperties, Any> = noImpl

public fun Component.form(properties: FormProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactForm(initProps(FormProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.h1")
@Suppress("UNUSED_PARAMETER")
fun reactH1(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.h1(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactH1(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.h2")
@Suppress("UNUSED_PARAMETER")
fun reactH2(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.h2(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactH2(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.h3")
@Suppress("UNUSED_PARAMETER")
fun reactH3(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.h3(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactH3(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.h4")
@Suppress("UNUSED_PARAMETER")
fun reactH4(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.h4(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactH4(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.h5")
@Suppress("UNUSED_PARAMETER")
fun reactH5(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.h5(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactH5(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.h6")
@Suppress("UNUSED_PARAMETER")
fun reactH6(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.h6(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactH6(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.head")
@Suppress("UNUSED_PARAMETER")
fun reactHead(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.head(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactHead(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.header")
@Suppress("UNUSED_PARAMETER")
fun reactHeader(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.header(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactHeader(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.hr")
@Suppress("UNUSED_PARAMETER")
fun reactHr(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.hr(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactHr(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.html")
@Suppress("UNUSED_PARAMETER")
fun reactHtml(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.html(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactHtml(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.i")
@Suppress("UNUSED_PARAMETER")
fun reactI(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.i(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactI(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.iframe")
@Suppress("UNUSED_PARAMETER")
fun reactIframe(props: IframeProperties, vararg children: Any?): ReactComponent<IframeProperties, Any> = noImpl

public fun Component.iframe(properties: IframeProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactIframe(initProps(IframeProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.img")
@Suppress("UNUSED_PARAMETER")
fun reactImg(props: ImgProperties, vararg children: Any?): ReactComponent<ImgProperties, Any> = noImpl

public fun Component.img(properties: ImgProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactImg(initProps(ImgProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.input")
@Suppress("UNUSED_PARAMETER")
fun reactInput(props: InputProperties, vararg children: Any?): ReactComponent<InputProperties, Any> = noImpl

public fun Component.input(properties: InputProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactInput(initProps(InputProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.ins")
@Suppress("UNUSED_PARAMETER")
fun reactIns(props: InsProperties, vararg children: Any?): ReactComponent<InsProperties, Any> = noImpl

public fun Component.ins(properties: InsProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactIns(initProps(InsProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.kbd")
@Suppress("UNUSED_PARAMETER")
fun reactKbd(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.kbd(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactKbd(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.keygen")
@Suppress("UNUSED_PARAMETER")
fun reactKeygen(props: KeygenProperties, vararg children: Any?): ReactComponent<KeygenProperties, Any> = noImpl

public fun Component.keygen(properties: KeygenProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactKeygen(initProps(KeygenProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.label")
@Suppress("UNUSED_PARAMETER")
fun reactLabel(props: LabelProperties, vararg children: Any?): ReactComponent<LabelProperties, Any> = noImpl

public fun Component.label(properties: LabelProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactLabel(initProps(LabelProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.legend")
@Suppress("UNUSED_PARAMETER")
fun reactLegend(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.legend(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactLegend(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.li")
@Suppress("UNUSED_PARAMETER")
fun reactLi(props: LiProperties, vararg children: Any?): ReactComponent<LiProperties, Any> = noImpl

public fun Component.li(properties: LiProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactLi(initProps(LiProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.link")
@Suppress("UNUSED_PARAMETER")
fun reactLink(props: LinkProperties, vararg children: Any?): ReactComponent<LinkProperties, Any> = noImpl

public fun Component.link(properties: LinkProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactLink(initProps(LinkProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.main")
@Suppress("UNUSED_PARAMETER")
fun reactMain(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.main(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactMain(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.map")
@Suppress("UNUSED_PARAMETER")
fun reactMap(props: MapProperties, vararg children: Any?): ReactComponent<MapProperties, Any> = noImpl

public fun Component.map(properties: MapProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactMap(initProps(MapProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.mark")
@Suppress("UNUSED_PARAMETER")
fun reactMark(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.mark(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactMark(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.menu")
@Suppress("UNUSED_PARAMETER")
fun reactMenu(props: MenuProperties, vararg children: Any?): ReactComponent<MenuProperties, Any> = noImpl

public fun Component.menu(properties: MenuProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactMenu(initProps(MenuProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.menuitem")
@Suppress("UNUSED_PARAMETER")
fun reactMenuitem(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.menuitem(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactMenuitem(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.meta")
@Suppress("UNUSED_PARAMETER")
fun reactMeta(props: MetaProperties, vararg children: Any?): ReactComponent<MetaProperties, Any> = noImpl

public fun Component.meta(properties: MetaProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactMeta(initProps(MetaProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.meter")
@Suppress("UNUSED_PARAMETER")
fun reactMeter(props: MeterProperties, vararg children: Any?): ReactComponent<MeterProperties, Any> = noImpl

public fun Component.meter(properties: MeterProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactMeter(initProps(MeterProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.nav")
@Suppress("UNUSED_PARAMETER")
fun reactNav(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.nav(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactNav(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.noscript")
@Suppress("UNUSED_PARAMETER")
fun reactNoscript(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.noscript(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactNoscript(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.object")
@Suppress("UNUSED_PARAMETER")
fun reactObject(props: ObjectProperties, vararg children: Any?): ReactComponent<ObjectProperties, Any> = noImpl

public fun Component.obj(properties: ObjectProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactObject(initProps(ObjectProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.ol")
@Suppress("UNUSED_PARAMETER")
fun reactOl(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.ol(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactOl(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.optgroup")
@Suppress("UNUSED_PARAMETER")
fun reactOptgroup(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.optgroup(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactOptgroup(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.option")
@Suppress("UNUSED_PARAMETER")
fun reactOption(props: OptionProperties, vararg children: Any?): ReactComponent<OptionProperties, Any> = noImpl

public fun Component.option(properties: OptionProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactOption(initProps(OptionProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.output")
@Suppress("UNUSED_PARAMETER")
fun reactOutput(props: OutputProperties, vararg children: Any?): ReactComponent<OutputProperties, Any> = noImpl

public fun Component.output(properties: OutputProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactOutput(initProps(OutputProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.p")
@Suppress("UNUSED_PARAMETER")
fun reactP(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.p(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactP(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.param")
@Suppress("UNUSED_PARAMETER")
fun reactParam(props: ParamProperties, vararg children: Any?): ReactComponent<ParamProperties, Any> = noImpl

public fun Component.param(properties: ParamProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactParam(initProps(ParamProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.pre")
@Suppress("UNUSED_PARAMETER")
fun reactPre(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.pre(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactPre(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.progress")
@Suppress("UNUSED_PARAMETER")
fun reactProgress(props: ProgressProperties, vararg children: Any?): ReactComponent<ProgressProperties, Any> = noImpl

public fun Component.progress(properties: ProgressProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactProgress(initProps(ProgressProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.q")
@Suppress("UNUSED_PARAMETER")
fun reactQ(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.q(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactQ(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.rp")
@Suppress("UNUSED_PARAMETER")
fun reactRp(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.rp(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactRp(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.rt")
@Suppress("UNUSED_PARAMETER")
fun reactRt(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.rt(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactRt(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.ruby")
@Suppress("UNUSED_PARAMETER")
fun reactRuby(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.ruby(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactRuby(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.s")
@Suppress("UNUSED_PARAMETER")
fun reactS(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.s(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactS(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.samp")
@Suppress("UNUSED_PARAMETER")
fun reactSamp(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.samp(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactSamp(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.script")
@Suppress("UNUSED_PARAMETER")
fun reactScript(props: ScriptProperties, vararg children: Any?): ReactComponent<ScriptProperties, Any> = noImpl

public fun Component.script(properties: ScriptProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactScript(initProps(ScriptProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.section")
@Suppress("UNUSED_PARAMETER")
fun reactSection(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.section(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactSection(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.select")
@Suppress("UNUSED_PARAMETER")
fun reactSelect(props: SelectProperties, vararg children: Any?): ReactComponent<SelectProperties, Any> = noImpl

public fun Component.select(properties: SelectProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactSelect(initProps(SelectProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.small")
@Suppress("UNUSED_PARAMETER")
fun reactSmall(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.small(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactSmall(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.source")
@Suppress("UNUSED_PARAMETER")
fun reactSource(props: SourceProperties, vararg children: Any?): ReactComponent<SourceProperties, Any> = noImpl

public fun Component.source(properties: SourceProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactSource(initProps(SourceProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.span")
@Suppress("UNUSED_PARAMETER")
fun reactSpan(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.span(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactSpan(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.strong")
@Suppress("UNUSED_PARAMETER")
fun reactStrong(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.strong(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactStrong(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.style")
@Suppress("UNUSED_PARAMETER")
fun reactStyle(props: StyleProperties, vararg children: Any?): ReactComponent<StyleProperties, Any> = noImpl

public fun Component.style(properties: StyleProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactStyle(initProps(StyleProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.sub")
@Suppress("UNUSED_PARAMETER")
fun reactSub(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.sub(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactSub(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.summary")
@Suppress("UNUSED_PARAMETER")
fun reactSummary(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.summary(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactSummary(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.sup")
@Suppress("UNUSED_PARAMETER")
fun reactSup(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.sup(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactSup(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.table")
@Suppress("UNUSED_PARAMETER")
fun reactTable(props: TableProperties, vararg children: Any?): ReactComponent<TableProperties, Any> = noImpl

public fun Component.table(properties: TableProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactTable(initProps(TableProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.tbody")
@Suppress("UNUSED_PARAMETER")
fun reactTbody(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.tbody(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactTbody(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.td")
@Suppress("UNUSED_PARAMETER")
fun reactTd(props: TdProperties, vararg children: Any?): ReactComponent<TdProperties, Any> = noImpl

public fun Component.td(properties: TdProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactTd(initProps(TdProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.textarea")
@Suppress("UNUSED_PARAMETER")
fun reactTextarea(props: TextareaProperties, vararg children: Any?): ReactComponent<TextareaProperties, Any> = noImpl

public fun Component.textarea(properties: TextareaProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactTextarea(initProps(TextareaProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.tfoot")
@Suppress("UNUSED_PARAMETER")
fun reactTfoot(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.tfoot(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactTfoot(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.th")
@Suppress("UNUSED_PARAMETER")
fun reactTh(props: ThProperties, vararg children: Any?): ReactComponent<ThProperties, Any> = noImpl

public fun Component.th(properties: ThProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactTh(initProps(ThProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.thead")
@Suppress("UNUSED_PARAMETER")
fun reactThead(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.thead(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactThead(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.time")
@Suppress("UNUSED_PARAMETER")
fun reactTime(props: TimeProperties, vararg children: Any?): ReactComponent<TimeProperties, Any> = noImpl

public fun Component.time(properties: TimeProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactTime(initProps(TimeProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.title")
@Suppress("UNUSED_PARAMETER")
fun reactTitle(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.title(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactTitle(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.tr")
@Suppress("UNUSED_PARAMETER")
fun reactTr(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.tr(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactTr(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.track")
@Suppress("UNUSED_PARAMETER")
fun reactTrack(props: TrackProperties, vararg children: Any?): ReactComponent<TrackProperties, Any> = noImpl

public fun Component.track(properties: TrackProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactTrack(initProps(TrackProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.u")
@Suppress("UNUSED_PARAMETER")
fun reactU(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.u(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactU(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.ul")
@Suppress("UNUSED_PARAMETER")
fun reactUl(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.ul(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactUl(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.var")
@Suppress("UNUSED_PARAMETER")
fun reactVar(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.variable(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactVar(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.video")
@Suppress("UNUSED_PARAMETER")
fun reactVideo(props: VideoProperties, vararg children: Any?): ReactComponent<VideoProperties, Any> = noImpl

public fun Component.video(properties: VideoProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactVideo(initProps(VideoProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.wbr")
@Suppress("UNUSED_PARAMETER")
fun reactWbr(props: HtmlGlobalProperties, vararg children: Any?): ReactComponent<HtmlGlobalProperties, Any> = noImpl

public fun Component.wbr(properties: HtmlGlobalProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactWbr(initProps(HtmlGlobalProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.circle")
@Suppress("UNUSED_PARAMETER")
fun reactCircle(props: SvgProperties, vararg children: Any?): ReactComponent<SvgProperties, Any> = noImpl

public fun Component.circle(properties: SvgProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactCircle(initProps(SvgProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.g")
@Suppress("UNUSED_PARAMETER")
fun reactG(props: SvgProperties, vararg children: Any?): ReactComponent<SvgProperties, Any> = noImpl

public fun Component.g(properties: SvgProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactG(initProps(SvgProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.line")
@Suppress("UNUSED_PARAMETER")
fun reactLine(props: SvgProperties, vararg children: Any?): ReactComponent<SvgProperties, Any> = noImpl

public fun Component.line(properties: SvgProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactLine(initProps(SvgProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.path")
@Suppress("UNUSED_PARAMETER")
fun reactPath(props: SvgProperties, vararg children: Any?): ReactComponent<SvgProperties, Any> = noImpl

public fun Component.path(properties: SvgProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactPath(initProps(SvgProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.polygon")
@Suppress("UNUSED_PARAMETER")
fun reactPolygon(props: SvgProperties, vararg children: Any?): ReactComponent<SvgProperties, Any> = noImpl

public fun Component.polygon(properties: SvgProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactPolygon(initProps(SvgProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.polyline")
@Suppress("UNUSED_PARAMETER")
fun reactPolyline(props: SvgProperties, vararg children: Any?): ReactComponent<SvgProperties, Any> = noImpl

public fun Component.polyline(properties: SvgProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactPolyline(initProps(SvgProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.rect")
@Suppress("UNUSED_PARAMETER")
fun reactRect(props: SvgProperties, vararg children: Any?): ReactComponent<SvgProperties, Any> = noImpl

public fun Component.rect(properties: SvgProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactRect(initProps(SvgProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.svg")
@Suppress("UNUSED_PARAMETER")
fun reactSvg(props: SvgProperties, vararg children: Any?): ReactComponent<SvgProperties, Any> = noImpl

public fun Component.svg(properties: SvgProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactSvg(initProps(SvgProperties(), properties), *it.transformChildren()) }), init)
}

@native("React.DOM.text")
@Suppress("UNUSED_PARAMETER")
fun reactText(props: SvgProperties, vararg children: Any?): ReactComponent<SvgProperties, Any> = noImpl

public fun Component.text(properties: SvgProperties.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactText(initProps(SvgProperties(), properties), *it.transformChildren()) }), init)
}
