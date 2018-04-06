$(document).ready(() => {
    let $area = $('.area'),
        $cross = $('.cross'),
        $white = $('#white'),
        $black = $('#black'),
        clickCounter = 0,
        matrix = [],
        winningsConditions = 4,
        templateWhitePlayer = 'w',
        templateBlackPlayer = 'b',
        areaSize = 15;
    for (let i = 0; i < areaSize; i++) {
        $area.append(`<div class = 'row' data-row = '${i}'></div>`);
        matrix.push([]);
        for (let j = 0; j < areaSize; j++) {
            $(`[data-row=${i}]`).append(`<div class = 'cell' data-cell = '${j}'></div>`);
            matrix[i].push('0');
        }
    }
    for (let i = 0; i < ((areaSize - 1) * (areaSize - 1)); i++) {
        $cross.append(`<div class = 'cellCross'></div>`);
    }
    $('#btn').click(() => {
        this.location.reload();
    });
    $area.click((e) => {
        $cellDiv = $(e.target).closest('.cell');
        $rowDiv = $(e.target).closest('.row');
        let matrixCoordinateX = $cellDiv.attr('data-cell');
        let matrixCoordinateY = $rowDiv.attr('data-row');
        if (clickCounter === ((areaSize * areaSize) - 1)) {
            $area.off('click');
            $('.message').prepend('<p>Draw)))))</p>').fadeIn('slow');
        }
        if (clickCounter % 2 === 0 && $cellDiv.find('div').length === 0) {
            $circleWhite = $('<div class = whiteCircle>');
            $cellDiv.append($circleWhite);
            matrix[matrixCoordinateY][matrixCoordinateX] = templateWhitePlayer;
            clickCounter++;
            if (clickCounter > (winningsConditions + 2)) {
                if (checkWiner(templateWhitePlayer, matrixCoordinateY, matrixCoordinateX)) {
                    $area.off('click');
                    $('.message').prepend(message('White')).fadeIn('slow');
                }
            }
            $white.toggleClass('whiteBorder');
            $black.toggleClass('blackBorder');
        } else if (clickCounter % 2 !== 0 && $cellDiv.find('div').length === 0) {
            $circleBlack = $('<div class = blackCircle>');
            $cellDiv.append($circleBlack);
            matrix[matrixCoordinateY][matrixCoordinateX] = templateBlackPlayer;
            clickCounter++;
            if (clickCounter > (winningsConditions + 2)) {
                if (checkWiner(templateBlackPlayer, matrixCoordinateY, matrixCoordinateX)) {
                    $area.off('click');
                    $('.message').prepend(message('Black')).fadeIn('slow');
                }
            }
            $white.toggleClass('whiteBorder');
            $black.toggleClass('blackBorder');
        }
    });

    function message(color) {
        return `Congratulation!!! The ${color} won!`
    }

    function checkWiner(template, row, cell) {
        if (checkHorizontal(template, row, cell)) {
            return true;
        }
        if (checkVertical(template, row, cell)) {
            return true;
        }
        if (checkDiagonalLeftToRight(template, row, cell)) {
            return true;
        }
        if (checkDiagonalRightToLeft(template, row, cell)) {
            return true;
        }
    }

    function checkHorizontal(template, row, cell) {
        let count = 1,
            baseCell = cell;
        while (+cell + 1 <= 14 && matrix[row][++cell] === template) {
            count++;
        }
        cell = baseCell;
        while (cell - 1 >= 0 && matrix[row][--cell] === template) {
            count++;
        }
        return count === winningsConditions ? true : false;
    }

    function checkVertical(template, row, cell) {
        let count = 1,
            baseRow = row;
        while (+row + 1 <= 14 && matrix[++row][cell] === template) {
            count++;
        }
        row = baseRow;
        while (row - 1 >= 0 && matrix[--row][cell] === template) {
            count++;
        }
        return count === winningsConditions ? true : false;
    }

    function checkDiagonalLeftToRight(template, row, cell) {
        let count = 1,
            baseRow = row,
            baseCell = cell;
        while ((+row + 1 <= 14) && (+cell + 1 <= 14) && matrix[++row][++cell] === template) {
            count++;
        }
        row = baseRow;
        cell = baseCell;
        while ((row - 1 >= 0) && (cell - 1 >= 0) && matrix[--row][--cell] === template) {
            count++;
        }
        return count === winningsConditions ? true : false;
    }

    function checkDiagonalRightToLeft(template, row, cell) {
        let count = 1,
            baseRow = row,
            baseCell = cell;
        while ((+row + 1 <= 14) && (cell - 1 >= 0) && matrix[++row][--cell] === template) {
            count++;
        }
        row = baseRow;
        cell = baseCell;
        while ((row - 1 >= 0) && (+cell + 1 <= 14) && matrix[--row][++cell] === template) {
            count++;
        }
        return count === winningsConditions ? true : false;
    }
});