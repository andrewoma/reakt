package com.github.andrewoma.react

fun <T> initProps(properties: T, init: T.() -> Unit): T {
    properties.init()
    return flatten(properties)
}

public fun Component.text(value: String, init: Component.() -> Unit = {}): Component
        = construct(Component({ value }), init)

native("React.DOM.a") suppress("UNUSED_PARAMETER")
fun reactA(props: AAttributes, vararg children: Any?): ReactComponent<AAttributes, Any> = noImpl
public fun Component.a(properties: AAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactA(initProps(AAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.abbr") suppress("UNUSED_PARAMETER")
fun reactAbbr(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.abbr(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactAbbr(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.address") suppress("UNUSED_PARAMETER")
fun reactAddress(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.address(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactAddress(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.area") suppress("UNUSED_PARAMETER")
fun reactArea(props: AreaAttributes, vararg children: Any?): ReactComponent<AreaAttributes, Any> = noImpl
public fun Component.area(properties: AreaAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactArea(initProps(AreaAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.article") suppress("UNUSED_PARAMETER")
fun reactArticle(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.article(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactArticle(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.aside") suppress("UNUSED_PARAMETER")
fun reactAside(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.aside(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactAside(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.audio") suppress("UNUSED_PARAMETER")
fun reactAudio(props: AudioAttributes, vararg children: Any?): ReactComponent<AudioAttributes, Any> = noImpl
public fun Component.audio(properties: AudioAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactAudio(initProps(AudioAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.b") suppress("UNUSED_PARAMETER")
fun reactB(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.b(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactB(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.base") suppress("UNUSED_PARAMETER")
fun reactBase(props: BaseAttributes, vararg children: Any?): ReactComponent<BaseAttributes, Any> = noImpl
public fun Component.base(properties: BaseAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactBase(initProps(BaseAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.bdi") suppress("UNUSED_PARAMETER")
fun reactBdi(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.bdi(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactBdi(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.bdo") suppress("UNUSED_PARAMETER")
fun reactBdo(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.bdo(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactBdo(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.big") suppress("UNUSED_PARAMETER")
fun reactBig(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.big(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactBig(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.blockquote") suppress("UNUSED_PARAMETER")
fun reactBlockquote(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.blockquote(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactBlockquote(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.body") suppress("UNUSED_PARAMETER")
fun reactBody(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.body(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactBody(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.br") suppress("UNUSED_PARAMETER")
fun reactBr(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.br(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactBr(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.button") suppress("UNUSED_PARAMETER")
fun reactButton(props: ButtonAttributes, vararg children: Any?): ReactComponent<ButtonAttributes, Any> = noImpl
public fun Component.button(properties: ButtonAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactButton(initProps(ButtonAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.canvas") suppress("UNUSED_PARAMETER")
fun reactCanvas(props: CanvasAttributes, vararg children: Any?): ReactComponent<CanvasAttributes, Any> = noImpl
public fun Component.canvas(properties: CanvasAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactCanvas(initProps(CanvasAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.caption") suppress("UNUSED_PARAMETER")
fun reactCaption(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.caption(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactCaption(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.cite") suppress("UNUSED_PARAMETER")
fun reactCite(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.cite(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactCite(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.code") suppress("UNUSED_PARAMETER")
fun reactCode(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.code(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactCode(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.col") suppress("UNUSED_PARAMETER")
fun reactCol(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.col(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactCol(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.colgroup") suppress("UNUSED_PARAMETER")
fun reactColgroup(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.colgroup(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactColgroup(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.data") suppress("UNUSED_PARAMETER")
fun reactData(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.data(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactData(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.datalist") suppress("UNUSED_PARAMETER")
fun reactDatalist(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.datalist(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactDatalist(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.dd") suppress("UNUSED_PARAMETER")
fun reactDd(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.dd(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactDd(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.del") suppress("UNUSED_PARAMETER")
fun reactDel(props: DelAttributes, vararg children: Any?): ReactComponent<DelAttributes, Any> = noImpl
public fun Component.del(properties: DelAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactDel(initProps(DelAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.details") suppress("UNUSED_PARAMETER")
fun reactDetails(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.details(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactDetails(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.dfn") suppress("UNUSED_PARAMETER")
fun reactDfn(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.dfn(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactDfn(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.div") suppress("UNUSED_PARAMETER")
fun reactDiv(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.div(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactDiv(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.dl") suppress("UNUSED_PARAMETER")
fun reactDl(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.dl(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactDl(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.dt") suppress("UNUSED_PARAMETER")
fun reactDt(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.dt(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactDt(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.em") suppress("UNUSED_PARAMETER")
fun reactEm(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.em(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactEm(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.embed") suppress("UNUSED_PARAMETER")
fun reactEmbed(props: EmbedAttributes, vararg children: Any?): ReactComponent<EmbedAttributes, Any> = noImpl
public fun Component.embed(properties: EmbedAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactEmbed(initProps(EmbedAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.fieldset") suppress("UNUSED_PARAMETER")
fun reactFieldset(props: FieldsetAttributes, vararg children: Any?): ReactComponent<FieldsetAttributes, Any> = noImpl
public fun Component.fieldset(properties: FieldsetAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactFieldset(initProps(FieldsetAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.figcaption") suppress("UNUSED_PARAMETER")
fun reactFigcaption(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.figcaption(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactFigcaption(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.figure") suppress("UNUSED_PARAMETER")
fun reactFigure(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.figure(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactFigure(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.footer") suppress("UNUSED_PARAMETER")
fun reactFooter(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.footer(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactFooter(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.form") suppress("UNUSED_PARAMETER")
fun reactForm(props: FormAttributes, vararg children: Any?): ReactComponent<FormAttributes, Any> = noImpl
public fun Component.form(properties: FormAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactForm(initProps(FormAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.h1") suppress("UNUSED_PARAMETER")
fun reactH1(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.h1(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactH1(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.h2") suppress("UNUSED_PARAMETER")
fun reactH2(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.h2(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactH2(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.h3") suppress("UNUSED_PARAMETER")
fun reactH3(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.h3(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactH3(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.h4") suppress("UNUSED_PARAMETER")
fun reactH4(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.h4(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactH4(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.h5") suppress("UNUSED_PARAMETER")
fun reactH5(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.h5(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactH5(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.h6") suppress("UNUSED_PARAMETER")
fun reactH6(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.h6(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactH6(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.head") suppress("UNUSED_PARAMETER")
fun reactHead(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.head(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactHead(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.header") suppress("UNUSED_PARAMETER")
fun reactHeader(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.header(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactHeader(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.hr") suppress("UNUSED_PARAMETER")
fun reactHr(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.hr(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactHr(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.html") suppress("UNUSED_PARAMETER")
fun reactHtml(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.html(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactHtml(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.i") suppress("UNUSED_PARAMETER")
fun reactI(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.i(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactI(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.iframe") suppress("UNUSED_PARAMETER")
fun reactIframe(props: IframeAttributes, vararg children: Any?): ReactComponent<IframeAttributes, Any> = noImpl
public fun Component.iframe(properties: IframeAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactIframe(initProps(IframeAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.img") suppress("UNUSED_PARAMETER")
fun reactImg(props: ImgAttributes, vararg children: Any?): ReactComponent<ImgAttributes, Any> = noImpl
public fun Component.img(properties: ImgAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactImg(initProps(ImgAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.input") suppress("UNUSED_PARAMETER")
fun reactInput(props: InputAttributes, vararg children: Any?): ReactComponent<InputAttributes, Any> = noImpl
public fun Component.input(properties: InputAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactInput(initProps(InputAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.ins") suppress("UNUSED_PARAMETER")
fun reactIns(props: InsAttributes, vararg children: Any?): ReactComponent<InsAttributes, Any> = noImpl
public fun Component.ins(properties: InsAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactIns(initProps(InsAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.kbd") suppress("UNUSED_PARAMETER")
fun reactKbd(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.kbd(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactKbd(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.keygen") suppress("UNUSED_PARAMETER")
fun reactKeygen(props: KeygenAttributes, vararg children: Any?): ReactComponent<KeygenAttributes, Any> = noImpl
public fun Component.keygen(properties: KeygenAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactKeygen(initProps(KeygenAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.label") suppress("UNUSED_PARAMETER")
fun reactLabel(props: LabelAttributes, vararg children: Any?): ReactComponent<LabelAttributes, Any> = noImpl
public fun Component.label(properties: LabelAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactLabel(initProps(LabelAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.legend") suppress("UNUSED_PARAMETER")
fun reactLegend(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.legend(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactLegend(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.li") suppress("UNUSED_PARAMETER")
fun reactLi(props: LiAttributes, vararg children: Any?): ReactComponent<LiAttributes, Any> = noImpl
public fun Component.li(properties: LiAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactLi(initProps(LiAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.link") suppress("UNUSED_PARAMETER")
fun reactLink(props: LinkAttributes, vararg children: Any?): ReactComponent<LinkAttributes, Any> = noImpl
public fun Component.link(properties: LinkAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactLink(initProps(LinkAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.main") suppress("UNUSED_PARAMETER")
fun reactMain(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.main(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactMain(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.map") suppress("UNUSED_PARAMETER")
fun reactMap(props: MapAttributes, vararg children: Any?): ReactComponent<MapAttributes, Any> = noImpl
public fun Component.map(properties: MapAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactMap(initProps(MapAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.mark") suppress("UNUSED_PARAMETER")
fun reactMark(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.mark(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactMark(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.menu") suppress("UNUSED_PARAMETER")
fun reactMenu(props: MenuAttributes, vararg children: Any?): ReactComponent<MenuAttributes, Any> = noImpl
public fun Component.menu(properties: MenuAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactMenu(initProps(MenuAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.menuitem") suppress("UNUSED_PARAMETER")
fun reactMenuitem(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.menuitem(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactMenuitem(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.meta") suppress("UNUSED_PARAMETER")
fun reactMeta(props: MetaAttributes, vararg children: Any?): ReactComponent<MetaAttributes, Any> = noImpl
public fun Component.meta(properties: MetaAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactMeta(initProps(MetaAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.meter") suppress("UNUSED_PARAMETER")
fun reactMeter(props: MeterAttributes, vararg children: Any?): ReactComponent<MeterAttributes, Any> = noImpl
public fun Component.meter(properties: MeterAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactMeter(initProps(MeterAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.nav") suppress("UNUSED_PARAMETER")
fun reactNav(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.nav(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactNav(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.noscript") suppress("UNUSED_PARAMETER")
fun reactNoscript(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.noscript(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactNoscript(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.object") suppress("UNUSED_PARAMETER")
fun reactObject(props: ObjectAttributes, vararg children: Any?): ReactComponent<ObjectAttributes, Any> = noImpl
public fun Component.obj(properties: ObjectAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactObject(initProps(ObjectAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.ol") suppress("UNUSED_PARAMETER")
fun reactOl(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.ol(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactOl(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.optgroup") suppress("UNUSED_PARAMETER")
fun reactOptgroup(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.optgroup(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactOptgroup(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.option") suppress("UNUSED_PARAMETER")
fun reactOption(props: OptionAttributes, vararg children: Any?): ReactComponent<OptionAttributes, Any> = noImpl
public fun Component.option(properties: OptionAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactOption(initProps(OptionAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.output") suppress("UNUSED_PARAMETER")
fun reactOutput(props: OutputAttributes, vararg children: Any?): ReactComponent<OutputAttributes, Any> = noImpl
public fun Component.output(properties: OutputAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactOutput(initProps(OutputAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.p") suppress("UNUSED_PARAMETER")
fun reactP(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.p(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactP(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.param") suppress("UNUSED_PARAMETER")
fun reactParam(props: ParamAttributes, vararg children: Any?): ReactComponent<ParamAttributes, Any> = noImpl
public fun Component.param(properties: ParamAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactParam(initProps(ParamAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.pre") suppress("UNUSED_PARAMETER")
fun reactPre(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.pre(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactPre(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.progress") suppress("UNUSED_PARAMETER")
fun reactProgress(props: ProgressAttributes, vararg children: Any?): ReactComponent<ProgressAttributes, Any> = noImpl
public fun Component.progress(properties: ProgressAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactProgress(initProps(ProgressAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.q") suppress("UNUSED_PARAMETER")
fun reactQ(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.q(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactQ(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.rp") suppress("UNUSED_PARAMETER")
fun reactRp(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.rp(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactRp(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.rt") suppress("UNUSED_PARAMETER")
fun reactRt(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.rt(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactRt(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.ruby") suppress("UNUSED_PARAMETER")
fun reactRuby(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.ruby(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactRuby(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.s") suppress("UNUSED_PARAMETER")
fun reactS(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.s(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactS(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.samp") suppress("UNUSED_PARAMETER")
fun reactSamp(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.samp(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactSamp(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.script") suppress("UNUSED_PARAMETER")
fun reactScript(props: ScriptAttributes, vararg children: Any?): ReactComponent<ScriptAttributes, Any> = noImpl
public fun Component.script(properties: ScriptAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactScript(initProps(ScriptAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.section") suppress("UNUSED_PARAMETER")
fun reactSection(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.section(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactSection(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.select") suppress("UNUSED_PARAMETER")
fun reactSelect(props: SelectAttributes, vararg children: Any?): ReactComponent<SelectAttributes, Any> = noImpl
public fun Component.select(properties: SelectAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactSelect(initProps(SelectAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.small") suppress("UNUSED_PARAMETER")
fun reactSmall(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.small(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactSmall(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.source") suppress("UNUSED_PARAMETER")
fun reactSource(props: SourceAttributes, vararg children: Any?): ReactComponent<SourceAttributes, Any> = noImpl
public fun Component.source(properties: SourceAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactSource(initProps(SourceAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.span") suppress("UNUSED_PARAMETER")
fun reactSpan(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.span(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactSpan(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.strong") suppress("UNUSED_PARAMETER")
fun reactStrong(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.strong(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactStrong(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.style") suppress("UNUSED_PARAMETER")
fun reactStyle(props: StyleAttributes, vararg children: Any?): ReactComponent<StyleAttributes, Any> = noImpl
public fun Component.style(properties: StyleAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactStyle(initProps(StyleAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.sub") suppress("UNUSED_PARAMETER")
fun reactSub(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.sub(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactSub(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.summary") suppress("UNUSED_PARAMETER")
fun reactSummary(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.summary(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactSummary(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.sup") suppress("UNUSED_PARAMETER")
fun reactSup(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.sup(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactSup(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.table") suppress("UNUSED_PARAMETER")
fun reactTable(props: TableAttributes, vararg children: Any?): ReactComponent<TableAttributes, Any> = noImpl
public fun Component.table(properties: TableAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactTable(initProps(TableAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.tbody") suppress("UNUSED_PARAMETER")
fun reactTbody(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.tbody(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactTbody(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.td") suppress("UNUSED_PARAMETER")
fun reactTd(props: TdAttributes, vararg children: Any?): ReactComponent<TdAttributes, Any> = noImpl
public fun Component.td(properties: TdAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactTd(initProps(TdAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.textarea") suppress("UNUSED_PARAMETER")
fun reactTextarea(props: TextareaAttributes, vararg children: Any?): ReactComponent<TextareaAttributes, Any> = noImpl
public fun Component.textarea(properties: TextareaAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactTextarea(initProps(TextareaAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.tfoot") suppress("UNUSED_PARAMETER")
fun reactTfoot(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.tfoot(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactTfoot(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.th") suppress("UNUSED_PARAMETER")
fun reactTh(props: ThAttributes, vararg children: Any?): ReactComponent<ThAttributes, Any> = noImpl
public fun Component.th(properties: ThAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactTh(initProps(ThAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.thead") suppress("UNUSED_PARAMETER")
fun reactThead(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.thead(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactThead(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.time") suppress("UNUSED_PARAMETER")
fun reactTime(props: TimeAttributes, vararg children: Any?): ReactComponent<TimeAttributes, Any> = noImpl
public fun Component.time(properties: TimeAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactTime(initProps(TimeAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.title") suppress("UNUSED_PARAMETER")
fun reactTitle(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.title(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactTitle(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.tr") suppress("UNUSED_PARAMETER")
fun reactTr(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.tr(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactTr(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.track") suppress("UNUSED_PARAMETER")
fun reactTrack(props: TrackAttributes, vararg children: Any?): ReactComponent<TrackAttributes, Any> = noImpl
public fun Component.track(properties: TrackAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactTrack(initProps(TrackAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.u") suppress("UNUSED_PARAMETER")
fun reactU(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.u(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactU(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.ul") suppress("UNUSED_PARAMETER")
fun reactUl(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.ul(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactUl(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.var") suppress("UNUSED_PARAMETER")
fun reactVar(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.variable(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactVar(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.video") suppress("UNUSED_PARAMETER")
fun reactVideo(props: VideoAttributes, vararg children: Any?): ReactComponent<VideoAttributes, Any> = noImpl
public fun Component.video(properties: VideoAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactVideo(initProps(VideoAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.wbr") suppress("UNUSED_PARAMETER")
fun reactWbr(props: HTMLGlobalAttributes, vararg children: Any?): ReactComponent<HTMLGlobalAttributes, Any> = noImpl
public fun Component.wbr(properties: HTMLGlobalAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactWbr(initProps(HTMLGlobalAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.circle") suppress("UNUSED_PARAMETER")
fun reactCircle(props: SVGAttributes, vararg children: Any?): ReactComponent<SVGAttributes, Any> = noImpl
public fun Component.circle(properties: SVGAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactCircle(initProps(SVGAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.g") suppress("UNUSED_PARAMETER")
fun reactG(props: SVGAttributes, vararg children: Any?): ReactComponent<SVGAttributes, Any> = noImpl
public fun Component.g(properties: SVGAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactG(initProps(SVGAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.line") suppress("UNUSED_PARAMETER")
fun reactLine(props: SVGAttributes, vararg children: Any?): ReactComponent<SVGAttributes, Any> = noImpl
public fun Component.line(properties: SVGAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactLine(initProps(SVGAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.path") suppress("UNUSED_PARAMETER")
fun reactPath(props: SVGAttributes, vararg children: Any?): ReactComponent<SVGAttributes, Any> = noImpl
public fun Component.path(properties: SVGAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactPath(initProps(SVGAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.polygon") suppress("UNUSED_PARAMETER")
fun reactPolygon(props: SVGAttributes, vararg children: Any?): ReactComponent<SVGAttributes, Any> = noImpl
public fun Component.polygon(properties: SVGAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactPolygon(initProps(SVGAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.polyline") suppress("UNUSED_PARAMETER")
fun reactPolyline(props: SVGAttributes, vararg children: Any?): ReactComponent<SVGAttributes, Any> = noImpl
public fun Component.polyline(properties: SVGAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactPolyline(initProps(SVGAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.rect") suppress("UNUSED_PARAMETER")
fun reactRect(props: SVGAttributes, vararg children: Any?): ReactComponent<SVGAttributes, Any> = noImpl
public fun Component.rect(properties: SVGAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactRect(initProps(SVGAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.svg") suppress("UNUSED_PARAMETER")
fun reactSvg(props: SVGAttributes, vararg children: Any?): ReactComponent<SVGAttributes, Any> = noImpl
public fun Component.svg(properties: SVGAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactSvg(initProps(SVGAttributes(), properties), *it.transformChildren()) }), init)
}

native("React.DOM.text") suppress("UNUSED_PARAMETER")
fun reactText(props: SVGAttributes, vararg children: Any?): ReactComponent<SVGAttributes, Any> = noImpl
public fun Component.text(properties: SVGAttributes.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ reactText(initProps(SVGAttributes(), properties), *it.transformChildren()) }), init)
}

